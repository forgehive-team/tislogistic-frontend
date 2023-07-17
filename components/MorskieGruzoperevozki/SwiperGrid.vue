<template>
    <div class="swiper-grid" :class="`swiper-grid_${props.type}`">
        <div class="heading">
            <div>
                <h2 @click="move">
                    {{ props.title }}
                </h2>
                <p v-if="props.text">
                    {{ props.text }}
                </p>
            </div>
            <SharedSwiperControls
                class="controls-desktop"
                @slide-next="slideNext"
                @slide-prev="slidePrev"
            />
        </div>

        <Swiper
            :modules="[SwiperNavigation, SwiperGrid]"
            :grid="{
                rows: 3,
                fill: 'row',
            }"
            :breakpoints="{
                320: {
                    slidesPerView: 2,
                    spaceBetween: 8,
                },
                768: {
                    loop: true,
                    slidesPerView: 3.2,
                    spaceBetween: 10,
                    grid: null,
                },
                1248: {
                    loop: true,
                    slidesPerView: 6,
                    spaceBetween: 10,
                    grid: null,
                },
            }"
            @swiper="onSwiper"
        >
            <SwiperSlide v-for="(item, i) in props.list" :key="i" class="slide">
                <div class="slide-content">
                    <nuxt-img
                        v-if="item.img"
                        :src="item.img"
                        :alt="item.label"
                        :quality="60"
                    />
                    <p>{{ item.label }}</p>
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
const props = defineProps(['title', 'text', 'list', 'type']);

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
</script>

<style
    lang="scss"
    scoped
    src="@/assets/scss/components/MorskieGruzoperevozki/SwiperGrid.scss"
></style>
