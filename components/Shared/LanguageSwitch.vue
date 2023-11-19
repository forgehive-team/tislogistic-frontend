<template>
    <NuxtLink :to="targetUrl" class="link-wrapper">
        <label class="switch dummy">
            <input :value="!isRus" type="checkbox" disabled />
            <span class="slider round"></span>
            <span class="sun lang-name">Ru</span>
            <span class="moon lang-name">En</span>
        </label>
    </NuxtLink>
</template>

<script setup lang="ts">
import translatePath from '~~/helpers/translatePath';
const { siteUrl } = useRuntimeConfig();
const route = useRoute();

const isRus = siteUrl === 'https://tislogistic.ru/';
const targetUrl = computed(() => {
    const path = translatePath(route.fullPath, isRus);
    return isRus
        ? 'https://tislogistic.com' + path
        : 'https://tislogistic.ru' + path;
});
console.log(isRus, siteUrl, targetUrl.value);
</script>

<style
    src="@/assets/scss/components/Shared/ThemeSwitch.scss"
    lang="scss"
    scoped
></style>
