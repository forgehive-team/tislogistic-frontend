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
            <button
                class="values__actions-btn values__actions-btn_white"
                @click="returnCallShown = true"
            >
                {{ $texts.returnCall }}
            </button>
        </div>
    </div>
</template>

<script setup>
const returnCallShown = useReturnCallModal();
const calculatorShown = useCalculatorPopup();
</script>

<style
    src="@/assets/scss/components/Home/FooterCard.scss"
    lang="scss"
    scoped
></style>
