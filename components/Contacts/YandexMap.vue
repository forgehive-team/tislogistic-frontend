<template>
    <client-only>
        <YandexMap :coordinates="props.coords">
            <YandexMarker :coordinates="props.coords" :marker-id="123">
            </YandexMarker>
        </YandexMap>
    </client-only>
    <!-- :controls="controls" -->
    <!-- :detailed-controls="detailedControls" -->
</template>

<script setup>
import { YandexMap, YandexMarker } from 'vue-yandex-maps';
const props = defineProps(['coords']);
// const controls = ['fullscreenControl'];
// const detailedControls = { zoomControl: { position: { right: 10, top: 50 } } };
</script>

<style>
.yandex-container {
    height: 100%;
    width: 100%;
    padding: 0 !important;
    margin: 0 !important;
}
</style>
