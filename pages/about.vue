<template>
    <div>
        <section>
            <div :style="bgImg" class="bg about-bg"></div>
            <SharedServicesHeader
                :title="$texts.aboutTitle"
                :underline="$texts.aboutUnderline"
                :subtitle="$texts.aboutSubtitle"
                :formless="true"
                class="_about"
            />
        </section>
        <section id="scroll-target">
            <AboutCompanyInfo />
        </section>
        <section>
            <AboutCompanyValues />
        </section>
        <section>
            <AboutCompanyPrinciples />
        </section>
        <section><AboutCompanyCertificates /></section>
        <section><HomeCompanyPresentation /></section>
    </div>
</template>

<script setup>
const { $texts } = useNuxtApp();
definePageMeta({
    breadcrumbTitle: 'About',
});
useServerSeoMeta({
    title: $texts.about,
    ogTitle: $texts.about,
    description: $texts.aboutSubtitle,
    ogDescription: $texts.aboutSubtitle,
    keywords:
        $texts.seoHomeKeywords +
        $texts.seoKeywordsBase +
        $texts.seoServicesKeywordsBase,
});
const $img = useImage();
const imgUrl = $img('images/about_background.png', {
    format: 'webp',
    preload: true,
    quality: '100',
});
const bgImg = `background-image: url('${imgUrl}')`;
</script>

<style src="@/assets/scss/pages/About.scss" lang="scss" scoped></style>
