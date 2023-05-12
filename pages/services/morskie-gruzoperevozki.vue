<template>
    <div>
        <section class="sea-freight-main">
            <div :style="background" class="sea-freight-bg"></div>
            <SharedServicesHeader
                :title="$texts.seaFreight"
                :subtitle="$texts.seaFreightNote"
            />
        </section>
        <section id="scroll-target" class="sea-freight-advantages">
            <MorskieGruzoperevozkiAdvantagesList />
        </section>
    </div>
</template>

<script>
export default {
    setup() {
        const { $texts } = useNuxtApp();
        definePageMeta({
            breadcrumbTitle: 'Морские грузоперевозки',
        });
        useServerSeoMeta({
            title: $texts.seoTitleContainers,
            ogTitle: $texts.seoTitleContainers,
            description: $texts.seoDescription,
            ogDescription: $texts.seoDescription,
        });
    },
    computed: {
        background() {
            const $img = useImage();
            const imgUrl = $img('images/sea_freight_background.jpg', {
                format: 'webp',
                preload: true,
                sizes: 'xxl:1512',
                quality: 100,
            });
            return {
                backgroundImage: `url('${imgUrl}')`,
            };
        },
    },
};
</script>

<style
    src="@/assets/scss/pages/MorskieGruzoperevozki.scss"
    lang="scss"
    scoped
></style>
