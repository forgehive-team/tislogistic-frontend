<!-- eslint-disable vue/no-v-html -->
<template>
    <div class="calculator__body">
        <div class="calculator__second-desktop-layout-container">
            <SharedCalculatorBranchSelect
                :form-data="formData"
                :invalid-input-messages="invalidInputMessages"
                @field-upd="(value) => $emit('fieldUpd', value, 'city_id')"
            />
            <SharedPhoneInput
                class="shrink"
                :val="formData.phone"
                :error-mes="invalidInputMessages.phone"
                @field-upd="(value) => $emit('fieldUpd', value, 'phone')"
            />

            <div class="calculator__email-container">
                <SharedCalculatorInput
                    class="shrink"
                    :form-data="formData"
                    :invalid-input-messages="invalidInputMessages"
                    input-name="email"
                    @field-upd="(value) => $emit('fieldUpd', value, 'email')"
                />
                <p class="calculator__email-note">
                    {{ $texts.calculatorEmailNote }}
                </p>
            </div>
        </div>
        <div class="calculator__bottom">
            <div class="calculator__send-container">
                <button
                    class="calculator__button animate-red"
                    @click="handleSubmit"
                    :disabled="!agreedToLegal"
                >
                    {{ $texts.send }}
                </button>
                <div class="calculator__confidentiality">
                    <input type="checkbox" v-model="agreedToLegal" />
                    <p>
                        I accept the conditions of
                        <NuxtLink to="/eula" target="_blank"
                            >user agreement
                        </NuxtLink>
                        and
                        <NuxtLink to="/privacy-policy" target="_blank"
                            >privacy policy</NuxtLink
                        >
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        handleSubmit: {
            type: Function,
            required: true,
        },
        formData: {
            type: Object,
            required: true,
        },
        invalidInputMessages: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            agreedToLegal: false,
        };
    },

    emits: ['fieldUpd'],
};
</script>

<style
    lang="scss"
    src="@/assets/scss/components/Shared/DeliveryCalculator.scss"
    scoped
></style>
