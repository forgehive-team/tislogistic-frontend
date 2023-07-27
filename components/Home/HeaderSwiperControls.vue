<script setup>
defineEmits(['slide-next', 'slide-prev']);
</script>

<template>
    <button class="left" @click="$emit('slide-prev')">
        <IconsArrowLeft />
    </button>
    <button class="right" @click="$emit('slide-next')">
        <IconsArrowRight />
    </button>
</template>
<style
    src="@/assets/scss/components/Home/HeaderSwiperControls.scss"
    lang="scss"
    scoped
></style>
