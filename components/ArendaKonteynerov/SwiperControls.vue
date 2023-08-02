<script setup lang="ts">
const swiper = useSwiper();
</script>

<template>
    <div class="swiper_controls">
        <button @click="swiper.slidePrev()">
            <IconsArrowLeft />
        </button>
        <button @click="swiper.slideNext()">
            <IconsArrowRight />
        </button>
    </div>
</template>
<style
    src="@/assets/scss/components/ArendaKonteynerov/ContainersSwiper.scss"
    lang="scss"
    scoped
></style>
