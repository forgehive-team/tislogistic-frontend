<template>
    <div class="card">
        <h3 class="card__title">{{ title }}</h3>
        <p class="card__text">{{ text }}</p>
        <img class="card__bg" src="@/assets/icons/tick-bg.svg" />
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
    },
};
</script>

<style
    src="@/assets/scss/components/Home/StatsCards.scss"
    lang="scss"
    scoped
></style>
