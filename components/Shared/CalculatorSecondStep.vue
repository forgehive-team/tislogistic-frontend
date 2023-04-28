<!-- eslint-disable vue/no-v-html -->
<template>
    <div class="calculator__body">
        <div class="calculator__second-desktop-layout-container">
            <SharedCalculatorInput
                :form-data="formData"
                :invalid-input-messages="invalidInputMessages"
                input-name="phone"
                @field-upd="(value) => $emit('fieldUpd', value, 'phone')"
            />

            <div class="calculator__email-container">
                <SharedCalculatorInput
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
        <div class="calculator__bottom text-right">
            <button
                class="calculator__button calculator__button_white"
                @click="goFirstStep"
            >
                <span class="calculator__arrow-left"> {{ $texts.back }} </span>
            </button>
            <div class="calculator__send-container">
                <button
                    class="calculator__button animate-red"
                    @click="handleSubmit"
                >
                    {{ $texts.send }}
                </button>
                <div class="calculator__confidentiality">
                    Нажимая кнопку <span>«Отправить»</span>, Вы принимаете
                    условия <span>пользовательского соглашения</span> и
                    <span>политики конфиденциальности</span>
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
        goFirstStep: {
            type: Function,
            required: true,
        },
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
