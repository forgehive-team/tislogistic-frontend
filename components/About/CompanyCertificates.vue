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
                <div
                    class="slide-content"
                    @click="fullScreenImgSrc = item.image"
                >
                    <nuxt-img
                        v-if="item.image"
                        :src="item.image"
                        :quality="100"
                    />
                </div>
            </SwiperSlide>
        </Swiper>
        <SharedSwiperControls
            class="controls-mobile"
            @slide-next="slideNext"
            @slide-prev="slidePrev"
        />
        <Transition>
            <SharedFullScreenImg
                v-if="fullScreenImgSrc"
                :img="fullScreenImgSrc"
                @close="close"
            />
        </Transition>
    </div>
</template>

<script setup>
const swiperInstance = ref(null);
const certificates = ref([]);
const { newsApiBase } = useRuntimeConfig();
const url = newsApiBase + 'certificates';

const fullScreenImgSrc = ref(null);
const close = () => {
    fullScreenImgSrc.value = null;
};

onMounted(async () => {
    const data = await $fetch(url);
    // double the array to match swiper loop requirements
    certificates.value = data.concat(data);
});

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
