<template>
    <Breadcrumbs class="breadcrumbs">
        <template #breadcrumb="{ to, title }">
            <NuxtLink class="breadcrumbs__link" :to="to">
                {{ title }}
            </NuxtLink>
        </template>
    </Breadcrumbs>
</template>

<script>
export default {};
</script>
<style
    src="@/assets/scss/components/Shared/BreadCrumbs.scss"
    lang="scss"
></style>
