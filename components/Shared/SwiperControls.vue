<script setup>
defineEmits(['slide-next', 'slide-prev']);
</script>

<template>
    <div class="swiper-controls">
        <button @click="$emit('slide-prev')">
            <img src="@/assets/icons/arrow-white-left.svg" alt="" />
        </button>
        <button @click="$emit('slide-next')">
            <img src="@/assets/icons/arrow-white-right.svg" alt="" />
        </button>
    </div>
</template>
<style
    src="@/assets/scss/components/Shared/SwiperControls.scss"
    lang="scss"
    scoped
></style>
