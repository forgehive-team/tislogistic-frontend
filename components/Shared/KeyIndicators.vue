<template>
    <div class="advantages">
        <h2
            v-if="props.inServices && props.title"
            class="advantages__title advantages__title_services"
        >
            {{ props.title }}
        </h2>
        <div v-if="items.length" class="advantages__container">
            <SharedKeyIndicatorsItem
                v-for="item in items"
                :key="item.header"
                :title="item.title"
                :description="item.description"
                :measurement="item.measurement"
                :in-services="props.inServices"
            />
        </div>
    </div>
</template>

<script setup>
// const { newsApiBase } = useRuntimeConfig();
// const url = newsApiBase + 'slider';
const props = defineProps(['title', 'inServices']);
const items = ref([]);

// for testing purposes:
const { $texts } = useNuxtApp();
const fakeData = [
    {
        title: $texts.tonsPerYearNumber,
        description: $texts.tonsPerYear,
    },
    {
        title: $texts.contractsSignedNumber,
        description: $texts.contractsSigned,
    },
    {
        title: $texts.experiencedEmployeesNumber,
        description: $texts.experiencedEmployees,
    },
];

onMounted(() => {
    setTimeout(() => {
        items.value = fakeData;
    }, 1000);
    // const data = await $fetch(url);
    // items.value = data.items;
});
</script>

<style
    src="@/assets/scss/components/Shared/KeyIndicators.scss"
    lang="scss"
    scoped
></style>
