<template>
    <section class="header-slider">
        <Transition>
            <div v-if="data.length" class="swiper-animation-fix">
                <Swiper
                    :speed="700"
                    slides-per-view="1"
                    loop
                    @swiper="onSwiper"
                >
                    <SwiperSlide
                        v-for="(item, i) in data"
                        :key="i"
                        class="slide"
                    >
                        <div class="slide-container gradient-bg">
                            <!-- <img class="slide-bg" :src="item.img" /> -->
                            <div class="slide-content">
                                <SharedServicesHeader
                                    class="_home"
                                    :title="item.header"
                                    :subtitle="item.subheader"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <HomeHeaderPlaceholder v-else />
        </Transition>
        <Transition>
            <HomeHeaderSwiperControls
                v-if="data.length"
                @slide-next="slideNext"
                @slide-prev="slidePrev"
            />
        </Transition>
    </section>
</template>

<script setup>
const swiperInstance = ref(null);
const swiperVelocity = ref(null);
const data = ref([]);
let intervalRef;

const onSwiper = (swiper) => {
    swiperInstance.value = swiper;
};
const slideNext = () => {
    swiperInstance.value?.slideNext();
};
const slidePrev = () => {
    swiperInstance.value?.slidePrev();
};

const testData = [
    {
        header: 'Услуга торговый дом с «Тис Лоджистик»',
        subheader:
            'Перевозим сверхнегабаритные, тяжеловесные и длинномерные грузы по всему миру любым видом транспорта.',
        img: 'https://tislogistic.ru/images/sea_freight_background.jpg',
    },
    {
        header: 'Доставка черники с «Тис Лоджистик»',
        subheader:
            'Экспресс железнодорожная перевозка черники с Петербурга в Багкок. Голубику не возим.',
        img: 'https://tislogistic.ru/images/car_freight_background.jpg',
    },
];

onMounted(() => {
    setTimeout(() => {
        swiperVelocity.value = 6000;
        data.value = testData;
    }, 3000);
});

watch(swiperVelocity, () => {
    intervalRef = setInterval(() => {
        slideNext();
    }, swiperVelocity.value);
});

onUnmounted(() => {
    clearInterval(intervalRef);
});
</script>

<style
    src="@/assets/scss/components/Home/HeaderSlider.scss"
    lang="scss"
    scoped
></style>
