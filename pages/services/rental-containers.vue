<template>
    <main>
        <section>
            <div :style="background" class="bg rent-bg"></div>
            <ArendaKonteynerovMainHeader />
        </section>
        <section>
            <ArendaKonteynerovContainersStats />
        </section>
        <section class="form-section">
            <SharedReturnCallForm
                :title="$texts.rentalContainersFormTitle"
                :modal="false"
                :rental-containers="true"
                :sumbit-btn-text="$texts.requestPriceCalculation"
            />
        </section>
        <section>
            <SharedKeyIndicators
                :title="$texts.keyIndicators"
                :in-services="true"
            />
        </section>
        <section>
            <ArendaKonteynerovContainersSwiper />
        </section>
        <section class="projects-section">
            <div :style="bottomBackground" class="bg bottom-bg"></div>
            <HomeCompanyProjects :in-services="true" />
            <SharedServicesLinks class="other" />
        </section>
    </main>
</template>

<script>
export default {
    setup() {
        const { $texts } = useNuxtApp();
        definePageMeta({
            breadcrumbTitle: 'Rental containers with delivery',
        });
        useServerSeoMeta({
            title: $texts.rentalContainersTitle,
            ogTitle: $texts.rentalContainersTitle,
            description: $texts.seoRentalContainersDescription,
            ogDescription: $texts.seoRentalContainersDescription,
            keywords:
                $texts.seoKeywordsBase + $texts.seoRentalContainersKeywords,
        });
        const isWhiteTheme = useTheme();
        return {
            isWhiteTheme,
        };
    },
    computed: {
        bgImg() {
            const { $texts } = useNuxtApp();
            const $img = useImage();
            const imgUrl = $img('images/main_background.png', {
                format: 'webp',
                preload: true,
                quality: 100,
                alt: $texts.seoMainAlt,
            });
            return imgUrl;
        },
        background() {
            const imgUrl = this.bgImg;
            return {
                backgroundImage: `url('${imgUrl}')`,
            };
        },
        bottomBackground() {
            if (this.isWhiteTheme) return '';
            const imgUrl = this.bgImg;
            return {
                backgroundImage: `linear-gradient(180deg, #1B1B1F 2.74%, rgba(20, 20, 23, 0.829382) 33.51%, rgba(0, 0, 0, 0.61) 72.08%), url('${imgUrl}')`,
            };
        },
    },
};
</script>

<style
    src="@/assets/scss/pages/ArendaKonteynerov.scss"
    lang="scss"
    scoped
></style>
