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
        </section>
    </main>
</template>

<script>
export default {
    setup() {
        const { $texts } = useNuxtApp();
        definePageMeta({
            breadcrumbTitle: 'Аренда с доставкой',
        });
        useServerSeoMeta({
            title: $texts.rentalContainersTitle,
            ogTitle: $texts.rentalContainersTitle,
            description: $texts.seoRentalContainersDescription,
            ogDescription: $texts.seoRentalContainersDescription,
            keywords:
                $texts.seoKeywordsBase + $texts.seoRentalContainersKeywords,
        });
    },
    computed: {
        bgImg() {
            const { $texts } = useNuxtApp();
            const $img = useImage();
            const imgUrl = $img('images/main_background.jpg', {
                format: 'webp',
                preload: true,
                alt: $texts.seoMainAlt,
            });
            return imgUrl;
        },
        background() {
            const imgUrl = this.bgImg;
            return {
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(23, 23, 27, 0.867787) 71%, rgba(25, 25, 29, 0.941277) 76.4%, #1B1B1F 90.42%),  url('${imgUrl}')`,
            };
        },
        bottomBackground() {
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
