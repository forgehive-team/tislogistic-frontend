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
                class="_imp"
                :button="$texts.calculateShort"
                :title="$texts.parallelImportTitle"
                :subtitle="$texts.parallelImportDescription"
            />
        </section>
        <section id="scroll-target">
            <ParallelImportCargoTypes />
        </section>
        <section>
            <ParallelImportWhyUs />
        </section>
        <section>
            <ParallelImportDifficultService />
        </section>
        <section>
            <ParallelImportOrderSteps />
        </section>

        <section>
            <div class="calculator__back-blur">
                <SharedDeliveryCalculator
                    :title="$texts.willEaseDelivery"
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
            breadcrumbTitle: 'Параллельный импорт грузов',
        });
        useServerSeoMeta({
            title: $texts.parallelImport,
            ogTitle: $texts.parallelImport,
            description: $texts.parallelImportDescription,
            ogDescription: $texts.parallelImportDescription,
            keywords:
                $texts.seoKeywordsBase +
                $texts.parallelImport +
                $texts.seoServicesKeywordsBase,
        });
    },
    computed: {
        seoAlt() {
            const { $texts } = useNuxtApp();
            return $texts.parallelImport + $texts.companyNameSeo;
        },
        background() {
            const $img = useImage();
            const imgUrl = $img('images/parallel_import_background.png', {
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
    src="@/assets/scss/pages/ParallelniyImport.scss"
    lang="scss"
    scoped
></style>
