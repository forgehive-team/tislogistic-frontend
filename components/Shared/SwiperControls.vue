<script setup>
const props = defineProps({
    nextId: String,
    prevId: String,
});
</script>

<template>
    <div class="swiper-controls">
        <button :id="props.prevId">
            <img src="@/assets/icons/arrow-white-left.svg" alt="" />
        </button>
        <button :id="props.nextId">
            <img src="@/assets/icons/arrow-white-right.svg" alt="" />
        </button>
    </div>
</template>
<style
    src="@/assets/scss/components/Shared/SwiperControls.scss"
    lang="scss"
    scoped
></style>
