<!-- eslint-disable vue/no-v-html -->
<template>
    <div class="calculator__body">
        <div class="calculator__second-desktop-layout-container">
            <div class="calculator__input-container">
                <input class="calculator__input" :placeholder="$texts.phone" />
                <label class="calculator__input-label">{{
                    $texts.phone
                }}</label>
            </div>
            <div class="calculator__email-container">
                <div class="calculator__input-container">
                    <input
                        class="calculator__input"
                        :placeholder="$texts.email"
                    />
                    <label class="calculator__input-label">{{
                        $texts.email
                    }}</label>
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
                <button class="calculator__button animate_red">
                    <span class="calculator__arrow-right">
                        {{ $texts.next }}</span
                    >
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
export default {
    props: {
        goFirstStep: {
            type: Function,
            required: true,
        },
    },
};
</script>

<style
    lang="scss"
    src="@/assets/scss/components/Shared/DeliveryCalculator.scss"
    scoped
></style>
