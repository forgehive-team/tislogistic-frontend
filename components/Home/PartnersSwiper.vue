<template>
    <div class="partners">
        <h3 class="partners__title">
            {{ $texts.partners }}
        </h3>
        <Swiper
            id="mys"
            ref="swiper"
            slides-per-view="2"
            loop
            :breakpoints="{
                370: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 5,
                },
            }"
        >
            <SwiperSlide
                v-for="partner in partnersList"
                :key="partner"
                class="partner"
            >
                <img :src="partner" />
            </SwiperSlide>
            <HomeSwiperControls />
        </Swiper>
    </div>
</template>

<script>
export default {
    computed: {
        partnersList() {
            return [
                '/_nuxt/assets/icons/partners/partner1.svg',
                '/_nuxt/assets/icons/partners/partner2.svg',
                '/_nuxt/assets/icons/partners/partner3.svg',
                '/_nuxt/assets/icons/partners/partner4.svg',
                '/_nuxt/assets/icons/partners/partner5.svg',
                '/_nuxt/assets/icons/partners/partner6.svg',
                '/_nuxt/assets/icons/partners/partner7.svg',
                '/_nuxt/assets/icons/partners/partner8.svg',
                '/_nuxt/assets/icons/partners/partner9.svg',
                '/_nuxt/assets/icons/partners/partner10.svg',
                '/_nuxt/assets/icons/partners/partner11.svg',
            ];
        },
    },
};
</script>
<style
    src="@/assets/scss/components/Home/PartnersSwiper.scss"
    lang="scss"
    scoped
></style>
