<template>
    <div class="services">
        <div class="services__top">
            <h2 class="services__title">{{ $texts.services }}</h2>
            <HomeLinkUnderline class="services__link">{{
                $texts.allServices
            }}</HomeLinkUnderline>
        </div>
        <div class="services__cards-container">
            <HomeServicesCardItem
                v-for="service in servicesList"
                :key="service.title"
                :title="service.title"
                :icon="service.icon"
            />
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        servicesList() {
            const { $texts } = useNuxtApp();
            const path = '/images/services/';
            return [
                {
                    title: $texts.seaFreight,
                    icon: path,
                },
                {
                    title: $texts.trainFreight,
                    icon: path,
                },
                {
                    title: $texts.carFreight,
                    icon: path,
                },
                {
                    title: $texts.airFreight,
                    icon: path,
                },
                {
                    title: $texts.oversizedCargo,
                    icon: path,
                },
                {
                    title: $texts.customsDeclarations,
                    icon: path,
                },
                {
                    title: $texts.storage,
                    icon: path,
                },
                {
                    title: $texts.cargoForwarding,
                    icon: path,
                },
            ];
        },
    },
};
</script>

<style
    src="@/assets/scss/components/Home/ServicesCards.scss"
    lang="scss"
    scoped
></style>
