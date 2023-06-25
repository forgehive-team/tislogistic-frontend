<template>
    <div v-if="pending">Loading</div>
    <div v-else>
        <NewsMain :data="data" :pending="pending" />
    </div>
</template>

<script setup>
const { $texts } = useNuxtApp();
definePageMeta({
    breadcrumbTitle: 'Новости',
});
useServerSeoMeta({
    title: $texts.news,
});
const { newsApiBase } = useRuntimeConfig();

const url = newsApiBase + 'news';

// invalidate cache on page load/refresh
if (useNuxtApp().payload.data.news) {
    delete useNuxtApp().payload.data.news;
}

const { pending, data } = await useLazyFetch(url, { key: 'news' });
</script>
