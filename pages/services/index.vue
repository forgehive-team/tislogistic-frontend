<template>
    <main>
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
            <SharedConclusionCard />
        </section>
    </main>
</template>

<script lang="ts">
import { servicesList } from '~~/config/servicesList';
export default {
    setup() {
        definePageMeta({
            breadcrumbTitle: 'Услуги',
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
