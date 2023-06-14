<template>
    <div>
        <section v-if="pending">Loading...</section>
        <section v-else>
            <SharedBreadCrumbs :reactive-label="data.title" />

            <h1>{{ data.title }}</h1>
            <p>{{ data.description }}</p>
            <nuxt-img :src="data.image" />
            <p>{{ data.price }}</p>
        </section>
    </div>
</template>

<script setup>
const { slug } = useRoute().params;
const uri = 'https://fakestoreapi.com/products/' + slug;
const { pending, data } = await useLazyFetch(uri);

definePageMeta({
    breadcrumbTitle: 'Новости',
});
useServerSeoMeta({
    title: () => (data?.value ? data.value.title : 'Новости'),
});
</script>

<style lang="scss" scoped>
section {
    min-height: 100vh;
}
</style>
