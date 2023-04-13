<template>
    <nav class="navbar" :class="{ navbar_black: isScrolled }">
        <div class="navbar__layout-container">
            <div class="navbar__left">
                <div class="navbar__logo-container">
                    <img
                        src="../../assets/icons/logoBlack.svg"
                        class="navbar__logo"
                    />
                </div>
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
        >
            <SharedCalculatorPopup
                :toggle-calculator-popup="toggleCalculatorPopup"
            />
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
    data() {
        return {
            isScrolled: false,
            sidebarShown: false,
            calculatorPopupShown: false,
        };
    },
    computed: {
        links() {
            const { $texts } = useNuxtApp();
            return [
                {
                    label: $texts.about,
                    path: '/',
                },
                {
                    label: $texts.services,
                    path: '/',
                },
                {
                    label: $texts.vacancies,
                    path: '/',
                },
                {
                    label: $texts.contacts,
                    path: '/',
                },
                {
                    label: $texts.projects,
                    path: '/',
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
            // close popup when user clicks outside of it;
            setTimeout(() => {
                const container = this.$refs.calculatorPopupContainer;
                container &&
                    container.addEventListener('click', (e) => {
                        if (e.target === e.currentTarget) {
                            this.toggleCalculatorPopup();
                        }
                    });
            }, 0);
        },
    },
};
</script>
<style src="@/assets/scss/components/Shared/NavBar.scss" lang="scss"></style>
