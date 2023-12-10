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
        const isWhiteTheme = useTheme();
        useHead({
            script: [
                {
                    children:
                        "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-59B7F22B');",
                },
            ],
            noscript: [
                {
                    tagPosition: 'bodyOpen',
                    innerHTML:
                        '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-59B7F22B"height="0" width="0" style="display:none;visibility:hidden"></iframe>',
                },
            ],
            bodyAttrs: {
                class: computed(() => {
                    return isWhiteTheme.value ? 'white-theme' : 'dark-theme';
                }),
            },
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
