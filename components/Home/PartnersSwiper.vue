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
                <nuxt-img :src="partner" />
            </SwiperSlide>
            <HomeSwiperControls />
        </Swiper>
    </div>
</template>

<script>
export default {
    computed: {
        partnersList() {
            const path = '/images/partners/';
            return [
                path + 'partner1.svg',
                path + 'partner7.svg',
                path + 'partner10.svg',
                path + 'partner9.svg',
                path + 'partner4.svg',
                path + 'partner3.svg',
                path + 'partner6.svg',
                path + 'partner2.svg',
                path + 'partner5.svg',
                path + 'partner8.svg',
                path + 'partner11.svg',
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
