<template>
    <div
        class="conclusion"
        :style="background"
        :title="seoAlt"
        :aria-label="seoAlt"
    >
        <h2 class="conclusion__title">
            {{ $texts.homeHeader }}
            <br class="title-break" />
            <span>{{ $texts.companyName }}</span>
        </h2>
        <p class="conclusion__note">{{ $texts.conclusionNote }}</p>
        <div class="conclusion__bottom">
            <button
                class="conclusion__btn animate-red"
                @click="calculatorPopupShown = !calculatorPopupShown"
            >
                {{ $texts.calculateDelivery }}
            </button>
            <div class="conclusion__info">
                <a :href="phoneRef">
                    <img
                        src="../../assets/icons/phone.svg"
                        :alt="$texts.phone"
                    />
                    {{ $texts.companyPhone }}
                </a>
                <a :href="emailRef">
                    <img
                        src="../../assets/icons/email.svg"
                        :alt="$texts.email"
                    />
                    {{ $texts.companyEmail }}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // since the alt tag is put on background image, it's applied to the containing div too
    props: {
        seoAlt: {
            type: String,
            required: true,
        },
    },
    setup() {
        const calculatorPopupShown = useCalculatorPopup();
        return {
            calculatorPopupShown,
        };
    },
    computed: {
        background() {
            const $img = useImage();
            const imgUrl = $img('images/footer_card_background.jpg', {
                format: 'webp',
                quality: 90,
                alt: this.seoAlt,
                sizes: 'lg:700px xxl:1512px',
            });
            return {
                backgroundImage: `url('${imgUrl}')`,
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
