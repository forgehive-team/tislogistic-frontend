<template>
    <div class="news__static-pictures">
        <div
            v-for="(imgSrc, i) in props.images"
            :key="i"
            class="news__bottom-img-container"
            @click="currentIdx = i"
        >
            <img :src="imgSrc" />
        </div>
    </div>
    <Transition>
      <NewsFullScreenImages
            v-if="currentIdx !== null"
            :currentIdx="currentIdx"
            :images="props.images"
            @close="currentIdx=null"
            @changeidx="(i)=>currentIdx=i"
            />
    </Transition>
</template>
<script setup>
const props = defineProps(['images']);
const currentIdx = ref(null);

</script>
<style
    src="@/assets/scss/components/News/NewsPage.scss"
    lang="scss"
    scoped
></style>
