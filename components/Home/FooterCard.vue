<template>
    <div class="values__actions-container">
        <p class="values__actions-text">{{ $texts.useUs }}</p>
        <div class="values__actions-buttons">
            <button
                class="values__actions-btn animate-red"
                @click="calculatorShown = true"
            >
                {{ $texts.calculate }}
            </button>
            <NuxtLink
                class="values__actions-btn values__actions-btn_white"
                to="/tracking"
            >
                {{ $texts.trackCargo }}
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const calculatorShown = useCalculatorPopup();
</script>

<style
    src="@/assets/scss/components/Home/FooterCard.scss"
    lang="scss"
    scoped
></style>
