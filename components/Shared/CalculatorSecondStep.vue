<!-- eslint-disable vue/no-v-html -->
<template>
    <div class="calculator__body">
        <div class="calculator__second-desktop-layout-container">
            <SharedCalculatorBranchSelect
                :form-data="formData"
                :invalid-input-messages="invalidInputMessages"
                @field-upd="(value) => $emit('fieldUpd', value, 'city_id')"
            />
            <SharedCalculatorInput
                class="shrink"
                :form-data="formData"
                :invalid-input-messages="invalidInputMessages"
                input-name="phone"
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
                >
                    {{ $texts.send }}
                </button>
                <div class="calculator__confidentiality">
                    By clicking <span>"Send"</span>, you accept the terms of
                    <NuxtLink to="/eula" target="_blank"
                        >user agreement </NuxtLink
                    >and
                    <NuxtLink to="/politika-konfidencialnosti" target="_blank"
                        >privacy policy</NuxtLink
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { vMaska } from 'maska';
export default {
    directives: { maska: vMaska },
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
    emits: ['fieldUpd'],
};
</script>

<style
    lang="scss"
    src="@/assets/scss/components/Shared/DeliveryCalculator.scss"
    scoped
></style>
