<!-- eslint-disable vue/no-v-html -->
<template>
    <div class="calculator__body">
        <div class="calculator__second-desktop-layout-container">
            <div class="calculator__input-container">
                <input
                    v-maska
                    data-maska="+7 ### ###-##-##"
                    data-maska-eager
                    class="calculator__input"
                    :placeholder="$texts.phone"
                    :value="formData.phone"
                    @input="$emit('fieldUpd', $event.target.value, 'phone')"
                />
                <label class="calculator__input-label">{{
                    $texts.phone
                }}</label>
                <div
                    v-if="invalidInputMessages.phone"
                    class="calculator__error-message"
                >
                    {{ invalidInputMessages.phone }}
                </div>
            </div>
            <div class="calculator__email-container">
                <div class="calculator__input-container">
                    <input
                        type="email"
                        pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                        required
                        class="calculator__input"
                        :placeholder="$texts.email"
                        :value="formData.email"
                        @input="$emit('fieldUpd', $event.target.value, 'email')"
                    />
                    <label class="calculator__input-label">{{
                        $texts.email
                    }}</label>
                    <div
                        v-if="invalidInputMessages.email"
                        class="calculator__error-message"
                    >
                        {{ invalidInputMessages.email }}
                    </div>
                </div>
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
                    Нажимая кнопку <span>«Отправить»</span>, вы принимаете
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
