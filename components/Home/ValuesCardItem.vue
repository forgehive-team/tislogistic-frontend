<template>
    <div class="value" :class="valueObj.class">
        <nuxt-img
            v-if="valueObj.icon"
            :src="valueObj.icon"
            class="value__img"
            alt=""
        />
        <div class="value__content">
            <h3 v-if="valueObj.title" class="value__title">
                {{ valueObj.title }}
            </h3>
            <p class="value__text">{{ valueObj.text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        valueObj: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style
    src="@/assets/scss/components/Home/CompanyValues.scss"
    lang="scss"
    scoped
></style>
