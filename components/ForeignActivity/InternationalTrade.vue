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
    </div>
</template>

<script setup>
import { list as listRaw } from '~~/config/internationalTrade';
const lang = useLanguage();
const list = computed(() => {
    return listRaw[lang.value];
});
</script>

<style
    src="@/assets/scss/components/ForeignActivity/InternationalTrade.scss"
    lang="scss"
    scoped
></style>
