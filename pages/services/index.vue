<template>
    <main>
        <section class="services-header">
            <ServicesMainHeader />
        </section>
        <section class="services-main"></section>
        <section class="servives-extra"></section>
        <section class="servives-card">
            <SharedConclusionCard />
        </section>
    </main>
</template>

<script lang="ts">
export default {
    setup() {
        definePageMeta({
            breadcrumbTitle: 'Услуги',
        });
    },
};
</script>

<style src="@/assets/scss/pages/Services.scss" lang="scss" scoped></style>
