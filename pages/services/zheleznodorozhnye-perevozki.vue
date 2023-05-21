<template>
    <div>
        <section class="train-freight-main">
            <div :style="background" class="train-freight-bg"></div>
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
        <section>
            <ZheleznodorozhnyePerevozkiCargoTypes />
        </section>
        <SharedServicesFiller />
    </div>
</template>

<script>
export default {
    setup() {
        const { $texts } = useNuxtApp();
        definePageMeta({
            breadcrumbTitle: 'Железнодорожные грузоперевозки',
        });
        useServerSeoMeta({
            title: 'Железнодорожные грузоперевозки',
            ogTitle: 'Железнодорожные грузоперевозки',
            description: $texts.seoDescription,
            ogDescription: $texts.seoDescription,
        });
    },
    computed: {
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
                },
                {
                    title: $texts.security,
                    text: $texts.trainFreightSecurity,
                    imgPath: 'security.svg',
                },
                {
                    title: $texts.universal,
                    text: $texts.trainFreightUniversal,
                    imgPath: 'chain.svg',
                },
                {
                    title: $texts.standard,
                    text: $texts.trainFreightStandard,
                    imgPath: 'standard.svg',
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
