<template>
    <div>
        <section class="tracking-main">
            <div
                :style="background"
                class="bg tracking-bg"
                :title="seoAlt"
                :aria-label="seoAlt"
            ></div>

            <header class="tracking-header">
                <SharedBreadCrumbs />
            </header>

            <TrackingForm class="tracking-form" />
        </section>
    </div>
</template>

<script>
export default {
    setup() {
        const { $texts } = useNuxtApp();
        definePageMeta({
            // $texts cannot be used here
            breadcrumbTitle: 'Cargo tracking',
        });
        useServerSeoMeta({
            title: $texts.cargoTracking,
            ogTitle: $texts.cargoTracking,
            description: $texts.seoCargoTrackingDescription,
            ogDescription: $texts.seoCargoTrackingDescription,
            keywords: $texts.seoKeywordsBase + $texts.seoCargoTrackingKeywords,
        });
    },
    computed: {
        seoAlt() {
            const { $texts } = useNuxtApp();
            return $texts.trainFreight + $texts.companyNameSeo;
        },
        background() {
            const $img = useImage();
            const imgUrl = $img('images/tracking_background.png', {
                format: 'webp',
                preload: true,
                quality: '100',
                alt: this.seoAlt,
            });
            return {
                backgroundImage: `url('${imgUrl}')`,
            };
        },
        advantagesList() {
            const { $texts } = useNuxtApp();
            return [
                {
                    title: $texts.price,
                    text: $texts.trainFreightPrice,
                    imgPath: 'price.svg',
                    seoAlt: $texts.trainFreightAdvantagesSeo,
                },
                {
                    title: $texts.security,
                    text: $texts.trainFreightSecurity,
                    imgPath: 'security.svg',
                    seoAlt: $texts.trainFreightAdvantagesSeo,
                },
                {
                    title: $texts.universal,
                    text: $texts.trainFreightUniversal,
                    imgPath: 'chain.svg',
                    seoAlt: $texts.trainFreightAdvantagesSeo,
                },
                {
                    title: $texts.standard,
                    text: $texts.trainFreightStandard,
                    imgPath: 'standard.svg',
                    seoAlt: $texts.trainFreightAdvantagesSeo,
                },
            ];
        },
    },
};
</script>

<style src="@/assets/scss/pages/Tracking.scss" lang="scss" scoped></style>
