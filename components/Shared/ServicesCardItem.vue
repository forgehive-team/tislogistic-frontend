<template>
    <NuxtLink class="service">
        <div class="service__content">
            <img
                class="service__arrow service-icon"
                src="@/assets/icons/arrow-diagonal.svg"
                alt=""
            />
            <h3 class="service__title">{{ title }}</h3>
        </div>
        <nuxt-img class="service__img service-icon" :src="icon" :alt="imgAlt" />
    </NuxtLink>
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
    computed: {
        imgAlt() {
            const { $texts } = useNuxtApp();
            return this.title + ' ' + $texts.companyName;
        },
    },
};
</script>

<style
    src="@/assets/scss/components/Shared/ServicesCards.scss"
    lang="scss"
    scoped
></style>
