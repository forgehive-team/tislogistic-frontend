<template>
    <div>
        <section>
            <div :style="bgImg" class="bg about-bg"></div>
            <SharedServicesHeader
                :title="$texts.aboutTitle"
                :subtitle="$texts.aboutSubtitle"
                :formless="true"
                class="_about"
            />
        </section>
        <section>
            <AboutCompanyInfo />
        </section>
        <section>
            <AboutCompanyValues />
        </section>
        <section>
            <AboutCompanyPrinciples />
        </section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
    </div>
</template>

<script setup>
const $img = useImage();
const imgUrl = $img('images/about_background.png', {
    format: 'webp',
    preload: true,
    quality: '100',
});
const bgImg = `background-image: url('${imgUrl}')`;
</script>

<style src="@/assets/scss/pages/About.scss" lang="scss" scoped></style>
