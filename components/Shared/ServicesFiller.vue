<template>
    <section>
        <SharedKeyIndicators
            :title="$texts.keyIndicators"
            :in-services="true"
        />
    </section>
    <section>
        <div class="calculator__back-blur">
            <img class="logo" src="@/assets/icons/logo-white.svg" />
            <SharedDeliveryCalculator />
        </div>
    </section>
    <section :style="bottomBackground">
        <HomeCompanyPresentation />
        <SharedServicesLinks class="other" />
    </section>
</template>

<script>
export default {
    computed: {
        bottomBackground() {
            const $img = useImage();
            const imgUrl = $img('images/main_background.jpg', {
                format: 'webp',
                quality: 40,
            });
            return {
                backgroundImage: `linear-gradient(180deg, #1B1B1F 2.74%, rgba(20, 20, 23, 0.829382) 27.02%, rgba(0, 0, 0, 0.61) 72.08%), url('${imgUrl}')`,
            };
        },
    },
};
</script>

<style
    src="@/assets/scss/components/Shared/ServicesFiller.scss"
    lang="scss"
    scoped
></style>
