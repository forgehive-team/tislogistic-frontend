<template>
    <div class="calc-popup">
        <button
            class="calc-popup__close"
            @click="calculatorPopupShown = !calculatorPopupShown"
        >
            <img src="../../assets/icons/close.svg" />
        </button>
        <SharedDeliveryCalculator />
    </div>
</template>

<script>
export default {
    setup() {
        const calculatorPopupShown = useCalculatorPopup();
        return {
            calculatorPopupShown,
        };
    },
};
</script>

<style
    src="@/assets/scss/components/Shared/DeliveryCalculator.scss"
    lang="scss"
    scoped
></style>
