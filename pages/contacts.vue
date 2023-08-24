<template>
    <div>
        <section>
            <div class="bg white-theme-only gradient-bg"></div>
            <SharedBreadCrumbs class="breadcrumbs" />
            <h1>{{ $texts.contacts }}</h1>
            <ContactsCitySlider
                :active-city-id="activeCityId"
                @pick-city="changeCity"
            />
            <ContactsBranchInfo :active-city-id="activeCityId" />
        </section>
        <section></section>
        <section>
            <h2>{{ $texts.companyAdministration }}</h2>
            <AboutCeoQuote />
        </section>
        <section>
            <div class="calculator__back-blur">
                <SharedDeliveryCalculator />
                <IconsCompanyLogo class="logo" />
            </div>
        </section>
    </div>
</template>

<script setup>
const { $texts } = useNuxtApp();
// yandex maps crash on pagr transitions, documented incompatibility
definePageMeta({
    breadcrumbTitle: 'Контакты',
});
useServerSeoMeta({
    title: $texts.about,
    ogTitle: $texts.about,
    description: $texts.aboutSubtitle,
    ogDescription: $texts.aboutSubtitle,
    keywords:
        $texts.seoHomeKeywords +
        $texts.seoKeywordsBase +
        $texts.seoServicesKeywordsBase,
});

// many placeholders here
const activeCityId = ref(1);
const changeCity = (id) => {
    activeCityId.value = id;
};
</script>

<style src="@/assets/scss/pages/Contacts.scss" lang="scss" scoped></style>
