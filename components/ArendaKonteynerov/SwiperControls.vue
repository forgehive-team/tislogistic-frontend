<script setup lang="ts">
const swiper = useSwiper();
</script>

<template>
    <div class="swiper_controls">
        <button @click="swiper.slidePrev()">
            <img src="@/assets/icons/arrow-white-left.svg" alt="" />
        </button>
        <button @click="swiper.slideNext()">
            <img src="@/assets/icons/arrow-white-right.svg" alt="" />
        </button>
    </div>
</template>
<style
    src="@/assets/scss/components/ArendaKonteynerov/ContainersSwiper.scss"
    lang="scss"
    scoped
></style>
