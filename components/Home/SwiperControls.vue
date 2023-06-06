<script setup lang="ts">
const swiper = useSwiper();
</script>

<template>
    <div class="partners__nav">
        <button class="partners__btn" @click="swiper.slidePrev()">
            <img src="@/assets/icons/arrow-white-left.svg" alt="" />
        </button>
        <button class="partners__btn" @click="swiper.slideNext()">
            <img src="@/assets/icons/arrow-white-right.svg" alt="" />
        </button>
    </div>
</template>
<style
    src="@/assets/scss/components/Home/PartnersSwiper.scss"
    lang="scss"
    scoped
></style>
