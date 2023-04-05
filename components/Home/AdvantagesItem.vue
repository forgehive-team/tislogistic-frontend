<template>
    <div class="advantage">
        <h3 class="advantage__title">{{ title }}</h3>
        <p class="advantage__description">{{ description }}</p>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
};
</script>
<style
    src="@/assets/scss/components/Home/AdvantagesItem.scss"
    lang="scss"
    scoped
></style>
