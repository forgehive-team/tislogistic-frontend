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
            <MorskieGruzoperevozkiStaticMap
                :title="$texts.internationalSeaFreight"
                :note="$texts.internationalSeaFreightNote"
                :subtitle="$texts.avaiableDestinations"
                :list="shippingOptions"
                class="_base"
                img="/international.png"
            />
            <MorskieGruzoperevozkiReactiveMap />
        </section>
        <section class="sea-freight-coastal">
            <MorskieGruzoperevozkiStaticMap
                :title="$texts.coastalShipping"
                :note="$texts.coastalShippingNote"
                :subtitle="$texts.coastalAvailableDestinations"
                :list="coastalShippingOptions"
                class="_coastal"
                img="/coastal.png"
            />
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
            title:
                $texts.internationalSeaFreight.slice(0, -1) +
                $texts.companyNameSeo,
            ogTitle:
                $texts.internationalSeaFreight.slice(0, -1) +
                $texts.companyNameSeo,
            description: $texts.seaFreightSeoDescription,
            ogDescription: $texts.seaFreightSeoDescription,
        });
    },
    computed: {
        seoAlt() {
            const { $texts } = useNuxtApp();
            return $texts.seaFreight + $texts.companyNameSeo;
        },
        background() {
            const $img = useImage();
            const imgUrl = $img('images/sea_freight_background.jpg', {
                format: 'webp',
                preload: true,
                sizes: 'md:768px lg:1024px xl:1280px xxl:1512px',
                quality: 80,
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
