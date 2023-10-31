<template>
    <div>
        <h2>{{ $texts.internationalTradeTitle }}</h2>
        <div class="grid">
            <div v-for="(item, i) in list" :key="i" class="item">
                <nuxt-img :src="item.img" alt="" class="icon-gray" />
                <p>{{ item.label }}</p>
            </div>
        </div>
        <p class="footnote">{{ $texts.parallelImportDef }}</p>
        <p class="footnote footnote_second">{{ $texts.from500Kilos }}</p>
    </div>
</template>

<script setup>
import { list } from '~~/config/internationalTrade';
</script>

<style
    src="@/assets/scss/components/ForeignActivity/InternationalTrade.scss"
    lang="scss"
    scoped
></style>
