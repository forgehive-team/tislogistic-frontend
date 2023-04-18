<template>
    <div class="stats-list">
        <ContainersStatsListItem
            v-for="container in containersListTop"
            :key="container.title"
            :container="container"
        />
        <ContainersStatsListItemRus />
        <ContainersStatsListItem
            v-for="container in containersListBottom"
            :key="container.title"
            :container="container"
        />
    </div>
</template>

<script>
import { containers } from './containersList';
export default {
    computed: {
        containersListTop() {
            return containers.slice(0, 13);
        },
        containersListBottom() {
            return containers.slice(-3);
        },
    },
};
</script>

<style
    src="@/assets/scss/components/Containers/StatsList.scss"
    lang="scss"
    scoped
></style>
