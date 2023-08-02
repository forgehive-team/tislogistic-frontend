<template>
    <div class="slide-content" :style="bg">
        <h3>{{ props.title }}</h3>
        <p>{{ props.subtitle }}</p>
    </div>
</template>

<script setup>
const props = defineProps(['title', 'subtitle', 'img']);

const $img = useImage();
const imgUrl = $img(props.img, {
    format: 'webp',
    quality: '90',
});
const bg = {
    backgroundImage: `url('${imgUrl}')`,
};
</script>

<style
    src="@/assets/scss/components/Home/AdvantagesSlider.scss"
    lang="scss"
    scoped
></style>
