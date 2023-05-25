<template>
    <div class="advantages">
        <h2 class="title">{{ $texts.airFreightAdvantages }}</h2>
        <div class="advantages__container">
            <div class="main-card">
                <h2 class="in-card-title">{{ $texts.airFreightAdvantages }}</h2>
                <h3>{{ airFreightAdvantages[0] }}</h3>
                <nuxt-img
                    src="images/air_freight/plane.png"
                    quality="80"
                    format="webp"
                />
            </div>
            <HomeCardsItem
                v-for="(title, i) in airFreightAdvantages"
                :key="i"
                :title="title"
                class="_air"
            />
        </div>
    </div>
</template>

<script setup>
import { airFreightAdvantages } from '~~/config/airFreightList';
</script>

<style
    src="@/assets/scss/components/Aviaperevozki/AirAdvantages.scss"
    lang="scss"
    scoped
></style>
