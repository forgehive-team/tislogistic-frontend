<template>
    <div class="containers-swiper">
        <h2>{{ $texts.rentalContainersSwiperTitle }}</h2>
        <Swiper
            loop
            :breakpoints="{
                320: {
                    slidesPerView: 2,
                    spaceBetween: 8,
                },
                500: {
                    slidesPerView: 3,
                    spaceBetween: 8,
                },
                700: {
                    slidesPerView: 4,
                    spaceBetween: 18,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 32,
                },
            }"
        >
            <template v-for="n in 2" :key="n">
                <SwiperSlide v-for="(img, i) in imgList" :key="i" class="slide">
                    <div class="slide-img-container">
                        <nuxt-img
                            :src="img"
                            format="webp"
                            :alt="$texts.containers + $texts.companyNameSeo"
                        />
                    </div>
                </SwiperSlide>
            </template>
            <ArendaKonteynerovSwiperControls />
        </Swiper>
    </div>
</template>

<script>
export default {
    computed: {
        imgList() {
            const path = 'images/rental_containers/';
            return [
                path + 'swiper_img_1.jpg',
                path + 'swiper_img_2.jpg',
                path + 'swiper_img_3.jpg',
                path + 'swiper_img_4.jpg',
            ];
        },
    },
};
</script>

<style
    src="@/assets/scss/components/ArendaKonteynerov/ContainersSwiper.scss"
    lang="scss"
    scoped
></style>
