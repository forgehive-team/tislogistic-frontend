<template>
    <div class="services">
        <div class="services__top">
            <h2 class="services__title">{{ $texts.services }}</h2>
            <HomeLinkUnderline class="services__link" to="/services">{{
                $texts.allServices
            }}</HomeLinkUnderline>
        </div>
        <SharedServicesCards
            class="services-cards_services-page services-cards_main-services"
            :services-list="mainServices"
        />
    </div>
</template>

<script setup>
import { servicesList } from '~~/config/servicesList';
const mainServices = servicesList.slice(0, 5);
</script>

<style
    src="@/assets/scss/components/Home/ServicesSection.scss"
    lang="scss"
    scoped
></style>
