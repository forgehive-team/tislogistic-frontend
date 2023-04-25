<template>
    <div class="footer">
        <div class="footer__container">
            <div class="footer__logo-container">
                <img src="@/assets/icons/logo-white.svg" />
                <img src="@/assets/icons/logo-yellow-red.svg" />
            </div>
            <div class="footer__nav-links">
                <NuxtLink
                    v-for="(link, key) in linksLeft"
                    :key="key"
                    :to="link.to"
                    >{{ link.label }}</NuxtLink
                >
            </div>
            <div class="footer__info footer__info_left">
                <NuxtLink
                    v-for="(link, key) in linksCenter"
                    :key="key"
                    :to="link.to"
                    >{{ link.label }}</NuxtLink
                >
            </div>
            <div class="footer__info footer__info_right">
                <NuxtLink
                    v-for="(link, key) in linksRight"
                    :key="key"
                    :to="link.to"
                    >{{ link.label }}</NuxtLink
                >
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
            <NuxtLink class="confidentiality" to="/">{{
                $texts.confidentialityPolicy
            }}</NuxtLink>
            <div class="placeholder"></div>
            <NuxtLink class="agreement" to="/">{{
                $texts.customerAgreement
            }}</NuxtLink>
            <span class="copyright">{{ $texts.footerNote }}</span>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        texts() {
            const { $texts } = useNuxtApp();
            return $texts;
        },
        linksLeft() {
            return [
                {
                    label: this.texts.about,
                    to: this.texts.oldDomain + '/about',
                },
                {
                    label: this.texts.services,
                    to: '/services',
                },
                {
                    label: this.texts.vacancies,
                    to: this.texts.oldDomain + '/vacancies',
                },
                {
                    label: this.texts.contacts,
                    to: this.texts.oldDomain + '/contacts',
                },
            ];
        },
        linksCenter() {
            return [
                {
                    label: this.texts.projects,
                    to: this.texts.oldDomain + '/projects',
                    className: 'projects',
                },
                {
                    label: this.texts.tariffs,
                    to:
                        this.texts.oldDomain +
                        '/tarify-na-tamozhennoe-oformlenie-gruzov',
                    className: 'tariffs',
                },
                {
                    label: this.texts.inkoterms,
                    to: this.texts.oldDomain + '/inkoterms-2020',
                    className: 'inkoterms',
                },
            ];
        },
        linksRight() {
            return [
                {
                    label: this.texts.containerClassification,
                    to: '/containers',
                    className: 'classification',
                },
                {
                    label: this.texts.websiteMap,
                    to: this.texts.oldDomain + '/sitemap',
                    className: 'map',
                },
                {
                    label: this.texts.vesselsPosition,
                    to: this.texts.oldDomain + '/traffic',
                    className: 'vessels',
                },
            ];
        },
        moscowPhoneRef() {
            return `tel:${this.texts.moscowPhone}`;
        },
        moscowEmailRef() {
            return `mailto:${this.texts.moscowEmail}`;
        },
        vladivostokPhoneRef() {
            return `tel:${this.texts.vladivostokPhone}`;
        },
        vladivostokEmailRef() {
            return `mailto:${this.texts.vladivostokEmail}`;
        },
    },
};
</script>

<style
    src="@/assets/scss/components/Shared/MainFooter.scss"
    lang="scss"
    scoped
></style>
