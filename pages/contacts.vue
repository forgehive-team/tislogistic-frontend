<template>
    <div>
        <section>
            <div class="bg white-theme-only gradient-bg"></div>
            <SharedBreadCrumbs class="breadcrumbs" />
            <h1>{{ $texts.contacts }}</h1>
        </section>
        <section class="city-slider">
            <ContactsCitySlider
                v-if="data"
                :active-city-id="activeCityId"
                :cities="data"
                @pick-city="changeCity"
            />
        </section>
        <section class="branch-info">
            <ContactsBranchInfo v-if="activeCity" :data="activeCity" />
        </section>
        <section v-if="activeCity && activeCity.is_major_branch">
            <h2>{{ $texts.companyAdministration }}</h2>
            <ContactsCeoQuote class="ceo-quote" />
        </section>
        <section
            v-else-if="data && activeCity.employees.length"
            class="administration"
        >
            <ContactsAdministrationSlider :data="activeCity.employees" />
        </section>
        <section>
            <ContactsTelegramChannel />
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
const { newsApiBase } = useRuntimeConfig();
const url = newsApiBase + 'contacts';
// yandex maps crash on page transitions if attrs not fetched
definePageMeta({
    breadcrumbTitle: 'Contacts',
});
useServerSeoMeta({
    title: $texts.contacts,
    ogTitle: $texts.contacts,
    description: $texts.aboutSubtitle,
    ogDescription: $texts.aboutSubtitle,
    keywords: $texts.seoHomeKeywords + $texts.seoKeywordsBase,
});

const data = ref(null);
const activeCityId = ref(1);
const changeCity = (id) => {
    activeCityId.value = id;
};

const activeCity = computed(() => {
    return data.value
        ? toRaw(data.value).find((obj) => obj.id === activeCityId.value)
        : null;
});

onMounted(async () => {
    const res = await $fetch(url);
    const processedRes = res.map((obj) => ({
        ...obj,
        coordinates: Object.values(obj.coordinates).map((str) => Number(str)),
    }));
    data.value = processedRes;
});
</script>

<style src="@/assets/scss/pages/Contacts.scss" lang="scss" scoped></style>
