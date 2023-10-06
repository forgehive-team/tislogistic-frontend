<template>
    <div>
        <MorskieGruzoperevozkiSwiperGrid
            :title="$texts.seaLinesTitle"
            :list="seaLinesList"
            type="lines"
        />
        <div class="divider"></div>
        <MorskieGruzoperevozkiSwiperGrid
            :title="$texts.internationalSeaFreight + $texts.companyName"
            :text="$texts.internationalSeaFreightNote"
            :list="seaFreightList"
            type="countries"
        />
    </div>
</template>

<script setup>
import {
    seaFreightList as seaFreightListRaw,
    seaLinesList,
} from '~~/config/seaFreightList';
const lang = useLanguage();
const seaFreightList = computed(() => {
    return seaFreightListRaw[lang.value];
});
</script>

<style
    lang="scss"
    scoped
    src="@/assets/scss/components/MorskieGruzoperevozki/SwiperGrid.scss"
></style>
