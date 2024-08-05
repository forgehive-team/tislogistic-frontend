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
                <SwiperSlide
                    v-for="(img, i) in props.imgList"
                    :key="i"
                    class="slide"
                >
                    <div
                        class="slide-img-container"
                        @click="currentIdx = i"
                    >
                    <span>{{ i }}</span>
                        <img :src="img" />
                    </div>
                </SwiperSlide>
            </template>
            <ArendaKonteynerovSwiperControls />
        </Swiper>
        <Transition>
            <NewsFullScreenImages
                v-if="currentIdx !== null"
                :currentIdx="currentIdx"
                :images="props.imgList"
                @close="currentIdx=null"
                @changeidx="(i)=>currentIdx=i"
            />
        </Transition>
    </div>
</template>

<script setup>
const props = defineProps(['imgList']);

const currentIdx = ref(null);




</script>

<style
    src="@/assets/scss/components/ArendaKonteynerov/ContainersSwiper.scss"
    lang="scss"
    scoped
></style>
