<template>
    <main>
        <SeoKit />
        <SharedNavBar />
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
        const route = useRoute();
        // const { webmasterKey } = useRuntimeConfig();
        const isWhiteTheme = useTheme();
        useHead({
            // meta: [{ name: 'yandex-verification', content: webmasterKey }],
            // proof of ownership for metrika, even though metrika doesnt require metas;
            meta: [
                { name: 'yandex-verification', content: '12db09dc804685c2' },
            ],
            script: [
                // roistat script:
                // botfather
                {
                    children: `(function ab(){ var request = new XMLHttpRequest(); request.open('GET', "https://scripts.botfaqtor.ru/one/130863", false); request.send(); if(request.status == 200) eval(request.responseText); })();`,
                },
            ],
            link: [
                {
                    rel: 'canonical',
                    href: 'https://tislogistic.ru' + route.path,
                },
            ],

            bodyAttrs: {
                class: computed(() => {
                    return isWhiteTheme.value ? 'white-theme' : 'dark-theme';
                }),
            },
        });
        const successShown = useSuccessModal();
        const calculatorPopupShown = useCalculatorPopup();
        return {
            successShown,
            calculatorPopupShown,
        };
    },
    data() {
        return {
            successRendered: false,
            successOpacity: false,
            calculatorPopupRendered: false,
            calculatorPopupOpacity: false,
        };
    },
    watch: {
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
