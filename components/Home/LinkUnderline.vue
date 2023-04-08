<template>
    <div class="link-underline">
        <NuxtLink to="/">
            <span class="link-underline__label"><slot /></span>
            <img
                src="../../assets/icons/arrow-diagonal.svg"
                class="link-underline__arrow"
            />
        </NuxtLink>
    </div>
</template>

<script>
export default {};
</script>

<style
    src="@/assets/scss/components/Home/LinkUnderline.scss"
    lang="scss"
></style>
