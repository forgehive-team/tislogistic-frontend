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
                <div class="desktop-only navbar__links">
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
                    {{ $texts.phone }}
                </a>
                <div class="navbar__desktop-buttons desktop-only">
                    <a
                        href="mailto:info@tislogistic.ru"
                        class="navbar__email large-only"
                    >
                        {{ $texts.email }}
                    </a>
                    <button class="navbar__btn">
                        {{ $texts.returnCall }}
                    </button>
                    <button class="navbar__btn navbar__btn_red">
                        {{ $texts.calculateDelivery }}
                    </button>
                </div>

                <button class="navbar__expand-btn mobile-tablet-only">
                    <img src="../../assets/icons/bars.svg" class="" />
                </button>
            </div>
        </div>
    </nav>
    <div ref="scrollTracker" class="scroll-tracker"></div>
</template>

<script>
export default {
    data() {
        return {
            isScrolled: false,
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
};
</script>

<style
    src="@/assets/scss/components/Shared/NavBar.scss"
    lang="scss"
    scoped
></style>
