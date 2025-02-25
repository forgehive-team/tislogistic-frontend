<template>
    <div id="calculator" class="calculator">
        <h2 class="calculator__title">{{ title || $texts.calculateTitle }}</h2>
        <p class="calculator__subtitle">
            {{ subtitle || $texts.legalEntitiesOnly }}
        </p>
        <SharedCalculatorSecondStep
            :handle-submit="handleSubmit"
            :form-data="formData"
            :invalid-input-messages="invalidInputMessages"
            @field-upd="updateField"
        />
        <SharedIntentModal
            v-if="intentModalShown"
            @close="intentModalShown = false"
            @confirm="sendData"
        />
    </div>
</template>

<script>
import { useReCaptcha } from 'vue-recaptcha-v3';
import validate from '~~/helpers/validate';

export default {
    props: {
        title: {
            type: String,
            required: false,
        },
        subtitle: {
            type: String,
            required: false,
        },
    },
    setup() {
        const recaptchaInstance = useReCaptcha();
        const recaptcha = async () => {
            await recaptchaInstance?.recaptchaLoaded();
            return recaptchaInstance?.executeRecaptcha('submit');
        };
        const calculatorPopupShown = useCalculatorPopup();
        const successShown = useSuccessModal();
        const route = useRoute();
        return {
            calculatorPopupShown,
            successShown,
            route,
            recaptcha,
        };
    },
    data() {
        return {
            intentModalShown: false,
            firstStep: false,
            formData: {
                city_id: '',
                phone: '+7',
                email: '',
            },
            invalidInputMessages: {
                city_id: '',
                phone: '',
                email: '',
            },
            unwatchers: {
                phone: null,
                email: null,
            },
        };
    },
    methods: {
        clearError(key, unwatch) {
            this.invalidInputMessages[key] = '';
            unwatch();
        },
        updateField(value, key) {
            this.formData[key] = value;
        },
        handleSubmit() {
            let valid = true;
            for (const [key, value] of Object.entries(this.formData)) {
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
            this.intentModalShown = true;
        },

        async sendData() {
            const { apiBase } = useRuntimeConfig();
            this.successShown = !this.successShown;
            this.calculatorPopupShown = false;
            const queryParams = Object.keys(this.route.query).length
                ? this.route.query
                : null;
            const token = await this.recaptcha();
            const data = { ...this.formData, query_params: queryParams, token };
            try {
                if (dataLayer) {
                    dataLayer.push({ event: 'calc_delivery' });
                }
                await $fetch(`${apiBase}/api/calculation_request/submit`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                    credentials: 'include',
                });
            } finally {
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
