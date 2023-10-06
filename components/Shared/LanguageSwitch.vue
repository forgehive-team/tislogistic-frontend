<template>
    <label class="switch">
        <input @change="switchLang" type="checkbox" />
        <span class="slider round"></span>
        <span class="sun">ru</span>
        <span class="moon">en</span>
    </label>
</template>

<script setup lang="ts">
const lang = useLanguage();

const switchLang = () => {
    if (lang.value === 'ru') {
        lang.value = 'en';
    } else {
        lang.value = 'ru';
    }
};
</script>

<style
    src="@/assets/scss/components/Shared/ThemeSwitch.scss"
    lang="scss"
    scoped
></style>
