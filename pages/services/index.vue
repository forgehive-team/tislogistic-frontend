<template>
    <div>
        <section class="services-header">
            <ServicesMainHeader />
        </section>
        <section class="services-main">
            <h2 class="services-list__title">{{ $texts.mainServices }}</h2>
            <SharedServicesCards
                class="services-cards_services-page"
                :services-list="mainServices"
            />
        </section>
        <section class="services-extra">
            <h2 class="services-list__title">
                {{ $texts.additionalServices }}
            </h2>
            <SharedServicesCards
                class="services-cards_services-page"
                :services-list="additionalServices"
            />
        </section>
        <section class="services-card">
            <SharedConclusionCard :seo-alt="$texts.seoConclusionServices" />
        </section>
    </div>
</template>

<script lang="ts">
import { servicesList } from '~~/config/servicesList';
export default {
    setup() {
        const { $texts } = useNuxtApp();
        definePageMeta({
            breadcrumbTitle: 'Услуги',
        });
        useServerSeoMeta({
            title: $texts.seoTitleMain,
            ogTitle: $texts.seoTitleMain,
            description: $texts.seoDescription,
            ogDescription: $texts.seoDescription,
        });
    },
    computed: {
        mainServices() {
            return servicesList.slice(0, -5);
        },
        additionalServices() {
            return servicesList.slice(5);
        },
    },
};
</script>

<style src="@/assets/scss/pages/Services.scss" lang="scss" scoped></style>
