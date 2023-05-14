<template>
    <div>
        <section class="sea-freight-main">
            <div :style="background" class="sea-freight-bg"></div>
            <SharedServicesHeader
                :title="$texts.seaFreight"
                :subtitle="$texts.seaFreightNote"
            />
        </section>
        <section id="scroll-target" class="sea-freight-advantages">
            <MorskieGruzoperevozkiAdvantagesList />
        </section>
        <section class="sea-freight-map">
            <MorskieGruzoperevozkiStaticMap
                :title="$texts.internationalSeaFreight"
                :note="$texts.internationalSeaFreightNote"
                :subtitle="$texts.avaiableDestinations"
                :list="shippingOptions"
                class="_base"
                img="/international.png"
            />
            <MorskieGruzoperevozkiReactiveMap />
        </section>
        <section class="sea-freight-coastal">
            <MorskieGruzoperevozkiStaticMap
                :title="$texts.coastalShipping"
                :note="$texts.coastalShippingNote"
                :subtitle="$texts.coastalAvailableDestinations"
                :list="coastalShippingOptions"
                class="_coastal"
                img="/coastal.png"
            />
        </section>
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
            <SharedServicesLinks class="sea-freight-other" />
        </section>
    </div>
</template>

<script>
import { seaFreightList } from '~~/config/seaFreightList';
export default {
    setup() {
        const { $texts } = useNuxtApp();
        definePageMeta({
            breadcrumbTitle: 'Морские грузоперевозки',
        });
        useServerSeoMeta({
            title: $texts.seoTitleContainers,
            ogTitle: $texts.seoTitleContainers,
            description: $texts.seoDescription,
            ogDescription: $texts.seoDescription,
        });
    },
    computed: {
        background() {
            const $img = useImage();
            const imgUrl = $img('images/sea_freight_background.jpg', {
                format: 'webp',
                preload: true,
                sizes: 'xxl:1512',
                quality: 100,
            });
            return {
                backgroundImage: `url('${imgUrl}')`,
            };
        },
        shippingOptions() {
            return seaFreightList.map((item) => item.label);
        },
        coastalShippingOptions() {
            return [
                'Камчатка (Петропавловск-Камчатский)',
                'Сахалин (Корсаков, Холмск, Ноглики, Южно-Сахалинск, п. Вал)',
                'Чукотка (Анадырь, Эгвекинот, Провидения, Певек, Беренговский)',
                'Магадан и Курильские острова (Кунашир, Шикотан, Итуруп)',
            ];
        },
        bottomBackground() {
            const $img = useImage();
            const imgUrl = $img('images/main_background.jpg', {
                format: 'webp',
            });
            return {
                backgroundImage: `linear-gradient(180deg, #1B1B1F 2.74%, rgba(20, 20, 23, 0.829382) 27.02%, rgba(0, 0, 0, 0.61) 72.08%), url('${imgUrl}')`,
            };
        },
    },
};
</script>

<style
    src="@/assets/scss/pages/MorskieGruzoperevozki.scss"
    lang="scss"
    scoped
></style>
