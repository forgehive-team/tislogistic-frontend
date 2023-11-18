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
                <!-- pre-render of this page fails as it's client-only -->
                <a href="/traffic" class="vessels">
                    {{ $texts.vesselsPosition }}
                </a>
            </div>
            <div class="footer__info footer__info_right">
                <NuxtLink
                    v-for="(link, key) in linksRight"
                    :key="key"
                    :to="link.to"
                    >{{ link.label }}</NuxtLink
                >
            </div>
            <div class="footer__branch-info phone-block">
                <span>{{ $texts.phone }}</span>
                <a :href="phoneRef">{{ $texts.companyPhone }}</a>
            </div>
            <div class="desktop-placeholder"></div>
            <img class="footer__bg" src="@/assets/icons/rhino.svg" alt="" />
        </div>
        <div class="footer__bottom">
            <NuxtLink class="confidentiality" to="/privacy-policy">{{
                $texts.confidentialityPolicy
            }}</NuxtLink>
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
                    label: this.texts.news,
                    to: '/news',
                },
            ];
        },
        linksCenter() {
            return [
                {
                    label: this.texts.news,
                    to: '/news',
                    className: 'projects',
                },
                {
                    label: this.texts.websiteMap,
                    to: '/sitemap',
                    className: 'map',
                },
            ];
        },
        linksRight() {
            return [
                {
                    label: this.texts.tariffs,
                    to: '/custom-clearance-tariffs',
                    className: 'tariffs',
                },
                {
                    label: this.texts.containerClassification,
                    to: '/containers',
                    className: 'classification',
                },
            ];
        },
        phoneRef() {
            return `tel:${this.texts.companyPhone}`;
        },
    },
};
</script>

<style
    src="@/assets/scss/components/Shared/MainFooter.scss"
    lang="scss"
    scoped
></style>
