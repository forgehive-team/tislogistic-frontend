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
import { anyDeliveryList as anyDeliveryListRaw } from '~~/config/anyDeliveryList';

const lang = useLanguage();
const anyDeliveryList = computed(() => {
    return anyDeliveryListRaw[lang.value];
});
</script>

<style
    src="@/assets/scss/components/ProjectLogistics/AnyDelivery.scss"
    lang="scss"
    scoped
></style>
