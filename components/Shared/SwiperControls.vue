<script setup>
defineEmits(['slide-next', 'slide-prev']);
</script>

<template>
    <div class="swiper-controls">
        <button @click="$emit('slide-prev')">
            <IconsArrowLeft />
        </button>
        <button @click="$emit('slide-next')">
            <IconsArrowRight />
        </button>
    </div>
</template>
<style
    src="@/assets/scss/components/Shared/SwiperControls.scss"
    lang="scss"
    scoped
></style>
