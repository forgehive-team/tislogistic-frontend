<template>
    <div class="branches">
        <h2 class="branches__title">{{ $texts.branchesTitle }}</h2>
        <div class="branches__map">
            <IconsBranchesMap />
            <div class="markers-container"></div>
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
