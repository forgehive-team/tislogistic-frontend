<template>
    <div class="calc-popup">
        <button class="calc-popup__close" @click="toggleCalculatorPopup">
            <img src="../../assets/icons/close.svg" />
        </button>
        <SharedDeliveryCalculator />
    </div>
</template>

<script>
export default {
    props: {
        toggleCalculatorPopup: {
            type: Function,
            required: true,
        },
    },
};
</script>

<style
    src="@/assets/scss/components/Shared/DeliveryCalculator.scss"
    lang="scss"
    scoped
></style>
