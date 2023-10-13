<template>
    <div class="any-delivery">
        <h2>{{ $texts.anyDeliveryTitle }}</h2>
        <ProjectLogisticsAnyDeliveryCard
            v-for="(data, i) in anyDeliveryList"
            :key="i"
            :data="data"
        />
    </div>
</template>

<script setup>
import { anyDeliveryList } from '~~/config/anyDeliveryList';
</script>

<style
    src="@/assets/scss/components/ProjectLogistics/AnyDelivery.scss"
    lang="scss"
    scoped
></style>
