<template>
    <NuxtLink :to="path + link" class="project">
        <h3 class="project__title">{{ title }}</h3>
        <p class="project__text">{{ text }}</p>
        <div class="project__bottom">
            <span class="project__date">{{ date }}</span>
            <img src="@/assets/icons/arrow-long-right.svg" alt="" />
        </div>
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
        link: {
            type: String,
            required: true,
        },
        path: {
            type: String,
            required: false,
            default: '/projects',
        },
    },
};
</script>

<style
    src="@/assets/scss/components/Home/ProjectsItem.scss"
    lang="scss"
    scoped
></style>
