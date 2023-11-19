<template>
    <aside class="sidebar mobile-tablet-only">
        <div class="sidebar__container">
            <div class="sidebar__top">
                <NuxtLink class="sidebar__logo" to="/" @click="toggleSidebar">
                    <IconsCompanyLogo
                        :alt="$texts.homePage + $texts.companyNameSeo"
                    />
                </NuxtLink>
                <button class="sidebar__close" @click="toggleSidebar">
                    <img
                        src="../../assets/icons/close.svg"
                        :alt="$texts.close"
                    />
                </button>
            </div>
            <div class="sidebar__theme-container">
                <SharedThemeSwitch />
                <SharedLanguageSwitch />
            </div>
            <div class="sidebar__contacts">
                <a :href="`tel:${$texts.companyPhone}`">
                    <IconsPhoneIcon />
                    {{ $texts.companyPhone }}
                </a>
            </div>
            <div class="sidebar__buttons">
                <button
                    class="navbar__btn navbar__btn_red sidebar__btn"
                    @click="openCalculatorPopup"
                >
                    {{ $texts.calculateDelivery }}
                </button>
                <button
                    class="navbar__btn sidebar__btn"
                    @click="openReturnCall"
                >
                    {{ $texts.returnCall }}
                </button>
            </div>
            <div class="sidebar__links">
                <NuxtLink
                    to="/about"
                    class="sidebar__link"
                    @click="toggleSidebar"
                >
                    {{ $texts.about }}
                </NuxtLink>
                <div>
                    <div class="sidebar__services-link" @click="toggleServices">
                        <NuxtLink class="sidebar__link">
                            {{ $texts.services }}
                        </NuxtLink>
                        <IconsExpandArrow
                            class="expand-arrow"
                            :class="{ rotated: servicesShown }"
                        />
                    </div>

                    <Collapse :when="servicesShown" class="collapse">
                        <div class="sidebar__services-list">
                            <NuxtLink
                                v-for="(service, i) in services"
                                :key="i"
                                class="service-link service-link_sidebar"
                                :to="service.to"
                                @click="toggleSidebar"
                                >{{ service.title }}</NuxtLink
                            >
                        </div>
                    </Collapse>
                </div>
                <NuxtLink
                    v-for="link in links"
                    :key="link.label"
                    :to="link.path"
                    class="sidebar__link"
                    @click="toggleSidebar"
                >
                    {{ link.label }}
                </NuxtLink>
            </div>
            <div class="sidebar__links sidebar__links_secondary">
                <a href="/traffic" class="vessels">
                    {{ $texts.vesselsPosition }}
                </a>
                <NuxtLink
                    v-for="link in secondaryLinks"
                    :key="link.label"
                    :to="link.to"
                    @click="toggleSidebar"
                    >{{ link.label }}
                </NuxtLink>
            </div>
        </div>
    </aside>
</template>
<script>
import { Collapse } from 'vue-collapsed';
import { servicesList } from '~~/config/servicesList';
export default {
    components: {
        Collapse,
    },
    props: {
        toggleSidebar: {
            type: Function,
            required: true,
        },
        links: {
            type: Object,
            required: true,
        },
    },
    setup() {
        const calculatorPopupShown = useCalculatorPopup();
        const returnCallShown = useReturnCallModal();
        const { $texts } = useNuxtApp();
        const secondaryLinks = [
            {
                label: $texts.containerClassification,
                to: '/containers',
                className: 'classification',
            },
            {
                label: $texts.tariffs,
                to: '/custom-clearance-tariffs',
                className: 'tariffs',
            },
            {
                label: $texts.websiteMap,
                to: '/sitemap',
                className: 'map',
            },
        ];
        return {
            calculatorPopupShown,
            returnCallShown,
            secondaryLinks,
        };
    },
    data() {
        return {
            servicesShown: false,
        };
    },
    computed: {
        services() {
            return servicesList.filter((obj) => !obj.disabled);
        },
    },
    methods: {
        openCalculatorPopup() {
            this.toggleSidebar();
            this.calculatorPopupShown = true;
        },
        openReturnCall() {
            this.toggleSidebar();
            this.returnCallShown = true;
        },
        toggleServices() {
            this.servicesShown = !this.servicesShown;
        },
    },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/Shared/NavBar.scss';
@import '@/assets/scss/components/Shared/SideBar.scss';
</style>
