<template>
    <div class="advantages">
        <h2>{{ $texts.seaFreightAdvantages }}</h2>
        <div class="advantages__container">
            <div
                v-for="(advantage, i) in advantagesList"
                :key="i"
                class="advantage"
            >
                <nuxt-img :src="advantage.imgPath"></nuxt-img>
                <p>
                    <span>{{ advantage.title }}</span
                    >{{ advantage.text }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        advantagesList() {
            const { $texts } = useNuxtApp();
            const imgPath = 'images/sea_freight_advantages/';
            return [
                {
                    title: $texts.reliability,
                    text: $texts.seaFreightReliability,
                    imgPath: imgPath + 'security.svg',
                },
                {
                    title: $texts.universal,
                    text: $texts.seaFreightUniversal,
                    imgPath: imgPath + 'chain.svg',
                },
                {
                    title: $texts.distance,
                    text: $texts.seaFreightDistance,
                    imgPath: imgPath + 'distance.svg',
                },
                {
                    title: $texts.speed,
                    text: $texts.seaFreightSpeed,
                    imgPath: imgPath + 'speed.svg',
                },
            ];
        },
    },
};
</script>

<style
    src="@/assets/scss/components/MorskieGruzoperevozki/AdvantagesList.scss"
    lang="scss"
    scoped
></style>
