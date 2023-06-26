<template>
    <div v-if="pending" class="pending-load"></div>
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
    description: $texts.news + $texts.companyNameSeo,
});
const { newsApiBase } = useRuntimeConfig();

const url = newsApiBase + 'news';

const { pending, data, refresh } = await useFetch(url, {
    key: 'news',
});

// prevents the bug where cache never invalidates
// in an unrelated component on a different route
watchEffect(() => {
    refresh();
});
</script>
