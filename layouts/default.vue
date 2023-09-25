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
        // const { webmasterKey } = useRuntimeConfig();
        const isWhiteTheme = useTheme();
        useHead({
            // meta: [{ name: 'yandex-verification', content: webmasterKey }],
            // proof of ownership for metrika, even though metrika doesnt require metas;
            meta: [
                { name: 'yandex-verification', content: '12db09dc804685c2' },
            ],
            // roistat script:
            script: [
                {
                    children: `(function(w, d, s, h, id) {w.roistatProjectId = id; w.roistatHost = h; var p = d.location.protocol == "https:" ? "https://" : "http://"; var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? "/dist/module.js" : "/api/site/1.0/"+id+"/init?referrer="+encodeURIComponent(d.location.href);var js = d.createElement(s); js.charset="UTF-8"; js.async = 1; js.src = p+h+u; var js2 = d.getElementsByTagName(s)[0]; js2.parentNode.insertBefore(js, js2);})(window, document, 'script', 'cloud.roistat.com', '089514df0b4eabe45f1a32e7191da33e');`,
                    tagPosition: 'bodyOpen',
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
