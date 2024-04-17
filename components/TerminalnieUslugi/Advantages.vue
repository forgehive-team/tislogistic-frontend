<template>
    <div class="car-advantages">
        <h2>{{ $texts.terminalServicesAdvantages }}</h2>
        <div class="car-advantages__container">
            <div class="car-advantages__main-card">
                <h3>{{ mainCard.title }}</h3>
                <p>{{ mainCard.text }}</p>
                <nuxt-img
                    src="images/terminal_services/truck.png"
                    :alt="$texts.terminalServicesAdvantagesSeo"
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
import { advantages } from '@/config/terminalServicesList';

export default {
    computed: {
        mainCard() {
            return advantages[0];
        },
        simpleCards() {
            return advantages.slice(-4);
        },
    },
};
</script>

<style
    src="@/assets/scss/components/AvtomobilnyePerevozki/CarAdvantages.scss"
    lang="scss"
    scoped
></style>
