<template>
    <div class="services">
        <div class="services__top">
            <h2 class="services__title">
                {{ $texts.additionalServicesHomeTitle }}
            </h2>
        </div>
        <SharedServicesCards
            class="services-cards_services-page services-cards_additional-services"
            :services-list="additionalServices"
        />
    </div>
</template>

<script setup>
import { servicesList } from '~~/config/servicesList';
const additionalServices = servicesList.slice(5);
</script>

<style
    src="@/assets/scss/components/Home/ServicesSection.scss"
    lang="scss"
    scoped
></style>
