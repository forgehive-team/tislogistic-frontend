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
                    icon: path + 'sea_freight.svg',
                },
                {
                    title: $texts.trainFreight,
                    icon: path + 'train_freight.svg',
                },
                {
                    title: $texts.carFreight,
                    icon: path + 'car_freight.svg',
                },
                {
                    title: $texts.airFreight,
                    icon: path + 'air_freight.svg',
                },
                {
                    title: $texts.projectLogistics,
                    icon: path + 'project_logistics.svg',
                },
                {
                    title: $texts.customsDeclarations,
                    icon: path + 'customs_declarations.svg',
                },
                {
                    title: $texts.storage,
                    icon: path + 'storage.svg',
                },
                {
                    title: $texts.cargoForwarding,
                    icon: path + 'cargo_forwarding.svg',
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
