<template>
    <div class="advantages">
        <h2>{{ title }}</h2>
        <div class="advantages__container">
            <div v-for="(advantage, i) in list" :key="i" class="advantage">
                <nuxt-img
                    :src="'images/advantages_icons/' + advantage.imgPath"
                    :alt="advantage.seoAlt + advantage.title"
                    class="icon-gray"
                />
                <p>
                    <span>{{ advantage.title }}</span
                    >{{ advantage.text }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        list: {
            type: Array,
            required: true,
        },
    },
};
</script>
<style
    src="@/assets/scss/components/Shared/ServiceAdvantages.scss"
    lang="scss"
    scoped
></style>
