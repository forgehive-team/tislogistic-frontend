<template>
    <div class="advantages-slider">
        <h2>{{ $texts.whyChooseUs }}</h2>
        <SharedSwiperControls
            class="controls-desktop"
            @slide-next="slideNext"
            @slide-prev="slidePrev"
        />
        <Swiper
            class="swiper"
            :speed="600"
            slides-per-view="1"
            loop
            @swiper="onSwiper"
        >
            <SwiperSlide v-for="(slide, i) in slides" :key="i" class="slide">
                <HomeAdvantagesSliderSlide
                    :img="slide.img"
                    :title="slide.title"
                    :subtitle="slide.subtitle"
                />
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
import { advantagesSlidesList } from '~~/config/homeLists';
const lang = useLanguage();

const slides = computed(() => {
    return advantagesSlidesList[lang.value];
});

const swiperInstance = ref(null);
let intervalRef;

const onSwiper = (swiper) => {
    swiperInstance.value = swiper;
    intervalRef = setInterval(() => {
        slideNext();
    }, 7000);
};
const slideNext = () => {
    swiperInstance.value?.slideNext();
};
const slidePrev = () => {
    swiperInstance.value?.slidePrev();
};
onUnmounted(() => {
    if (intervalRef) clearInterval(intervalRef);
});
</script>

<style
    src="@/assets/scss/components/Home/AdvantagesSlider.scss"
    lang="scss"
    scoped
></style>
