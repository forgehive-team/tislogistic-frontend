<template>
    <div class="presentation">
        <div class="presentation__content">
            <h2 class="presentation__title">{{ $texts.presentationTitle }}</h2>
            <p class="presentation__text">
                {{ $texts.presentationDescription }}
            </p>
            <div class="btns-container">
                <div class="input-container">
                    <IconsEmailIcon />
                    <input v-model="email" :placeholder="$texts.email" />
                </div>
                <button @click="handleSubmit">
                    Отправить
                    <IconsArrowRight />
                </button>
            </div>
            <p class="error">{{ errorMessage }}</p>
        </div>

        <nuxt-img
            class="presentation__img"
            format="webp"
            quality="100"
            sizes="sm:0px md:0px lg:500px xl:700px xxl:700px 2xl:700px"
            src="images/notepad.png"
            :alt="$texts.presentationTitle + ' ' + $texts.companyName"
        />
    </div>
</template>

<script setup>
import validate from '~~/helpers/validate';
const showSuccess = useSuccessModal();

const email = ref('');
const errorMessage = ref('');

const { newsApiBase } = useRuntimeConfig();
const url = newsApiBase + 'send-presentation';

const sendData = async () => {
    const data = {
        email: email.value,
    };
    showSuccess.value = !showSuccess.value;
    try {
        if (dataLayer) {
            dataLayer.push({ event: 'form_presentation' });
        }
        await $fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        email.value = '';
    } catch (err) {
        console.log(err);
    }
};

const clearError = (unwatch) => {
    errorMessage.value = '';
    unwatch();
};

const handleSubmit = () => {
    const errMessage = validate(email.value, 'email');
    if (errMessage) {
        errorMessage.value = errMessage;
        const unwatch = watch(
            () => email.value,
            () => clearError(unwatch)
        );
        return;
    }
    sendData();
};
</script>

<style
    src="@/assets/scss/components/Home/CompanyPresentation.scss"
    lang="scss"
    scoped
></style>
