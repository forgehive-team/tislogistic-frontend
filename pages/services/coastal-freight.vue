<template>
    <div>
        <section class="terminal-services-main">
            <div
                :style="background"
                class="bg terminal-services-bg"
                :title="seoAlt"
                :aria-label="seoAlt"
            ></div>
            <SharedServicesHeader
                class="_kab"
                :button="$texts.calculateShort"
                :title="$texts.coastalFreightTitle"
                :subtitle="$texts.coastalFreightDesctiption"
            />
        </section>
        <section id="scroll-target">
            <KabotazhniePerevozkiCoastalMap />
        </section>
        <section>
            <KabotazhniePerevozkiTheAdvantages />
        </section>
        <section>
            <KabotazhniePerevozkiCargoTypes />
        </section>

        <section>
            <div class="calculator__back-blur">
                <SharedDeliveryCalculator
                    :title="$texts.readyToDeliver"
                    :subtitle="$texts.contactNow"
                />
                <IconsCompanyLogo class="logo" />
            </div>
        </section>
        <section>
            <SharedServicesLinks class="other" />
        </section>
    </div>
</template>

<script>
export default {
    setup() {
        const { $texts } = useNuxtApp();
        definePageMeta({
            breadcrumbTitle: 'Coastal freight',
        });
        useServerSeoMeta({
            title: $texts.coastalFreight,
            ogTitle: $texts.coastalFreight,
            description: $texts.coastalFreightDesctiption,
            ogDescription: $texts.coastalFreightDesctiption,
            keywords:
                $texts.seoKeywordsBase +
                $texts.seoTerminalServicesKeywords +
                $texts.seoServicesKeywordsBase,
        });
    },
    computed: {
        seoAlt() {
            const { $texts } = useNuxtApp();
            return $texts.coastalFreight + $texts.companyNameSeo;
        },
        background() {
            const $img = useImage();
            const imgUrl = $img('images/coastal_freight_background.png', {
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
    },
};
</script>

<style
    src="@/assets/scss/pages/KabotazhniePerevozki.scss"
    lang="scss"
    scoped
></style>
