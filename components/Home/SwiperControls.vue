<script setup lang="ts">
const swiper = useSwiper();
</script>

<template>
    <div class="partners__nav">
        <button class="partners__btn" @click="swiper.slidePrev()">
            <IconsArrowLeft />
        </button>
        <button class="partners__btn" @click="swiper.slideNext()">
            <IconsArrowRight />
        </button>
    </div>
</template>
<style
    src="@/assets/scss/components/Home/PartnersSwiper.scss"
    lang="scss"
    scoped
></style>
