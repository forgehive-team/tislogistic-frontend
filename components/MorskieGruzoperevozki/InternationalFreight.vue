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
import { seaFreightList, seaLinesList } from '~~/config/seaFreightList';
</script>

<style
    lang="scss"
    scoped
    src="@/assets/scss/components/MorskieGruzoperevozki/SwiperGrid.scss"
></style>
