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
                :key="partner.className"
                class="partner"
            >
                <div class="partner-img-container" :class="partner.className">
                    <nuxt-img :src="partner.src" />
                </div>
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
                {
                    src: path + 'partner1.svg',
                    className: 'partner1',
                },
                {
                    src: path + 'partner2.svg',
                    className: 'partner2',
                },
                {
                    src: path + 'partner3.svg',
                    className: 'partner3',
                },
                {
                    src: path + 'partner4.svg',
                    className: 'partner4',
                },
                {
                    src: path + 'partner5.svg',
                    className: 'partner5',
                },
                {
                    src: path + 'partner6.svg',
                    className: 'partner6',
                },
                {
                    src: path + 'partner7.svg',
                    className: 'partner7',
                },
                {
                    src: path + 'partner8.svg',
                    className: 'partner8',
                },
                {
                    src: path + 'partner9.svg',
                    className: 'partner9',
                },
                {
                    src: path + 'partner10.svg',
                    className: 'partner10',
                },
                {
                    src: path + 'partner11.svg',
                    className: 'partner11',
                },
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
