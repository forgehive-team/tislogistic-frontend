<template>
    <div class="car-advantages">
        <h2>{{ $texts.carFreightAdvantages }}</h2>
        <div class="car-advantages__container">
            <div class="car-advantages__main-card">
                <h3>{{ mainCard.title }}</h3>
                <p>{{ mainCard.text }}</p>
                <nuxt-img
                    src="images/car_freight/truck.png"
                    :alt="$texts.carFreightAdvantagesSeo"
                />
            </div>
            <HomeCardsItem
                v-for="(advantage, i) in simpleCards"
                :key="i"
                :title="advantage.title"
                :text="advantage.text"
                class="_car"
            />
        </div>
    </div>
</template>

<script>
import { advantages } from '@/config/carFreightList';
export default {
    setup() {
        const lang = useLanguage();
        return {
            lang,
        };
    },
    computed: {
        mainCard() {
            return advantages[this.lang][0];
        },
        simpleCards() {
            return advantages[this.lang].slice(-4);
        },
    },
};
</script>

<style
    src="@/assets/scss/components/AvtomobilnyePerevozki/CarAdvantages.scss"
    lang="scss"
    scoped
></style>
