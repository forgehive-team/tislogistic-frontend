<template>
    <div id="calculator" class="calculator">
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
                from: '',
                to: '',
                description: '',
                phone: '',
                email: '',
            },
            invalidInputMessages: {
                to: '',
                from: '',
                description: '',
                phone: '',
                email: '',
            },
            unwatchers: {
                to: null,
                from: null,
                description: null,
                phone: null,
                email: null,
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
        clearError(key, unwatch) {
            this.invalidInputMessages[key] = '';
            unwatch();
        },
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
                    // watch changes only until the error is cleared
                    const unwatch = this.$watch(
                        () => this.formData[key],
                        () => this.clearError(key, unwatch)
                    );
                }
            }
            if (!valid) return;
            this.isFirstStep ? this.goSecondStep() : this.sendData();
        },
        sendData() {
            // try {
            //     await $fetch(
            //         'https://tislogistic.ru/api/calculation_request/submit',
            //         {
            //             method: 'POST',
            //             headers: {
            //                 'Content-Type': 'application/json',
            //             },
            //             body: JSON.stringify(this.formData),
            //         }
            //     );
            //     this.clearData();
            // } catch (err) {
            //     console.log(err);
            // }
            console.log(this.formData);
        },
        clearData() {
            for (const key in this.formData) {
                this.formData[key] = '';
            }
        },
    },
};
</script>

<style
    lang="scss"
    src="@/assets/scss/components/Shared/DeliveryCalculator.scss"
    scoped
></style>
