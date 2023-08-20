<template>
    <div>
        <section class="services-header">
            <div class="bg gradient-bg white-theme-only services-bg"></div>
            <ServicesMainHeader />
        </section>
        <section class="services-main">
            <h2 class="services-list__title">{{ $texts.mainServices }}</h2>
            <SharedServicesCards
                class="services-cards_services-page services-cards_main-services"
                :services-list="mainServices"
            />
        </section>
        <section class="services-extra">
            <h2 class="services-list__title">
                {{ $texts.additionalServices }}
            </h2>
            <SharedServicesCards
                class="services-cards_services-page services-cards_additional-services"
                :services-list="additionalServices"
            />
        </section>
        <section class="services-card">
            <SharedConclusionCard :seo-alt="$texts.seoConclusionServices" />
        </section>
    </div>
</template>

<script>
import { servicesList } from '~~/config/servicesList';
export default {
    setup() {
        const { $texts } = useNuxtApp();
        definePageMeta({
            breadcrumbTitle: 'Услуги',
        });
        useServerSeoMeta({
            title: $texts.seoServicesTitle,
            ogTitle: $texts.seoServicesTitle,
            description: $texts.seoServicesDescription,
            ogDescription: $texts.seoServicesDescription,
            keywords:
                $texts.seoKeywordsBase +
                $texts.seoServicesKeywordsBase +
                $texts.seoServicesKeywords,
        });
    },

    computed: {
        mainServices() {
            return servicesList.slice(0, 5);
        },
        additionalServices() {
            return servicesList.slice(5);
        },
    },
};
</script>

<style src="@/assets/scss/pages/Services.scss" lang="scss" scoped></style>
