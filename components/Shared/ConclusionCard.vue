<template>
    <div class="conclusion" :style="background">
        <h4 class="conclusion__title">
            {{ $texts.homeHeader }}
            <br class="title-break" />
            <span>{{ $texts.companyName }}</span>
        </h4>
        <p class="conclusion__note">{{ $texts.conclusionNote }}</p>
        <div class="conclusion__bottom">
            <button class="conclusion__btn animate-red">
                {{ $texts.calculateDelivery }}
            </button>
            <div class="conclusion__info">
                <a :href="phoneRef">
                    <img src="../../assets/icons/phone.svg" />
                    {{ $texts.companyPhone }}
                </a>
                <a :href="emailRef">
                    <img src="../../assets/icons/email.svg" />
                    {{ $texts.companyEmail }}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        background() {
            const $img = useImage();
            const imgUrl = $img('images/footer_card_background.jpg', {
                format: 'webp',
                quality: 100,
            });
            return {
                backgroundImage: `linear-gradient(0deg, rgba(27, 27, 31, 0.4), rgba(27, 27, 31, 0.4)), url('${imgUrl}')`,
            };
        },
        emailRef() {
            const $texts = useNuxtApp();
            return `mailto:${$texts.companyEmail}`;
        },
        phoneRef() {
            const $texts = useNuxtApp();
            return `mailto:${$texts.companyPhone}`;
        },
    },
};
</script>

<style
    src="@/assets/scss/components/Shared/ConclusionCard.scss"
    lang="scss"
    scoped
></style>
