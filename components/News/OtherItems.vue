<template>
    <div
        v-if="itemsList"
        class="projects__container"
        :class="{ projects__container_services: inServices }"
    >
        <HomeProjectsItem
            v-for="(item, i) in itemsList"
            :key="i"
            :title="item.title"
            :text="item.short_description"
            :date="transformDate(item.published_at)"
            :link="'/' + item.slug"
        />
    </div>
</template>

<script setup>
import transformDate from '~~/helpers/transformDate';
</script>

<script>
export default {
    props: {
        itemsList: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style
    src="@/assets/scss/components/News/OtherItems.scss"
    lang="scss"
    scoped
></style>
