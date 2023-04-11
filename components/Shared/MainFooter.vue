<template>
    <div class="footer">
        <div class="footer__container">
            <div class="footer__logo-container">
                <img src="@/assets/icons/logo-white.svg" />
                <img src="@/assets/icons/logo-yellow-red.svg" />
            </div>
            <div class="footer__nav-links">
                <a>{{ $texts.about }}</a>
                <a>{{ $texts.services }}</a>
                <a>{{ $texts.vacancies }}</a>
                <a>{{ $texts.contacts }}</a>
            </div>
            <div class="footer__info footer__info_left">
                <a class="projects">{{ $texts.projects }}</a>
                <a class="tariffs">{{ $texts.tariffs }}</a>
                <a class="inkoterms">{{ $texts.inkoterms }}</a>
            </div>
            <div class="footer__info footer__info_right">
                <a class="classification">{{
                    $texts.containerClassification
                }}</a>
                <a class="map">{{ $texts.websiteMap }}</a>
                <a class="vessels">{{ $texts.vesselsPosition }}</a>
            </div>
            <div class="footer__branch-info moscow">
                <span>{{ $texts.moscow }}</span>
                <a :href="moscowPhoneRef">{{ $texts.moscowPhone }}</a>
                <a :href="moscowEmailRef">{{ $texts.moscowEmail }}</a>
                <span class="address">{{ $texts.moscowAddress }}</span>
            </div>
            <div class="footer__branch-info vdk">
                <span>{{ $texts.vladivostok }}</span>
                <a :href="vladivostokPhoneRef">{{ $texts.vladivostokPhone }}</a>
                <a :href="vladivostokEmailRef">{{ $texts.vladivostokEmail }}</a>
                <span class="address">{{ $texts.vladivostokAddress }}</span>
            </div>
            <img class="footer__bg" src="@/assets/icons/rino.svg" />
        </div>
        <div class="footer__bottom">
            <a class="confidentiality">{{ $texts.confidentialityPolicy }}</a>
            <div class="placeholder"></div>
            <a class="agreement">{{ $texts.customerAgreement }}</a>
            <span class="copyright">{{ $texts.footerNote }}</span>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        moscowPhoneRef() {
            const { $texts } = useNuxtApp();
            return `mailto:${$texts.moscowPhone}`;
        },
        moscowEmailRef() {
            const { $texts } = useNuxtApp();
            return `tel:${$texts.moscowEmail}`;
        },
        vladivostokPhoneRef() {
            const { $texts } = useNuxtApp();
            return `mailto:${$texts.vladivostokPhone}`;
        },
        vladivostokEmailRef() {
            const { $texts } = useNuxtApp();
            return `tel:${$texts.vladivostokEmail}`;
        },
    },
};
</script>

<style
    src="@/assets/scss/components/Shared/MainFooter.scss"
    lang="scss"
    scoped
></style>
