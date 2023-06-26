<template>
    <div v-if="pending" class="pending-load"></div>
    <div v-else>
        <NewsMain :data="data" :pending="pending" />
    </div>
</template>

<script setup>
const { $texts } = useNuxtApp();
definePageMeta({
    breadcrumbTitle: 'Проекты',
});
useServerSeoMeta({
    title: $texts.projects,
});
const { newsApiBase } = useRuntimeConfig();

const url = newsApiBase + 'projects';

const { pending, data, refresh } = await useFetch(url, {
    key: 'projects',
});
watchEffect(() => {
    refresh();
});
</script>
