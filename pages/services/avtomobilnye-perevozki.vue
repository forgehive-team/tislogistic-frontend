<template>
    <main>
        <section class="car-freight-main">
            <div :style="background" class="bg car-freight-bg"></div>
            <SharedServicesHeader
                :title="$texts.carFreight"
                :subtitle="$texts.carFreightNote"
                class="_car"
            />
        </section>
        <section class="car-freight-spectrum">
            <AvtomobilnyePerevozkiFullSpectrum />
        </section>
        <SharedServicesFiller />
    </main>
</template>

<script>
export default {
    setup() {
        const { $texts } = useNuxtApp();
        definePageMeta({
            breadcrumbTitle: 'Проектная логистика',
        });
        useServerSeoMeta({
            title: $texts.carFreight,
            ogTitle: $texts.carFreight,
            description: $texts.seoDescription,
            ogDescription: $texts.seoDescription,
        });
    },
    computed: {
        background() {
            const $img = useImage();
            const imgUrl = $img('images/car_freight_background.jpg', {
                format: 'webp',
                preload: true,
                sizes: 'xxl:1512',
                quality: 100,
            });
            return {
                backgroundImage: `url('${imgUrl}')`,
            };
        },
        bottomBackground() {
            const $img = useImage();
            const imgUrl = $img('images/main_background.jpg', {
                format: 'webp',
            });
            return {
                backgroundImage: `linear-gradient(180deg, #1B1B1F 12.17%, rgba(20, 20, 23, 0.829382) 24.78%, rgba(0, 0, 0, 0.61) 45.5%), url('${imgUrl}')`,
            };
        },
    },
};
</script>

<style
    src="@/assets/scss/pages/AvtomobilnyePerevozki.scss"
    lang="scss"
    scoped
></style>
