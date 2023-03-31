<template>
    <nav class="navbar" :class="{ navbar_black: isScrolled }">
        <div class="navbar__left">
            <div class="navbar__logo-container">
                <img
                    src="../../assets/icons/logoBlack.svg"
                    class="navbar__logo"
                />
            </div>
        </div>
        <div class="navbar__right">
            <a href="tel:8 (800) 234-80-70" class="navbar__phone">
                {{ $texts.phone }}
            </a>
            <button class="navbar__expand-btn">
                <img src="../../assets/icons/bars.svg" class="" />
            </button>
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
