<template>
    <div class="spectrum">
        <h2>{{ $texts.servicesSpectrum }}</h2>
        <ul class="spectrum__container">
            <li v-for="(service, i) in spectrumList" :key="i">
                <nuxt-img src="images/advantages_icons/standard.svg" alt="" />
                <p>{{ service }}</p>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { spectrumList as spectrumListRaw } from '@/config/carFreightList';
const lang = useLanguage();
const spectrumList = computed(() => {
    return spectrumListRaw[lang.value];
});
</script>

<style
    src="@/assets/scss/components/AvtomobilnyePerevozki/FullSpectrum.scss"
    lang="scss"
    scoped
></style>
