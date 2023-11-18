<template>
    <div>
        <section>
            <div :style="bgImg" class="bg multimodal-bg"></div>
            <SharedServicesHeader
                :title="$texts.multimodalFreight"
                :subtitle="$texts.multimodalFreightDef"
                class="_multimodal"
            />
        </section>
        <section id="scroll-target">
            <div
                class="subheader"
                v-html="$texts.multimodalSubheaderHtml"
            ></div>
        </section>
        <section><MultimodalnyePerevozkiMultimodalAdvantages /></section>
        <section><MultimodalnyePerevozkiDeliveryProcess /></section>
        <section><MultimodalnyePerevozkiMultimodalDelivery /></section>
        <section>
            <div
                class="subheader subheader_shrink"
                v-html="$texts.customerCare"
            ></div>
        </section>
        <section>
            <div class="calculator__back-blur">
                <SharedDeliveryCalculator />
                <IconsCompanyLogo class="logo" />
            </div>
        </section>
        <section><SharedServicesLinks /></section>
    </div>
</template>

<script setup>
const { $texts } = useNuxtApp();
definePageMeta({
    breadcrumbTitle: 'Multimodal transportation',
});
useServerSeoMeta({
    title: $texts.multimodalFreight,
    ogTitle: $texts.multimodalFreight,
    description: $texts.multimodalFreightDef,
    ogDescription: $texts.multimodalFreightDef,
    keywords: $texts.seoKeywordsBase + $texts.seoServicesKeywordsBase,
});
const $img = useImage();
const imgUrl = $img('images/multimodal_background.png', {
    format: 'webp',
    preload: true,
    quality: 100,
});
const bgImg = `background-image: url('${imgUrl}')`;
</script>

<style
    src="@/assets/scss/pages/MultimodalnyePerevozki.scss"
    lang="scss"
    scoped
></style>
