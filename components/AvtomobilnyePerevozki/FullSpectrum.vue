<template>
    <div class="spectrum">
        <h2>{{ $texts.servicesSpectrum }}</h2>
        <ul class="spectrum__container">
            <li v-for="(service, i) in spectrumList" :key="i">
                <nuxt-img src="images/advantages_icons/standard.svg" />
                <p>{{ service }}</p>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { spectrumList } from '@/config/carFreightList';
</script>

<style
    src="@/assets/scss/components/AvtomobilnyePerevozki/FullSpectrum.scss"
    lang="scss"
    scoped
></style>
