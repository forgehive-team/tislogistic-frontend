<template>
    <div class="certificates">
        <h2>{{ $texts.certificates }}</h2>
        <SharedSwiperControls
            class="controls-desktop"
            @slide-next="slideNext"
            @slide-prev="slidePrev"
        />
        <Swiper
            v-if="certificates.length"
            :loop="true"
            :slides-per-view="'auto'"
            :space-between="24"
            @swiper="onSwiper"
        >
            <SwiperSlide
                v-for="(item, i) in certificates"
                :key="i"
                class="slide"
            >
                <div class="slide-content">
                    <nuxt-img v-if="item.img" :src="item.img" :quality="100" />
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
const certificates = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
const onSwiper = (swiper) => {
    swiperInstance.value = swiper;
};

const slideNext = () => {
    swiperInstance.value?.slideNext();
};
const slidePrev = () => {
    swiperInstance.value?.slidePrev();
};
</script>

<style
    src="@/assets/scss/components/About/CompanyCertificates.scss"
    lang="scss"
    scoped
></style>
