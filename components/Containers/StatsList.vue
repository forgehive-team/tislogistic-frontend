<template>
    <div class="stats-list">
        <ContainersStatsListItem
            v-for="container in containersList"
            :key="container.title"
            :container="container"
        />
    </div>
</template>

<script>
import { containers } from './containersList';
export default {
    computed: {
        containersList() {
            return containers;
        },
    },
};
</script>

<style
    src="@/assets/scss/components/Containers/StatsList.scss"
    lang="scss"
    scoped
></style>
