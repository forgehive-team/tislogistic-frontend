<template>
    <div>
        <HomeHeaderSlider
            :title="$texts.seoMainAlt"
            :aria-label="$texts.seoMainAlt"
        />
        <section class="home-advantages">
            <SharedKeyIndicators
                :title="$texts.whyChooseUs"
                :in-services="false"
            />
        </section>
        <section class="home-services">
            <HomeServicesSection />
        </section>
        <section>
            <HomeAdvantagesSlider />
        </section>
        <section>
            <HomeAdditionalServices />
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
        <section>
            <HomeAdvantagesPoints />
        </section>
        <section>
            <HomeFrequentQuestions />
        </section>
        <section class="home-projects">
            <HomeCompanyProjects />
        </section>
        <section class="home-footer-card">
            <HomeFooterCard />
        </section>
    </div>
</template>

<script setup>
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
</script>

<style src="@/assets/scss/pages/Home.scss" lang="scss" scoped></style>
