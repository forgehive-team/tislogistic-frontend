<template>
    <div>
        <section>
            <div :style="bgImg" class="bg foreign-bg"></div>
            <SharedServicesHeader
                :title="$texts.foreignActivity"
                :subtitle="$texts.foreignActivityNote"
                :formless="true"
                class="_foreign"
            />
        </section>
        <section><ForeignServices /></section>
        <section><ForeignActivityInternationalTrade /></section>
        <section><ForeignActivityCooperationResult /></section>
        <section><SharedServicesLinks /></section>
    </div>
</template>

<script setup>
const { $texts } = useNuxtApp();
definePageMeta({
    breadcrumbTitle: 'Внешнеэкономическая деятельность',
});
useServerSeoMeta({
    title: $texts.foreignActivity,
    ogTitle: $texts.foreignActivity,
    description: $texts.foreignActivityNote,
    ogDescription: $texts.foreignActivityNote,
    keywords: $texts.seoKeywordsBase + $texts.seoServicesKeywordsBase,
});
const $img = useImage();
const imgUrl = $img('images/foreign_activity_background.png', {
    format: 'webp',
    preload: true,
    quality: '100',
});
const bgImg = `background-image: url('${imgUrl}')`;
</script>

<style
    src="@/assets/scss/pages/ForeignActivity.scss"
    lang="scss"
    scoped
></style>
