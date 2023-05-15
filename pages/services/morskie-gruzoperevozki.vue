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
        <SharedServicesFiller />
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
            title: 'Морские грузоперевозки',
            ogTitle: 'Морские грузоперевозки',
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
    },
};
</script>

<style
    src="@/assets/scss/pages/MorskieGruzoperevozki.scss"
    lang="scss"
    scoped
></style>
