<template>
    <div class="projects">
        <h2 class="projects__title">{{ $texts.companyNews }}</h2>
        <HomeLinkUnderline class="projects__link" to="/projects">{{
            $texts.allNews
        }}</HomeLinkUnderline>
        <div
            v-if="data.length"
            class="projects__container"
            :class="{ projects__container_services: props.inServices }"
        >
            <HomeProjectsItem
                v-for="(item, i) in data"
                :key="i"
                :title="item.title"
                :text="item.short_description"
                :date="transformDate(item.published_at)"
                :link="item.slug"
                path="/news/"
            />
        </div>
    </div>
</template>

<script setup>
import transformDate from '~~/helpers/transformDate';

const props = defineProps(['inServices']);
const { newsApiBase } = useRuntimeConfig();
const url = newsApiBase + 'news/?limit=3';

const data = ref([]);

onMounted(async () => {
    data.value = await $fetch(url);
});
</script>

<style
    src="@/assets/scss/components/Home/CompanyProjects.scss"
    lang="scss"
    scoped
></style>
