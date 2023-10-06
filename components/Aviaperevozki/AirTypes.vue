<template>
    <div class="types">
        <h2>{{ $texts.airFreightTypes }}</h2>
        <AviaperevozkiAirTypesCard
            v-for="(data, i) in airFreightTypes"
            :key="i"
            :data="data"
        />
    </div>
</template>

<script setup>
import { airFreightTypes as airFreightTypesRaw } from '~~/config/airFreightList';
const lang = useLanguage();
const airFreightTypes = computed(() => {
    return airFreightTypesRaw[lang.value];
});
</script>

<style
    src="@/assets/scss/components/Aviaperevozki/AirTypes.scss"
    lang="scss"
    scoped
></style>
