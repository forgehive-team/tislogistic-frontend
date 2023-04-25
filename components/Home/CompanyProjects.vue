<template>
    <div class="projects">
        <h2 class="projects__title">{{ $texts.companyProjects }}</h2>
        <HomeLinkUnderline class="projects__link" to="/projects">{{
            $texts.allProjects
        }}</HomeLinkUnderline>
        <div class="projects__container">
            <HomeProjectsItem
                v-for="project in projectsList"
                :key="project.title"
                :title="project.title"
                :text="project.text"
                :date="project.date"
            />
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        projectsList() {
            const { $texts } = useNuxtApp();
            return [
                {
                    title: $texts.heavyEquipment,
                    text: $texts.heavyEquipmentDesc,
                    date: $texts.projectsDate,
                },
                {
                    title: $texts.toxicPaint,
                    text: $texts.toxicPaintDesc,
                    date: $texts.projectsDate,
                },
                {
                    title: $texts.lamborginiJapan,
                    text: $texts.lamborginiJapanDesc,
                    date: $texts.projectsDate,
                },
            ];
        },
    },
};
</script>

<style
    src="@/assets/scss/components/Home/CompanyProjects.scss"
    lang="scss"
    scoped
></style>
