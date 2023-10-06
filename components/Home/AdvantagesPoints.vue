<template>
    <div class="advantages-points">
        <div v-for="(item, i) in items" :key="i" class="point">
            <nuxt-img :src="item.img" class="icon-gray" />
            <p v-html="item.htmlText"></p>
        </div>
    </div>
</template>

<script setup>
import { advantagesPointsList } from '~~/config/homeLists';
const lang = useLanguage();

const items = computed(() => {
    return advantagesPointsList[lang.value];
});
</script>

<style
    src="@/assets/scss/components/Home/AdvantagesPoints.scss"
    lang="scss"
></style>
