<template>
    <div class="complex-organization">
        <h2>{{ $texts.deliveryComplexOrganization }}</h2>
        <div class="complex-organization__points-container">
            <div
                v-for="(point, key) in points"
                :key="key"
                class="complex-organization__point"
            >
                <nuxt-img
                    :src="point.img"
                    :alt="point.title + ' в ТИС Лоджистик'"
                />
                <h4>{{ point.title }}</h4>
                <p>{{ point.text }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        points() {
            const { $texts } = useNuxtApp();
            return [
                {
                    title: $texts.optimalProjectDevelopment,
                    text: $texts.optimalProjectDevelopmentDesc,
                    img: 'images/complex_organization/optimal_project_development.svg',
                },
                {
                    title: $texts.turnKeySupport,
                    text: $texts.turnKeySupportDesc,
                    img: 'images/complex_organization/turn_key_support.svg',
                },
                {
                    title: $texts.closeAllTasks,
                    text: $texts.closeAllTasksDesc,
                    img: 'images/complex_organization/close_all_tasks.svg',
                },
            ];
        },
    },
};
</script>

<style
    src="@/assets/scss/components/ProjectLogistics/ComplexOrganization.scss"
    lang="scss"
    scoped
></style>
