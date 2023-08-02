<template>
    <div id="calculator" class="calculator">
        <h2 class="calculator__title">{{ $texts.calculateTitle }}</h2>
        <p class="calculator__subtitle">{{ $texts.legalEntitiesOnly }}</p>
        <div class="calculator__steps">
            <div
                class="calculator__step _first-step"
                :class="{
                    calculator__step_active: isFirstStep,
                    calculator__step_text_red: isSecondStep,
                }"
            >
                <img
                    src="@/assets/icons/location.svg"
                    :class="{ calculator__step_red: isSecondStep }"
                    alt=""
                />
                {{ $texts.step1 }}
            </div>
            <div
                class="calculator__step"
                :class="{ calculator__step_active: isSecondStep }"
            >
                <IconsWriteLetter
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
    setup() {
        const calculatorPopupShown = useCalculatorPopup();
        const successShown = useSuccessModal();
        return {
            calculatorPopupShown,
            successShown,
        };
    },
    data() {
        return {
            firstStep: true,
            formData: {
                city_id: '',
                from: '',
                to: '',
                description: '',
                phone: '',
                email: '',
            },
            invalidInputMessages: {
                city_id: '',
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
                    (this.isFirstStep &&
                        ['phone', 'email', 'city_id'].includes(key)) ||
                    (this.isSecondStep &&
                        !['phone', 'email', 'city_id'].includes(key))
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
        async sendData() {
            const { apiBase } = useRuntimeConfig();
            this.successShown = !this.successShown;
            this.calculatorPopupShown = false;
            try {
                await $fetch(`${apiBase}/api/calculation_request/submit`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(this.formData),
                });
                this.clearData();
            } catch (err) {
                this.clearData();
            }
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
