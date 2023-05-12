<template>
    <div class="projects">
        <h2 class="projects__title">{{ $texts.companyProjects }}</h2>
        <HomeLinkUnderline class="projects__link" to="/projects">{{
            $texts.allProjects
        }}</HomeLinkUnderline>
        <div
            class="projects__container"
            :class="{ projects__container_services: inServices }"
        >
            <HomeProjectsItem
                v-for="project in projectsList"
                :key="project.title"
                :title="project.title"
                :text="project.text"
                :date="project.date"
                :link="project.link"
            />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        inServices: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    computed: {
        projectsList() {
            const { $texts } = useNuxtApp();
            return [
                {
                    title: $texts.heavyEquipment,
                    text: $texts.heavyEquipmentDesc,
                    date: $texts.projectsDate,
                    link: '/tyazheloe-oborudovanie',
                },
                {
                    title: $texts.toxicPaint,
                    text: $texts.toxicPaintDesc,
                    date: $texts.projectsDate,
                    link: '/opasnaya-kraska',
                },
                {
                    title: $texts.lamborginiJapan,
                    text: $texts.lamborginiJapanDesc,
                    date: $texts.projectsDate,
                    link: '/lamborgini-iz-yaponii-ili-slozhnosti-dostavki-v-usloviyah-sankcij',
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
