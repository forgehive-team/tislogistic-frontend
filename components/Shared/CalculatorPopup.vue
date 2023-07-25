<template>
    <div
        class="blur_shown calculator-blur visibility-animate"
        @click="closeFromBoundaries"
    >
        <div class="calc-popup">
            <button
                class="calc-popup__close"
                @click="calculatorPopupShown = false"
            >
                <IconsClosePopup :alt="$texts.close" />
            </button>
            <SharedDeliveryCalculator />
        </div>
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
    methods: {
        closeFromBoundaries(e) {
            if (e.target === e.currentTarget) {
                this.calculatorPopupShown = false;
            }
        },
    },
};
</script>

<style
    src="@/assets/scss/components/Shared/DeliveryCalculator.scss"
    lang="scss"
    scoped
></style>
