<template>
    <main>
        <SeoKit />
        <SharedNavBar />

        <SharedReturnCallModal
            v-if="returnCallRendered"
            :class="{ visible: returnCallOpacity }"
        />
        <SharedCalculatorSuccessModal
            v-if="successRendered"
            :class="{ visible: successOpacity }"
        />

        <SharedCalculatorPopup
            v-if="calculatorPopupRendered"
            :class="{ visible: calculatorPopupOpacity }"
        />

        <slot />

        <SharedMainFooter />
    </main>
</template>

<script>
export default {
    setup() {
        const { webmasterKey } = useRuntimeConfig();
        useHead({
            meta: [{ name: 'yandex-verification', content: webmasterKey }],
        });

        const returnCallShown = useReturnCallModal();
        const successShown = useSuccessModal();
        const calculatorPopupShown = useCalculatorPopup();
        return {
            returnCallShown,
            successShown,
            calculatorPopupShown,
        };
    },
    data() {
        return {
            returnCallRendered: false,
            returnCallOpacity: false,
            successRendered: false,
            successOpacity: false,
            calculatorPopupRendered: false,
            calculatorPopupOpacity: false,
        };
    },
    watch: {
        returnCallShown(newVal) {
            if (newVal) {
                this.returnCallRendered = true;
                setTimeout(() => (this.returnCallOpacity = true), 10);
            } else {
                this.returnCallOpacity = false;
                setTimeout(() => (this.returnCallRendered = false), 210);
            }
        },
        successShown() {
            this.successRendered = true;
            setTimeout(() => {
                this.successOpacity = true;
            }, 10);
            setTimeout(() => {
                this.successOpacity = false;
            }, 3000);
            setTimeout(() => {
                this.successRendered = false;
            }, 3210);
        },
        calculatorPopupShown(newVal) {
            if (newVal) {
                this.calculatorPopupRendered = true;
                setTimeout(() => (this.calculatorPopupOpacity = true), 10);
            } else {
                this.calculatorPopupOpacity = false;
                setTimeout(() => (this.calculatorPopupRendered = false), 210);
            }
        },
    },
};
</script>
