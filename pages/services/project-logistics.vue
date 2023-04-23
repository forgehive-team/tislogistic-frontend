<template>
    <main>
        <section class="project-logistics-main">
            <div :style="background" class="project-logistics-bg"></div>
            <ProjectLogisticsMainHeader />
        </section>
        <section class="project-logistics-complex-organization">
            <ProjectLogisticsComplexOrganization />
        </section>
        <section class="project-logistics-any-delivery"></section>
        <section class="project-logistics-stats"></section>
        <section class="project-logistics-projects"></section>
        <section class="project-logistics-calculator"></section>
    </main>
</template>

<script>
export default {
    setup() {
        definePageMeta({
            breadcrumbTitle: 'Проектная логистика',
        });
    },
    computed: {
        background() {
            const $img = useImage();
            const imgUrl = $img('images/project_logistics_background.jpg', {
                format: 'webp',
                preload: true,
                sizes: 'xxl:1512',
                quality: 100,
            });
            return {
                backgroundImage: `url('${imgUrl}')`,
            };
        },
    },
};
</script>

<style
    src="@/assets/scss/pages/ProjectLogistics.scss"
    lang="scss"
    scoped
></style>
