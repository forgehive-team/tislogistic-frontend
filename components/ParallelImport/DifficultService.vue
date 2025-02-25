<template>
    <div class="advantages">
        <h2>{{ $texts.difficultCategoriesService }}</h2>
        <p class="desc">{{ $texts.weOrganizeDifficult }}</p>
        <strong>{{ $texts.whatWeDo }}</strong>
        <ul class="container">
            <li
                v-for="(service, i) in difficultServices"
                :key="i"
                class="service"
            >
                <nuxt-img src="images/advantages_icons/standard.svg" alt="" />
                <p class="step">{{ service }}</p>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { difficultServices } from '~~/config/parallelImportList';
const { $texts } = useNuxtApp() as any;
</script>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 16px;
}
strong {
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    color: var(--text-primary);
    display: inline-block;
    margin-top: 24px;
}
.desc {
    margin-top: 16px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--text-primary);
}
li {
    display: flex;
    gap: 16px;
}
.step {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: var(--text-secondary);
}
img {
    width: 40px;
    filter: brightness(0) saturate(100%) invert(82%) sepia(40%) saturate(1258%)
        hue-rotate(332deg) brightness(105%) contrast(89%);

    height: fit-content;
}
@media (min-width: $tablet-breakpoint) {
    .container {
        gap: 24px;
        margin-top: 24px;
    }
    strong {
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
    }
}
@media (min-width: $desktop-breakpoint) {
    .container {
        flex-direction: row;
        margin-top: 32px;
    }
    li {
        max-width: 440px;
    }
    .desc {
        max-width: 740px;
    }
    strong {
        margin-top: 32px;
    }
}
</style>
