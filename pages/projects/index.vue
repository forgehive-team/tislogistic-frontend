<template>
    <div v-if="pending">Loading...</div>
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

// invalidate cache on page load/refresh
if (useNuxtApp().payload.data.projects) {
    delete useNuxtApp().payload.data.projects;
}

const { pending, data } = await useLazyFetch(url, { key: 'projects' });
</script>
