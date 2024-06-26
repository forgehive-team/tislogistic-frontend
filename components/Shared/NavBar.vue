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
                                class="navbar__services-list"
                            >
                                <NuxtLink
                                    v-for="(service, i) in services"
                                    :key="i"
                                    :to="service.to"
                                    class="service-link"
                                    >{{ service.title }}</NuxtLink
                                >
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
                    <button class="navbar__btn" @click="returnCallShown = true">
                        {{ $texts.returnCall }}
                    </button>
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
import { servicesList } from '~~/config/servicesList';
export default {
    setup() {
        const calculatorPopupShown = useCalculatorPopup();
        const returnCallShown = useReturnCallModal();
        return {
            calculatorPopupShown,
            returnCallShown,
        };
    },
    data() {
        return {
            isScrolled: false,
            sidebarShown: false,
            servicesListShown: false,
        };
    },
    computed: {
        links() {
            const { $texts } = useNuxtApp();
            return [
                {
                    label: $texts.vacancies,
                    path: `/vacancies`,
                },
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
            return servicesList.filter((obj) => !obj.disabled);
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
    },
};
</script>
<style src="@/assets/scss/components/Shared/NavBar.scss" lang="scss"></style>
