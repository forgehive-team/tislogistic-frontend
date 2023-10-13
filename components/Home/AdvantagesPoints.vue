<template>
    <div class="advantages-points">
        <div v-for="(item, i) in items" :key="i" class="point">
            <nuxt-img :src="item.img" class="icon-gray" alt="" />
            <p v-html="item.htmlText"></p>
        </div>
    </div>
</template>

<script setup>
import { advantagesPointsList as items } from '~~/config/homeLists';
</script>

<style
    src="@/assets/scss/components/Home/AdvantagesPoints.scss"
    lang="scss"
></style>
