<template>
    <div class="containers-swiper">
        <Swiper
            loop
            :breakpoints="{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 8,
                },
                400: {
                    slidesPerView: 2,
                    spaceBetween: 8,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
            }"
        >
            <template v-for="n in 2" :key="n">
                <SwiperSlide v-for="(img, i) in imgList" :key="i" class="slide">
                    <div class="slide-img-container">
                        <img :src="img" />
                    </div>
                </SwiperSlide>
            </template>
            <ArendaKonteynerovSwiperControls />
        </Swiper>
    </div>
</template>

<script>
export default {
    props: {
        imgList: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style
    src="@/assets/scss/components/ArendaKonteynerov/ContainersSwiper.scss"
    lang="scss"
    scoped
></style>
