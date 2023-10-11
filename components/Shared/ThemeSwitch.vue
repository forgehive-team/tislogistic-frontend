<template>
    <label class="switch">
        <input v-model="isWhiteTheme" type="checkbox" />
        <span class="slider round"></span>
        <img class="sun" src="@/assets/icons/sun.svg" alt="" />
        <img class="moon" src="@/assets/icons/moon.svg" alt="" />
    </label>
</template>

<script setup>
const isWhiteTheme = useTheme();
</script>

<style
    src="@/assets/scss/components/Shared/ThemeSwitch.scss"
    lang="scss"
    scoped
></style>
