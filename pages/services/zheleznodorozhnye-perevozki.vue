<template>
    <div>
        <section class="train-freight-main">
            <div :style="background" class="train-freight-bg"></div>
            <SharedServicesHeader
                :title="$texts.trainFreight"
                :subtitle="$texts.trainFreightNote"
                class="train"
            />
        </section>
        <section id="scroll-target" class="train-freight-advantages">
            <MorskieGruzoperevozkiAdvantagesList />
        </section>
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
    },
};
</script>

<style
    src="@/assets/scss/pages/ZheleznodorozhnyePerevozki.scss"
    lang="scss"
    scoped
></style>
