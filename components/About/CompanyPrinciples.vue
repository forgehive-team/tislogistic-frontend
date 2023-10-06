<template>
    <div>
        <h2>{{ $texts.principles }}</h2>
        <div class="grid">
            <HomeCardsItem
                v-for="(item, i) in principles"
                :key="i"
                class="_title-yellow principle"
                :title="item.title"
                :text="item.description"
            />
        </div>
        <AboutCeoQuote />
    </div>
</template>

<script setup>
import { principles as principlesRaw } from '~~/config/principlesList';
const lang = useLanguage();
const principles = computed(() => {
    return principlesRaw[lang.value];
});
</script>

<style
    src="@/assets/scss/components/About/CompanyPrinciples.scss"
    lang="scss"
    scoped
></style>
