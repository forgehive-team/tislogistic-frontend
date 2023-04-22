<template>
    <div class="services">
        <div class="services__top">
            <h2 class="services__title">{{ $texts.services }}</h2>
            <HomeLinkUnderline class="services__link" to="/services">{{
                $texts.allServices
            }}</HomeLinkUnderline>
        </div>
        <SharedServicesCards
            :services-list="servicesList"
            class="services-cards_home"
        />
    </div>
</template>

<script>
import { servicesList } from '~~/config/servicesList';
export default {
    computed: {
        servicesList() {
            return servicesList.slice(0, -2);
        },
    },
};
</script>

<style
    src="@/assets/scss/components/Home/ServicesSection.scss"
    lang="scss"
    scoped
></style>
