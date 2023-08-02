<template>
    <div class="branches">
        <h2 class="branches__title">{{ $texts.branchesTitle }}</h2>
        <div v-if="items.length" class="branches__wrapper">
            <HomeBranchesItem
                v-for="(item, i) in items"
                :key="i"
                :city="item.name"
                :phone="item.phone_number"
                :email="item.email"
            />
        </div>
        <div class="branches__background">
            <IconsBranchesMap />
        </div>
    </div>
</template>

<script setup>
const { $texts } = useNuxtApp();
const { newsApiBase } = useRuntimeConfig();
const url = newsApiBase + 'cities';
const items = ref([]);

onMounted(async () => {
    const data = await $fetch(url);
    items.value = data;
});
</script>

<style
    src="@/assets/scss/components/Home/BracnhesList.scss"
    lang="scss"
    scoped
></style>
