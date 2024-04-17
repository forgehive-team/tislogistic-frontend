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
                :button="$texts.calculateShort"
                :title="$texts.terminalServices"
                :subtitle="$texts.seaFreightNote"
            />
        </section>
        <section id="scroll-target" class="car-freight-spectrum">
            <TerminalnieUslugiFullSpectrum />
        </section>
        <section>
            <TerminalnieUslugiAdvantages />
        </section>
        <section>
            <div class="banner">
                <strong>
                    {{ $texts.terminalServicesBanner1 }}
                    <span>{{ $texts.terminalServicesBanner2 }}</span>
                </strong>
            </div>
        </section>
        <section>
            <TerminalnieUslugiAdvantagesSlider />
        </section>
        <SharedServicesFiller />
    </div>
</template>

<script>
export default {
    setup() {
        const { $texts } = useNuxtApp();
        definePageMeta({
            breadcrumbTitle: 'Терминальные услуги',
        });
        useServerSeoMeta({
            title: $texts.terminalServices,
            ogTitle: $texts.terminalServices,
            description: $texts.seoTerminalServicesDescription,
            ogDescription: $texts.seoTerminalServicesDescription,
            keywords:
                $texts.seoKeywordsBase +
                $texts.seoTerminalServicesKeywords +
                $texts.seoServicesKeywordsBase,
        });
    },
    computed: {
        seoAlt() {
            const { $texts } = useNuxtApp();
            return $texts.terminalServices + $texts.companyNameSeo;
        },
        background() {
            const $img = useImage();
            const imgUrl = $img('images/terminal_services_background.png', {
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
        advantagesList() {
            const { $texts } = useNuxtApp();
            return [
                {
                    text: $texts.terminalServicesAdvantage1,
                    imgPath: 'gold-check.svg',
                    seoAlt: $texts.terminalServicesAdvantagesSeo,
                },
                {
                    text: $texts.terminalServicesAdvantage2,
                    imgPath: 'gold-check.svg',
                    seoAlt: $texts.terminalServicesAdvantagesSeo,
                },
                {
                    text: $texts.terminalServicesAdvantage3,
                    imgPath: 'gold-check.svg',
                    seoAlt: $texts.terminalServicesAdvantagesSeo,
                },
                {
                    text: $texts.terminalServicesAdvantage4,
                    imgPath: 'gold-check.svg',
                    seoAlt: $texts.terminalServicesAdvantagesSeo,
                },
                {
                    text: $texts.terminalServicesAdvantage5,
                    imgPath: 'gold-check.svg',
                    seoAlt: $texts.terminalServicesAdvantagesSeo,
                },
            ];
        },
    },
};
</script>

<style
    src="@/assets/scss/pages/TerminalnieUslugi.scss"
    lang="scss"
    scoped
></style>
