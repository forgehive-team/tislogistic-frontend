<template>
    <section class="header-slider">
        <!-- :modules="[SwiperEffectFade]"
            :fade="{
                crossFade: true,
            }"
            effect="fade" -->
        <Swiper
            v-if="data.length"
            :speed="700"
            slides-per-view="1"
            loop
            @swiper="onSwiper"
        >
            <SwiperSlide v-for="(item, i) in data" :key="i" class="slide">
                <div class="slide-container">
                    <img class="slide-bg" :src="item.img" />
                    <div class="slide-content">
                        <SharedServicesHeader
                            :title="item.header"
                            :subtitle="item.subheader"
                        />
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
        <HomeHeaderSwiperControls
            @slide-next="slideNext"
            @slide-prev="slidePrev"
        />
    </section>
</template>

<script setup>
const swiperInstance = ref(null);
const swiperVelocity = ref(null);
const data = ref([]);

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
        img: 'http://localhost:3000/images/air_freight_background.png',
    },
    {
        header: 'Какая-нибудь другая услуга от «Тис Лоджистик»',
        subheader: 'Перевозим чернику оптом из Петербурга в Бангкок поездами',
        img: 'http://localhost:3000/images/car_freight_background1.jpg',
    },
    {
        header: 'Услуга торговый дом с «Тис Лоджистик»',
        subheader:
            'Перевозим сверхнегабаритные, тяжеловесные и длинномерные грузы по всему миру любым видом транспорта.',
        img: 'http://localhost:3000/images/air_freight_background.png',
    },
    {
        header: 'Какая-нибудь другая услуга от «Тис Лоджистик»',
        subheader: 'Перевозим чернику оптом из Петербурга в Бангкок поездами',
        img: 'http://localhost:3000/images/car_freight_background1.jpg',
    },
];

// simulate recieving velocity
onMounted(() => {
    setTimeout(() => {
        swiperVelocity.value = 3000;
        data.value = testData;
    }, 1000);
});

watch(swiperVelocity, () => {
    slideNext();
    setInterval(() => {
        slideNext();
    }, swiperVelocity.value);
});
</script>

<style
    src="@/assets/scss/components/Home/HeaderSlider.scss"
    lang="scss"
    scoped
></style>
