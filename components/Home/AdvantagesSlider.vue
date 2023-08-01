<template>
    <div class="advantages-slider">
        <h2>{{ $texts.whyChooseUs }}</h2>
        <SharedSwiperControls
            class="controls-desktop"
            @slide-next="slideNext"
            @slide-prev="slidePrev"
        />
        <Swiper :speed="300" slides-per-view="1" loop @swiper="onSwiper">
            <SwiperSlide v-for="(slide, i) in slides" :key="i" class="slide">
                <div class="slide-content">
                    <nuxt-img
                        :src="slide.img"
                        alt=""
                        class="desktop-img"
                        sizes="sm:1px md:1248px xxl:1512px 2xl:1512px"
                        format="webp"
                    />
                    <nuxt-img
                        :src="slide.imgSm"
                        alt=""
                        class="xs-img"
                        sizes="sm:350px md:750px lg:1px xl:1px xxl:1px 2xl:1px"
                        format="webp"
                        quality="60"
                    />
                </div>
            </SwiperSlide>
        </Swiper>
        <SharedSwiperControls
            class="controls-mobile"
            @slide-next="slideNext"
            @slide-prev="slidePrev"
        />
    </div>
</template>

<script setup>
const swiperInstance = ref(null);
const onSwiper = (swiper) => {
    swiperInstance.value = swiper;
};
const slideNext = () => {
    swiperInstance.value?.slideNext();
};
const slidePrev = () => {
    swiperInstance.value?.slidePrev();
};

const slides = [
    {
        img: 'images/advantages_slides/sanctions_delivery.png',
        imgSm: 'images/advantages_slides/sanctions_delivery_sm.png',
        alt: '',
    },
    {
        img: 'images/advantages_slides/general_cargo.png',
        imgSm: 'images/advantages_slides/general_cargo_sm.png',
        alt: '',
    },
    {
        img: 'images/advantages_slides/partners.png',
        imgSm: 'images/advantages_slides/partners_sm.png',
        alt: '',
    },
    {
        img: 'images/advantages_slides/cargo_preparation.png',
        imgSm: 'images/advantages_slides/cargo_preparation_sm.png',
        alt: '',
    },
    {
        img: 'images/advantages_slides/any_sea_line.png',
        imgSm: 'images/advantages_slides/any_sea_line_sm.png',
        alt: '',
    },
];
</script>

<style
    src="@/assets/scss/components/Home/AdvantagesSlider.scss"
    lang="scss"
    scoped
></style>
