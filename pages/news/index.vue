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
});
const { newsApiBase } = useRuntimeConfig();

const url = newsApiBase + 'news';

const { pending, data } = await useLazyFetch(url, {
    key: 'news',
});

// watchEffect(() => {
//     refresh();
// });
</script>
