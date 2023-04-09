<template>
    <main>
        <section :style="background" class="home-main">
            <HomeMainHeader />
            <div class="calculator__back-blur">
                <SharedDeliveryCalculator />
            </div>
        </section>
        <section class="home-advantages">
            <HomeAdvantagesList />
        </section>
        <section class="home-services">
            <HomeServicesCards />
        </section>
        <section class="home-branches">
            <HomeBranchesList />
        </section>
        <section class="home-partners">
            <HomePartnersSwiper />
        </section>
        <section class="home-cards">
            <HomeStatsCards />
        </section>
        <section class="home-presentation">
            <HomeCompanyPresentation />
        </section>
        <section class="home-projects">
            <HomeCompanyProjects />
        </section>
        <section :style="valuesBackground" class="home-values">
            <HomeCompanyValues />
        </section>
    </main>
</template>

<script>
if (process.client) {
    require('smoothscroll-polyfill');
}
export default {
    setup() {
        if (process.client) {
            smoothscroll.polyfill();
        }
    },
    computed: {
        background() {
            const $img = useImage();
            const imgUrl = $img('images/main_background.jpg', {
                format: 'webp',
                preload: true,
            });
            return {
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #1B1B1F 119.28%), url('${imgUrl}')`,
            };
        },
        valuesBackground() {
            const $img = useImage();
            const imgUrl = $img('images/main_background.jpg', {
                format: 'webp',
                preload: true,
            });
            return {
                backgroundImage: `linear-gradient(180deg, #1B1B1F 2.74%, rgba(20, 20, 23, 0.829382) 33.51%, rgba(0, 0, 0, 0.61) 72.08%), url('${imgUrl}')`,
            };
        },
    },
};
</script>

<style src="@/assets/scss/pages/Home.scss" lang="scss" scoped></style>
