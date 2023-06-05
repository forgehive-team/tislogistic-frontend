<template>
    <main>
        <section>
            <div
                :style="background"
                class="bg air-freight-bg"
                :title="seoAlt"
                :aria-label="seoAlt"
            ></div>
            <SharedServicesHeader
                :title="$texts.airFreight"
                :subtitle="$texts.airFreightNote"
                class="_air"
            />
        </section>
        <section>
            <AviaperevozkiAirTypes />
        </section>
        <section>
            <AviaperevozkiAirAdvantages />
        </section>
        <SharedServicesFiller />
    </main>
</template>

<script>
export default {
    setup() {
        const { $texts } = useNuxtApp();
        definePageMeta({
            // $texts cannot be used here
            breadcrumbTitle: 'Авиаперевозки',
        });
        useServerSeoMeta({
            title: $texts.airFreight,
            ogTitle: $texts.airFreight,
            description: $texts.seoAirFreightDescription,
            ogDescription: $texts.seoAirFreightDescription,
            keywords:
                $texts.seoKeywordsBase +
                $texts.seoAirFreightKeywords +
                $texts.seoServicesKeywordsBase,
        });
    },
    computed: {
        seoAlt() {
            const { $texts } = useNuxtApp();
            return $texts.airFreight + $texts.companyNameSeo;
        },
        background() {
            const $img = useImage();
            const imgUrl = $img('images/air_freight_backgorund.png', {
                format: 'webp',
                preload: true,
                quality: '100',
                alt: this.seoAlt,
            });
            return {
                backgroundImage: `url('${imgUrl}')`,
            };
        },
    },
};
</script>

<style src="@/assets/scss/pages/Aviaperevozki.scss" lang="scss" scoped></style>
