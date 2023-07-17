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

<style lang="scss" scoped>
.divider {
    width: 100%;
    height: 2px;
    margin-top: 60px;
    margin-bottom: 60px;
    position: relative;
    &::after {
        content: '';
        background: $yellow;
        height: 2px;
        width: min(360px, 60vw);
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    }
}
</style>
