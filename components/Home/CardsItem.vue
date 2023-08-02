<template>
    <div class="card">
        <h3 class="card__title">{{ title }}</h3>
        <p v-if="text" class="card__text">{{ text }}</p>
        <IconsCircleTick class="card__bg" />
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
            required: false,
            default: '',
        },
    },
};
</script>

<style
    src="@/assets/scss/components/Home/StatsCards.scss"
    lang="scss"
    scoped
></style>
