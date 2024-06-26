<template>
    <div>
        <section class="sea-freight-main">
            <div
                :style="background"
                class="bg sea-freight-bg"
                :title="seoAlt"
                :aria-label="seoAlt"
            ></div>
            <SharedServicesHeader
                :title="$texts.seaFreight"
                :subtitle="$texts.seaFreightNote"
            />
        </section>
        <section id="scroll-target" class="sea-freight-advantages">
            <SharedServiceAdvantages
                :title="$texts.seaFreightAdvantages"
                :list="advantagesList"
            />
        </section>
        <section class="sea-freight-map">
            <MorskieGruzoperevozkiInternationalFreight />
        </section>
        <section class="sea-freight-coastal">
            <MorskieGruzoperevozkiCoastalFreight class="_coastal" />
        </section>
        <SharedServicesFiller />
    </div>
</template>

<script>
import { seaFreightList, coastalDestinations } from '~~/config/seaFreightList';
export default {
    setup() {
        const { $texts } = useNuxtApp();
        definePageMeta({
            breadcrumbTitle: 'Морские грузоперевозки',
        });
        useServerSeoMeta({
            title: $texts.seaFreight,
            ogTitle: $texts.seaFreight,
            description: $texts.seoSeaFreightDescription,
            ogDescription: $texts.seoSeaFreightDescription,
            keywords:
                $texts.seoKeywordsBase +
                $texts.seoSeaFreightKeywords +
                $texts.seoServicesKeywordsBase,
        });
    },
    computed: {
        seoAlt() {
            const { $texts } = useNuxtApp();
            return $texts.seaFreight + $texts.companyNameSeo;
        },
        background() {
            const $img = useImage();
            const imgUrl = $img('images/sea_freight_background.png', {
                format: 'webp',
                preload: true,
                sizes: 'md:768px lg:1024px xl:1280px xxl:1512px',
                quality: 100,
                alt: this.seoAlt,
            });
            return {
                backgroundImage: `url('${imgUrl}')`,
            };
        },
        shippingOptions() {
            return seaFreightList.map((item) => ({ text: item.label }));
        },
        coastalShippingOptions() {
            return coastalDestinations;
        },
        advantagesList() {
            const { $texts } = useNuxtApp();
            return [
                {
                    title: $texts.reliability,
                    text: $texts.seaFreightReliability,
                    imgPath: 'security.svg',
                    seoAlt: $texts.seaFreightAdvantagesSeo,
                },
                {
                    title: $texts.universal,
                    text: $texts.seaFreightUniversal,
                    imgPath: 'chain.svg',
                    seoAlt: $texts.seaFreightAdvantagesSeo,
                },
                {
                    title: $texts.distance,
                    text: $texts.seaFreightDistance,
                    imgPath: 'distance.svg',
                    seoAlt: $texts.seaFreightAdvantagesSeo,
                },
                {
                    title: $texts.speed,
                    text: $texts.seaFreightSpeed,
                    imgPath: 'speed.svg',
                    seoAlt: $texts.seaFreightAdvantagesSeo,
                },
            ];
        },
    },
};
</script>

<style
    src="@/assets/scss/pages/MorskieGruzoperevozki.scss"
    lang="scss"
    scoped
></style>
