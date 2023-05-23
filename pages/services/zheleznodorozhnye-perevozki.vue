<template>
    <div>
        <section class="train-freight-main">
            <div
                :style="background"
                class="bg train-freight-bg"
                :title="seoAlt"
                :aria-label="seoAlt"
            ></div>
            <SharedServicesHeader
                :title="$texts.trainFreight"
                :subtitle="$texts.trainFreightNote"
                class="_train"
            />
        </section>
        <section id="scroll-target" class="train-freight-advantages">
            <SharedServiceAdvantages
                :title="$texts.trainFreightAdvantages"
                :list="advantagesList"
                class="_train"
            />
        </section>
        <ZheleznodorozhnyePerevozkiReactiveMap />
        <section class="train-freight-cargo-type">
            <ZheleznodorozhnyePerevozkiCargoTypes />
        </section>
        <SharedServicesFiller modifier="train" />
    </div>
</template>

<script>
export default {
    setup() {
        const { $texts } = useNuxtApp();
        definePageMeta({
            // $texts cannot be used here
            breadcrumbTitle: 'Железнодорожные перевозки',
        });
        useServerSeoMeta({
            title: $texts.trainFreight + $texts.companyNameSeo,
            ogTitle: $texts.trainFreight + $texts.companyNameSeo,
            description: $texts.trainFreightSeoDescription,
            ogDescription: $texts.trainFreightSeoDescription,
        });
    },
    computed: {
        seoAlt() {
            const { $texts } = useNuxtApp();
            return $texts.trainFreight + $texts.companyNameSeo;
        },
        background() {
            const $img = useImage();
            const imgUrl = $img('images/train_freight_background.jpg', {
                format: 'webp',
                preload: true,
                quality: '100',
            });
            return {
                backgroundImage: `url('${imgUrl}')`,
            };
        },
        advantagesList() {
            const { $texts } = useNuxtApp();
            return [
                {
                    title: $texts.price,
                    text: $texts.trainFreightPrice,
                    imgPath: 'price.svg',
                    seoAlt: $texts.trainFreightAdvantagesSeo,
                },
                {
                    title: $texts.security,
                    text: $texts.trainFreightSecurity,
                    imgPath: 'security.svg',
                    seoAlt: $texts.trainFreightAdvantagesSeo,
                },
                {
                    title: $texts.universal,
                    text: $texts.trainFreightUniversal,
                    imgPath: 'chain.svg',
                    seoAlt: $texts.trainFreightAdvantagesSeo,
                },
                {
                    title: $texts.standard,
                    text: $texts.trainFreightStandard,
                    imgPath: 'standard.svg',
                    seoAlt: $texts.trainFreightAdvantagesSeo,
                },
            ];
        },
    },
};
</script>

<style
    src="@/assets/scss/pages/ZheleznodorozhnyePerevozki.scss"
    lang="scss"
    scoped
></style>
