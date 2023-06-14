<template>
    <NuxtLink :to="url" class="card">
        <div class="img-container"></div>
        <h2>{{ title }}</h2>
        <p>{{ text }}</p>
        <p class="date">{{ date }}</p>
    </NuxtLink>
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
        date: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
};
</script>

<style
    src="@/assets/scss/components/News/NewsMainCard.scss"
    lang="scss"
    scoped
></style>
