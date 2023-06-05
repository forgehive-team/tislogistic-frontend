<!-- eslint-disable vue/no-v-html -->
<template>
    <main class="safari-fix">
        <section class="car-freight-main">
            <div
                :style="background"
                class="bg car-freight-bg"
                :title="seoAlt"
                :aria-label="seoAlt"
            ></div>
            <SharedServicesHeader
                :title="$texts.carFreight"
                :subtitle="$texts.carFreightNote"
                class="_car"
            />
        </section>
        <section class="car-freight-spectrum">
            <AvtomobilnyePerevozkiFullSpectrum />
        </section>
        <section>
            <AvtomobilnyePerevozkiCarAdvantages />
        </section>

        <section class="car-freight-china">
            <nuxt-img src="images/car_freight/china_bg.jpg" class="china-bg" />
            <AvtomobilnyePerevozkiChinaDelivery />
        </section>
        <SharedServicesFiller>
            <section>
                <h2
                    class="filler-message"
                    v-html="$texts.leaveApplicationHTML"
                ></h2>
            </section>
        </SharedServicesFiller>
    </main>
</template>

<script>
export default {
    setup() {
        const { $texts } = useNuxtApp();
        definePageMeta({
            breadcrumbTitle: 'Проектная логистика',
        });
        useServerSeoMeta({
            title: $texts.carFreight,
            ogTitle: $texts.carFreight,
            description: $texts.seoCarFreightDescription,
            ogDescription: $texts.seoCarFreightDescription,
            keywords:
                $texts.seoKeywordsBase +
                $texts.seoCarFreightKeywords +
                $texts.seoServicesKeywordsBase,
        });
    },
    computed: {
        seoAlt() {
            const { $texts } = useNuxtApp();
            return $texts.carFreight + $texts.companyNameSeo;
        },
        background() {
            const $img = useImage();
            const imgUrl = $img('images/car_freight_background.jpg', {
                format: 'webp',
                preload: true,
                sizes: 'xxl:1512',
                quality: 100,
                alt: this.seoAlt,
            });
            return {
                backgroundImage: `url('${imgUrl}')`,
            };
        },
        chinaBackground() {
            const $img = useImage();
            const imgUrl = $img('images/car_freight/china_bg.jpg', {
                format: 'webp',
                sizes: 'xxl:1512',
                quality: 80,
            });
            return {
                backgroundImage: `url('${imgUrl}')`,
            };
        },
    },
};
</script>

<style
    src="@/assets/scss/pages/AvtomobilnyePerevozki.scss"
    lang="scss"
    scoped
></style>
