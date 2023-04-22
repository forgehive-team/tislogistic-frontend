<template>
    <div class="services__cards-container">
        <SharedServicesCardItem
            v-for="service in servicesList"
            :key="service.title"
            :title="service.title"
            :icon="service.icon"
        />
    </div>
</template>

<script>
export default {
    props: {
        servicesList: {
            required: true,
            type: Array,
        },
    },
};
</script>

<style
    src="@/assets/scss/components/Shared/ServicesCards.scss"
    lang="scss"
    scoped
></style>
