<template>
    <nav class="navbar" :class="{ navbar_black: isScrolled }">
        <div class="navbar__layout-container">
            <div class="navbar__left">
                <NuxtLink class="navbar__logo-container" to="/">
                    <img
                        src="../../assets/icons/logoBlack.svg"
                        class="navbar__logo"
                        :alt="$texts.homePage + $texts.companyNameSeo"
                    />
                </NuxtLink>
                <div class="navbar__links">
                    <NuxtLink to="/about" class="navbar__link">{{
                        $texts.about
                    }}</NuxtLink>
                    <div
                        class="navbar__services-link"
                        @mouseover="toggleServicesList(true)"
                        @mouseleave="toggleServicesList(false)"
                    >
                        <NuxtLink class="navbar__link">
                            {{ $texts.services + ' ' }}
                            <IconsExpandArrow
                                class="expand-arrow"
                                :class="{ rotated: servicesListShown }"
                            />
                        </NuxtLink>
                        <Transition>
                            <div
                                v-if="servicesListShown"
                                class="navbar__services-container"
                            >
                                <div class="navbar__grid-services">
                                    <NuxtLink
                                        :to="service.to"
                                        v-for="(service, i) in services"
                                        :key="i"
                                        class="navbar__services-item"
                                    >
                                        <nuxt-img
                                            class="service__img"
                                            :src="service.icon"
                                        />
                                        <span class="">{{
                                            service.title
                                        }}</span>
                                    </NuxtLink>
                                </div>
                                <NuxtLink
                                    to="/services"
                                    class="navbar__services_bottom"
                                >
                                    <span
                                        >{{ $texts.allServices }}
                                        <IconsArrowDiagonal
                                            class="link-underline__arrow"
                                    /></span>
                                </NuxtLink>
                            </div>
                        </Transition>
                    </div>

                    <NuxtLink
                        v-for="link in links"
                        :key="link.label"
                        :to="link.path"
                        class="navbar__link"
                    >
                        {{ link.label }}
                    </NuxtLink>
                    <div
                        class="navbar__services-link"
                        @mouseover="toggleInfoList(true)"
                        @mouseleave="toggleInfoList(false)"
                    >
                        <NuxtLink class="navbar__link">
                            {{ $texts.info + ' ' }}
                            <IconsExpandArrow
                                class="expand-arrow"
                                :class="{ rotated: infoListShown }"
                            />
                        </NuxtLink>
                        <Transition>
                            <div
                                v-if="infoListShown"
                                class="navbar__services-list"
                            >
                                <NuxtLink
                                    v-for="(info, i) in infos"
                                    :key="i"
                                    :to="info.to"
                                    class="service-link"
                                    >{{ info.title }}</NuxtLink
                                >
                            </div>
                        </Transition>
                    </div>
                </div>
            </div>
            <div class="navbar__center">
                <SharedThemeSwitch />
                <SharedLanguageSwitch />
            </div>
            <div class="navbar__right">
                <a href="tel:8 (800) 234-80-70" class="navbar__phone">
                    {{ $texts.companyPhone }}
                </a>
                <div class="navbar__desktop-buttons">
                    <NuxtLink to="/tracking" class="navbar__btn">
                        {{ $texts.trackCargo }}
                    </NuxtLink>
                    <button
                        class="navbar__btn navbar__btn_red"
                        @click="calculatorPopupShown = true"
                    >
                        {{ $texts.calculateDelivery }}
                    </button>
                </div>

                <button
                    class="navbar__expand-btn mobile-tablet-only"
                    @click="toggleSidebar"
                >
                    <img src="../../assets/icons/bars.svg" class="" alt="" />
                </button>
            </div>
        </div>

        <div class="blur" :class="{ blur_shown: sidebarShown }"></div>
        <SharedSideBar
            :class="{ sidebar_shown: sidebarShown }"
            :toggle-sidebar="toggleSidebar"
            :links="links"
        />
    </nav>
    <div ref="scrollTracker" class="scroll-tracker"></div>
</template>

<script>
import { servicesList, infoList } from '~~/config/servicesList';
export default {
    setup() {
        const calculatorPopupShown = useCalculatorPopup();
        return {
            calculatorPopupShown,
        };
    },
    data() {
        return {
            isScrolled: false,
            sidebarShown: false,
            servicesListShown: false,
            infoListShown: false,
        };
    },
    computed: {
        links() {
            const { $texts } = useNuxtApp();
            return [
                {
                    label: $texts.contacts,
                    path: `/contacts`,
                },
                {
                    label: $texts.news,
                    path: `/news`,
                },
            ];
        },
        services() {
            const services = servicesList.filter(
                (obj) => !obj.disabled && !obj.skipInLists
            );
            return [
                services[0],
                services[1],
                services[11],
                services[10],
                services[3],
                services[2],
                services[4],
                services[5],
                services[6],
                services[7],
                services[8],
                services[9],
            ];
        },
        infos() {
            return infoList;
        },
    },
    mounted() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    this.isScrolled = !entry.isIntersecting;
                });
            },
            { threshold: [0] }
        );
        observer.observe(this.$refs.scrollTracker);
    },
    methods: {
        toggleSidebar() {
            this.sidebarShown = !this.sidebarShown;
        },
        toggleServicesList(status) {
            this.servicesListShown = status;
        },
        toggleInfoList(status) {
            this.infoListShown = status;
        },
    },
};
</script>
<style src="@/assets/scss/components/Shared/NavBar.scss" lang="scss"></style>
