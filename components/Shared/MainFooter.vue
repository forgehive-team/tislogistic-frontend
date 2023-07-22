<template>
    <footer class="footer">
        <div class="footer__container">
            <NuxtLink class="footer__logo-container" to="/">
                <IconsCompanyLogo />
                <img
                    src="@/assets/icons/logo-yellow-red.svg"
                    :alt="$texts.companyNameSeo"
                />
            </NuxtLink>
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
            <img class="footer__bg" src="@/assets/icons/rhino.svg" alt="" />
        </div>
        <div class="footer__bottom">
            <NuxtLink
                class="confidentiality"
                to="/politika-konfidencialnosti"
                >{{ $texts.confidentialityPolicy }}</NuxtLink
            >
            <div class="placeholder"></div>
            <NuxtLink class="agreement" to="/eula">{{
                $texts.customerAgreement
            }}</NuxtLink>
            <span class="copyright">{{ $texts.footerNote }}</span>
        </div>
    </footer>
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
                    to: '/about',
                },
                {
                    label: this.texts.services,
                    to: '/services',
                },
                {
                    label: this.texts.vacancies,
                    to: '/vacancies',
                },
                {
                    label: this.texts.contacts,
                    to: '/contacts',
                },
                {
                    label: this.texts.projects,
                    to: '/projects',
                },
            ];
        },
        linksCenter() {
            return [
                {
                    label: this.texts.projects,
                    to: '/projects',
                    className: 'projects',
                },
                {
                    label: this.texts.tariffs,
                    to: '/tarify-na-tamozhennoe-oformlenie-gruzov',
                    className: 'tariffs',
                },
                {
                    label: this.texts.inkoterms,
                    to: '/inkoterms-2020',
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
                    to: '/sitemap',
                    className: 'map',
                },
                {
                    label: this.texts.vesselsPosition,
                    to: '/traffic',
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
