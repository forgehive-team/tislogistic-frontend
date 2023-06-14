<template>
    <Breadcrumbs class="breadcrumbs">
        <template #breadcrumb="{ to, title }">
            <NuxtLink class="breadcrumbs__link" :to="to">
                {{
                    reactiveLabel && to === currentRoute ? reactiveLabel : title
                }}
            </NuxtLink>
        </template>
    </Breadcrumbs>
</template>

<script>
export default {
    props: {
        reactiveLabel: {
            type: String,
            required: false,
            default: '',
        },
    },
    setup() {
        const route = useRoute();
        const currentRoute = route.fullPath;
        return {
            currentRoute,
        };
    },
};
</script>
<style
    src="@/assets/scss/components/Shared/BreadCrumbs.scss"
    lang="scss"
></style>
