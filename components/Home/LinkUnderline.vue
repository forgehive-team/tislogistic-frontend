<template>
    <div class="link-underline">
        <NuxtLink :to="to" :target="blank ? '_blank' : ''">
            <span class="link-underline__label"><slot /></span>
            <IconsArrowDiagonal class="link-underline__arrow" />
        </NuxtLink>
    </div>
</template>

<script>
export default {
    props: {
        to: {
            required: false,
            type: String,
            default: '/containers',
        },
        blank: {
            required: false,
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style
    src="@/assets/scss/components/Home/LinkUnderline.scss"
    lang="scss"
></style>
