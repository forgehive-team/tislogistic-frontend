<template>
    <NuxtLink :to="url" class="card">
        <div class="img-container">
            <img :src="img" />
        </div>
        <h2>{{ title }}</h2>
        <p>{{ text }}</p>
        <p class="date">{{ processedDate }}</p>
    </NuxtLink>
</template>

<script>
import transformDate from '~~/helpers/transformDate';

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
        img: {
            type: String,
            required: true,
        },
    },
    computed: {
        processedDate() {
            return transformDate(this.date);
        },
    },
};
</script>

<style
    src="@/assets/scss/components/News/NewsMainCard.scss"
    lang="scss"
    scoped
></style>
