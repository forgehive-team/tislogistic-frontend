<template>
    <div class="calculator">
        <h2 class="calculator__title">{{ $texts.calculateTitle }}</h2>
        <h5 class="calculator__subtitle">{{ $texts.legalEntitiesOnly }}</h5>
        <div class="calculator__steps">
            <div
                class="calculator__step"
                :class="{
                    calculator__step_active: isFirstStep,
                    calculator__step_text_red: isSecondStep,
                }"
            >
                <img
                    src="@/assets/icons/location.svg"
                    :class="{ calculator__step_red: isSecondStep }"
                />
                {{ $texts.step1 }}
            </div>
            <div
                class="calculator__step"
                :class="{ calculator__step_active: isSecondStep }"
            >
                <img
                    src="@/assets/icons/letter.svg"
                    :class="{ calculator__step_white: isSecondStep }"
                />
                {{ $texts.step2 }}
            </div>
        </div>
        <SharedCalculatorFirstStep
            v-if="firstStep"
            :go-second-step="goSecondStep"
            :handle-submit="handleSubmit"
            :form-data="formData"
            :invalid-input-messages="invalidInputMessages"
            @field-upd="updateField"
        />
        <SharedCalculatorSecondStep
            v-else
            :go-first-step="goFirstStep"
            :handle-submit="handleSubmit"
            :form-data="formData"
            :invalid-input-messages="invalidInputMessages"
            @field-upd="updateField"
        />
    </div>
</template>

<script>
import validate from '~~/helpers/validate';

export default {
    data() {
        return {
            firstStep: true,
            formData: {
                to: '',
                from: '',
                parcelDescription: '',
                phone: '',
                email: '',
            },
            invalidInputMessages: {
                to: '',
                from: '',
                parcelDescription: '',
                phone: '',
                email: '',
            },
        };
    },
    computed: {
        isFirstStep() {
            return this.firstStep;
        },
        isSecondStep() {
            return !this.firstStep;
        },
    },
    methods: {
        goFirstStep() {
            this.firstStep = true;
        },
        goSecondStep() {
            this.firstStep = false;
        },
        updateField(value, key) {
            this.formData[key] = value;
        },
        handleSubmit() {
            let valid = true;
            for (const [key, value] of Object.entries(this.formData)) {
                if (
                    (this.isFirstStep && ['phone', 'email'].includes(key)) ||
                    (this.isSecondStep && !['phone', 'email'].includes(key))
                ) {
                    continue;
                }
                const errMessage = validate(value, key);
                if (errMessage) {
                    this.invalidInputMessages[key] = errMessage;
                    valid = false;
                } else if (this.invalidInputMessages[key]) {
                    this.invalidInputMessages[key] = errMessage;
                }
            }
            if (!valid) return;
            this.isFirstStep ? this.goSecondStep() : this.sendData();
        },
        sendData() {
            console.log('Fetch: ', this.formData);
        },
    },
};
</script>

<style
    lang="scss"
    src="@/assets/scss/components/Shared/DeliveryCalculator.scss"
    scoped
></style>
