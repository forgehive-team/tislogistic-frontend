<template>
    <main>
        <section :style="background" class="home-main" @load="log(e)">
            <HomeMainHeader />
            <div class="calculator__back-blur">
                <SharedDeliveryCalculator />
            </div>
        </section>
        <section class="home-advantages">
            <HomeAdvantagesList />
        </section>
        <section class="home-services"></section>
        <section class="home-branches">
            <HomeBranchesList />
        </section>
        <section class="home-partners">
            <HomePartnersSwiper />
        </section>
        <section class="home-cards"></section>
        <section class="home-presentation">
            <HomeCompanyPresentation />
        </section>
    </main>
</template>

<script>
export default {
    computed: {
        background() {
            const $img = useImage();
            const imgUrl = $img('images/main_background.jpg', {
                format: 'webp',
            });
            return {
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #1B1B1F 119.28%), url('${imgUrl}')`,
            };
        },
    },
};
</script>

<style src="@/assets/scss/pages/Home.scss" lang="scss" scoped></style>
