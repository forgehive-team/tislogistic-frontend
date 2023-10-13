<template>
    <div>
        <h2>{{ $texts.whyUs }}</h2>
        <div class="pseudo-grid">
            <div class="left column">
                <HomeCardsItem
                    v-for="(item, i) in cards.slice(0, 2)"
                    :key="i"
                    class="_title-yellow _vacancies"
                    :title="item.title"
                    :text="item.text"
                />
            </div>
            <div class="right column">
                <HomeCardsItem
                    v-for="(item, i) in cards.slice(2)"
                    :key="i"
                    class="_title-yellow _vacancies"
                    :title="item.title"
                    :text="item.text"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { cards } from '~~/config/vacanciesList';
</script>

<style
    src="@/assets/scss/components/Vacancies/WhyUs.scss"
    lang="scss"
    scoped
></style>
