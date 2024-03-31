<template>
    <div class="advantages">
        <h2
            v-if="props.inServices && props.title"
            class="advantages__title advantages__title_services"
        >
            {{ props.title }}
        </h2>
        <div v-if="items" class="advantages__container">
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
const { newsApiBase } = useRuntimeConfig();
const url = newsApiBase + 'key-indicators';
const props = defineProps(['title', 'inServices']);
const items = ref([]);

onMounted(async () => {
    items.value = await $fetch(url);
});
</script>

<style
    src="@/assets/scss/components/Shared/KeyIndicators.scss"
    lang="scss"
    scoped
></style>
