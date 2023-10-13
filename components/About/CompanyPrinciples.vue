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
import { principles } from '~~/config/principlesList';
</script>

<style
    src="@/assets/scss/components/About/CompanyPrinciples.scss"
    lang="scss"
    scoped
></style>
