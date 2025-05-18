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
                {
                    children: `(function(w, d, s, h, id) {w.roistatProjectId = id; w.roistatHost = h; var p = d.location.protocol == "https:" ? "https://" : "http://"; var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? "/dist/module.js" : "/api/site/1.0/"+id+"/init?referrer="+encodeURIComponent(d.location.href);var js = d.createElement(s); js.charset="UTF-8"; js.async = 1; js.src = p+h+u; var js2 = d.getElementsByTagName(s)[0]; js2.parentNode.insertBefore(js, js2);})(window, document, 'script', 'cloud.roistat.com', '089514df0b4eabe45f1a32e7191da33e');`,
                    tagPosition: 'bodyOpen',
                },
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
