<template>
    <div class="news__static-pictures">
        <div
            v-for="(imgSrc, i) in props.images"
            :key="i"
            class="news__bottom-img-container"
            @click="fullScreenImgSrc = imgSrc"
        >
            <img :src="imgSrc" />
        </div>
    </div>
    <Transition>
        <SharedFullScreenImg
            v-if="fullScreenImgSrc"
            :img="fullScreenImgSrc"
            @close="close"
        />
    </Transition>
</template>
<script setup>
const props = defineProps(['images']);

const fullScreenImgSrc = ref(null);
const close = () => {
    fullScreenImgSrc.value = null;
};
</script>
<style
    src="@/assets/scss/components/News/NewsPage.scss"
    lang="scss"
    scoped
></style>
