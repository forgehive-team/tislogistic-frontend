<template>
    <div class="china-delivery">
        <h2 v-html="$texts.carFreightFromChinaHTML"></h2>
        <div class="table">
            <div class="table-head head-left">{{ $texts.destination }}</div>
            <div class="table-head">{{ $texts.terms }}</div>
            <div class="table-head table-right">{{ $texts.registration }}</div>
            <template v-for="(line, i) in tableData" :key="i">
                <div class="table-item table-dest">{{ line.destination }}</div>
                <div class="table-item">{{ line.terms }}</div>
                <div class="table-item table-right">
                    {{ line.registration }}
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
import { tableData } from '~~/config/carFreightList';
</script>

<style
    src="@/assets/scss/components/AvtomobilnyePerevozki/ChinaDelivery.scss"
    lang="scss"
    scoped
></style>
