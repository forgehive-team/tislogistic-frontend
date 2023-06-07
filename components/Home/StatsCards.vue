<template>
    <div class="cards">
        <div class="card card_main">
            <h2 class="card__title">{{ $texts.safelyTransport }}</h2>
            <p class="card__text">{{ $texts.importFromCountries }}</p>
            <HomeLinkUnderline class="main-card__link" to="about">{{
                $texts.details
            }}</HomeLinkUnderline>
            <nuxt-img
                src="/images/container_blue.png"
                format="webp"
                width="584"
                height="277"
                sizes="xs:246px sm:246px md:246px lg:308px xl:584 xxl:584"
                loading="lazy"
                class="main-card__img"
                :alt="$texts.safelyTransport"
            />
        </div>
        <div class="cards__cards-container">
            <HomeCardsItem
                v-for="card in cardsList"
                :key="card.title"
                :title="card.title"
                :text="card.text"
            />
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        cardsList() {
            const { $texts } = useNuxtApp();
            return [
                {
                    title: $texts.ownContainers,
                    text: $texts.ownContainersDesc,
                },
                {
                    title: $texts.storageComplex,
                    text: $texts.storageComplexDesc,
                },
                {
                    title: $texts.qualifiedEmployees,
                    text: $texts.qualifiedEmployeesDesc,
                },
                {
                    title: $texts.presenceGeography,
                    text: $texts.presenceGeographyDesc,
                },
            ];
        },
    },
};
</script>

<style
    src="@/assets/scss/components/Home/StatsCards.scss"
    lang="scss"
    scoped
></style>
