<template>
    <nav class="navbar" :class="{ navbar_black: isScrolled }">
        <div class="navbar__layout-container">
            <div class="navbar__left">
                <NuxtLink class="navbar__logo-container" to="/">
                    <img
                        src="../../assets/icons/logoBlack.svg"
                        class="navbar__logo"
                    />
                </NuxtLink>
                <div class="navbar__links">
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
            <div class="navbar__right">
                <a href="tel:8 (800) 234-80-70" class="navbar__phone">
                    {{ $texts.companyPhone }}
                </a>
                <div class="navbar__desktop-buttons">
                    <a
                        href="mailto:info@tislogistic.ru"
                        class="navbar__email large-only"
                    >
                        {{ $texts.companyEmail }}
                    </a>
                    <button class="navbar__btn">
                        {{ $texts.returnCall }}
                    </button>
                    <button
                        class="navbar__btn navbar__btn_red"
                        @click="toggleCalculatorPopup"
                    >
                        {{ $texts.calculateDelivery }}
                    </button>
                </div>

                <button
                    class="navbar__expand-btn mobile-tablet-only"
                    @click="toggleSidebar"
                >
                    <img src="../../assets/icons/bars.svg" class="" />
                </button>
            </div>
        </div>

        <div
            v-if="calculatorPopupShown"
            ref="calculatorPopupContainer"
            class="blur blur_shown calculator-blur"
            @click="toggleCalculatorFromBoundaries($event)"
        >
            <SharedCalculatorPopup />
        </div>

        <div class="blur" :class="{ blur_shown: sidebarShown }"></div>
        <SharedSideBar
            :class="{ sidebar_shown: sidebarShown }"
            :toggle-sidebar="toggleSidebar"
            :toggle-calculator-popup="toggleCalculatorPopup"
            :links="links"
        />
    </nav>
    <div ref="scrollTracker" class="scroll-tracker"></div>
</template>

<script>
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
        };
    },
    computed: {
        links() {
            const { $texts } = useNuxtApp();
            return [
                {
                    label: $texts.about,
                    path: `/about`,
                },
                {
                    label: $texts.services,
                    path: '/services',
                },
                {
                    label: $texts.vacancies,
                    path: `/vacancies`,
                },
                {
                    label: $texts.contacts,
                    path: `/contacts`,
                },
                {
                    label: $texts.projects,
                    path: `/projects`,
                },
            ];
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

        toggleCalculatorPopup() {
            this.calculatorPopupShown = !this.calculatorPopupShown;
        },
        toggleCalculatorFromBoundaries(event) {
            if (event.target === event.currentTarget) {
                this.toggleCalculatorPopup();
            }
        },
    },
};
</script>
<style src="@/assets/scss/components/Shared/NavBar.scss" lang="scss"></style>
