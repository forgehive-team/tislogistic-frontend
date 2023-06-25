<template>
    <div class="news">
        <section v-if="pending">Loading...</section>
        <NewsPage v-else :data="data" :is-news="false" />
    </div>
</template>

<script setup>
const { slug } = useRoute().params;

const { newsApiBase } = useRuntimeConfig();

const url = newsApiBase + 'projects/' + slug;
const { pending, data } = await useLazyFetch(url);

console.log(data);

useServerSeoMeta({
    title: () => (data?.value ? data.value.title : 'Проекты'),
});
</script>

<style src="@/assets/scss/components/News/NewsPage.scss" lang="scss"></style>
