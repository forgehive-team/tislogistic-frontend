<template>
    <section class="header-slider">
        <Transition>
            <div v-if="items.length" class="swiper-animation-fix">
                <Swiper
                    :speed="700"
                    slides-per-view="1"
                    loop
                    @swiper="onSwiper"
                >
                    <SwiperSlide
                        v-for="(item, i) in items"
                        :key="i"
                        class="slide"
                    >
                        <div class="slide-container gradient-bg">
                            <img class="slide-bg" :src="item.image" />
                            <div class="slide-content">
                                <SharedServicesHeader
                                    class="_home"
                                    :title="item.title"
                                    :subtitle="item.description"
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
                v-if="items.length"
                @slide-next="slideNext"
                @slide-prev="slidePrev"
            />
        </Transition>
    </section>
</template>

<script setup>
const swiperInstance = ref(null);
const swiperVelocity = ref(null);
const items = ref([]);
const { newsApiBase } = useRuntimeConfig();
const url = newsApiBase + 'slider';
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

const clearSliderInterval = () => {
    if (intervalRef) {
        clearInterval(intervalRef);
    }
};

onMounted(async () => {
    const data = await $fetch(url);
    swiperVelocity.value = data.speed;
    items.value = data.items;
});

watch(swiperVelocity, () => {
    intervalRef = setInterval(() => {
        slideNext();
    }, swiperVelocity.value);
});

onUnmounted(() => {
    clearSliderInterval();
});
</script>

<style
    src="@/assets/scss/components/Home/HeaderSlider.scss"
    lang="scss"
    scoped
></style>
