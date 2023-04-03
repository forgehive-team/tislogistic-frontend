<template>
    <main>
        <section :style="background" class="home-main" @load="log(e)">
            <HomeMainHeader />
            <div class="calculator__back-blur">
                <SharedDeliveryCalculator />
            </div>
        </section>
        <section class="home-advantages"></section>
        <section class="home-services"></section>
        <section class="home-branches"></section>
        <section class="home-partners"></section>
        <section class="home-card"></section>
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
                backgroundImage: `linear-gradient(180deg, rgba(27, 27, 31, 0) 18.83%, rgba(27, 27, 31, 0.48) 28.46%, rgba(27, 27, 31, 0.786099) 73.62%, rgba(27, 27, 31, 0.914955) 83.71%, #1B1B1F 91.02%), url('${imgUrl}')`,
            };
        },
    },
};
</script>

<style src="@/assets/scss/pages/Home.scss" lang="scss" scoped></style>
