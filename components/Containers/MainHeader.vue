<template>
    <header class="containers-header">
        <SharedBreadCrumbs />
        <h1 class="main-header__header">
            {{ $texts.containersHeader }}
            <br class="mobile-tablet-only" />
            <span>{{ $texts.companyName }}</span>
        </h1>
        <div class="containers-header__btns">
            <button
                class="animate-red"
                @click="calculatorPopupShown = !calculatorPopupShown"
            >
                {{ $texts.containersCalculate }}
            </button>
            <NuxtLink
                to="/contacts"
                class="animate-yellow-btn containers-header__btn_white"
            >
                {{ $texts.contacts }}
            </NuxtLink>
        </div>
    </header>
</template>

<script setup>
const calculatorPopupShown = useCalculatorPopup();
</script>

<style
    src="@/assets/scss/components/Containers/MainHeader.scss"
    lang="scss"
    scoped
></style>
