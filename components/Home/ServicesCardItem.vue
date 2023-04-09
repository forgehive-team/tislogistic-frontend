<template>
    <div class="service">
        <div class="service__content">
            <img
                class="service__arrow"
                src="@/assets/icons/arrow-diagonal.svg"
            />
            <h3 class="service__title">{{ title }}</h3>
        </div>
        <!-- one icon as a placeholder -->
        <nuxt-img class="service__img" :src="icon" />
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        },
    },
};
</script>

<style
    src="@/assets/scss/components/Home/ServicesCards.scss"
    lang="scss"
    scoped
></style>
