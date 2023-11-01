<template>
    <div class="news">
        <section v-if="pending">Loading...</section>
        <NewsPage v-else :data="data" :is-news="true" />
    </div>
</template>

<script setup>
const { slug } = useRoute().params;

const { newsApiBase } = useRuntimeConfig();

const url = newsApiBase + 'news/' + slug;

const { pending, data, refresh } = await useFetch(url, {
    key: slug,
});
onMounted(() => {
    refresh();
});

useServerSeoMeta({
    title: () => (data?.value ? data.value.title : 'Новости'),
});
</script>

<style src="@/assets/scss/components/News/NewsPage.scss" lang="scss"></style>
