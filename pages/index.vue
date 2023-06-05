<template>
    <div>
        <section
            :style="background"
            class="home-main"
            :title="$texts.seoMainAlt"
            :aria-label="$texts.seoMainAlt"
        >
            <HomeMainHeader />
            <div class="calculator__back-blur">
                <SharedDeliveryCalculator />
            </div>
        </section>
        <section class="home-advantages">
            <SharedKeyIndicators :title="$texts.whyChooseUs" />
        </section>
        <section class="home-services">
            <HomeServicesSection />
        </section>
        <section class="home-branches">
            <HomeBranchesList />
        </section>
        <section class="home-partners">
            <HomePartnersSwiper />
        </section>
        <section class="home-cards">
            <HomeStatsCards />
        </section>
        <section class="home-presentation">
            <HomeCompanyPresentation />
        </section>
        <section class="home-projects">
            <HomeCompanyProjects />
        </section>
        <section :style="valuesBackground" class="home-values">
            <HomeCompanyValues />
        </section>
    </div>
</template>

<script>
export default {
    setup() {
        const { $texts } = useNuxtApp();
        definePageMeta({
            breadcrumbTitle: 'Главная страница',
        });
        useServerSeoMeta({
            title: $texts.seoHomeTitle,
            ogTitle: $texts.seoHomeTitle,
            description: $texts.seoHomeDescription,
            ogDescription: $texts.seoHomeDescription,
            keywords:
                $texts.seoHomeKeywords +
                $texts.seoKeywordsBase +
                $texts.seoServicesKeywordsBase,
        });
    },
    computed: {
        bgImg() {
            const { $texts } = useNuxtApp();
            const $img = useImage();
            const imgUrl = $img('images/main_background.jpg', {
                format: 'webp',
                preload: true,
                alt: $texts.seoMainAlt,
            });
            return imgUrl;
        },
        background() {
            const imgUrl = this.bgImg;
            return {
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #1B1B1F 119.28%), url('${imgUrl}')`,
            };
        },
        valuesBackground() {
            const imgUrl = this.bgImg;
            return {
                backgroundImage: `linear-gradient(180deg, #1B1B1F 2.74%, rgba(20, 20, 23, 0.829382) 33.51%, rgba(0, 0, 0, 0.61) 72.08%), url('${imgUrl}')`,
            };
        },
    },
};
</script>

<style src="@/assets/scss/pages/Home.scss" lang="scss" scoped></style>
