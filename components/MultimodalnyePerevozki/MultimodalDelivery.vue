<template>
    <div>
        <h2>{{ $texts.multimodalDelivery }}</h2>
        <div class="cards-container">
            <HomeCardsItem
                v-for="(item, i) in cards"
                :key="i"
                class="_title-yellow _multimodal"
                :title="item.title"
                :text="item.description"
            />
        </div>
        <div class="slider-container">
            <SharedSwiperControls
                class="controls-desktop"
                @slide-next="slideNext"
                @slide-prev="slidePrev"
            />
            <Swiper
                v-if="certificates.length"
                :loop="true"
                :slides-per-view="2"
                :space-between="8"
                :breakpoints="{
                    600: {
                        slidesPerView: 3,
                        spaceBetween: 16,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 18,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 32,
                    },
                }"
                @swiper="onSwiper"
            >
                <SwiperSlide
                    v-for="(img, i) in swiperImages"
                    :key="i"
                    class="slide"
                >
                    <div class="slide-content">
                        <nuxt-img
                            :src="img"
                            format="webp"
                            alt=""
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
        </div>
    </div>
</template>

<script setup>
import { cards } from '~~/config/multimodalList';
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
// for loop x2 displayed items is required
const swiperImages = [
    'images/rental_containers/swiper_img_5.jpg',
    'images/rental_containers/swiper_img_10.jpg',
    'images/rental_containers/swiper_img_9.jpg',
    'images/rental_containers/swiper_img_8.jpg',
    'images/rental_containers/swiper_img_5.jpg',
    'images/rental_containers/swiper_img_10.jpg',
    'images/rental_containers/swiper_img_9.jpg',
    'images/rental_containers/swiper_img_8.jpg',
];
</script>

<style
    src="@/assets/scss/components/MultimodalnyePerevozki/MultimodalDelivery.scss"
    lang="scss"
    scoped
></style>
