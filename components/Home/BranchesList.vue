<template>
    <div class="branches">
        <h2 class="branches__title">{{ $texts.branchesTitle }}</h2>

        <HomeBranchesItem
            v-if="activeBranchInfo"
            :phone="activeBranchInfo.phone_number"
            :address="activeBranchInfo.address"
        />
        <div class="branches__map">
            <div class="rel">
                <IconsBranchesMap />
                <div class="markers-container">
                    <div
                        v-for="(item, i) in items"
                        :key="i"
                        class="marker"
                        :class="{
                            marker_right: item.marker.right,
                            marker_small: item.marker.small,
                            marker_active: item.id === activeBranchId,
                        }"
                        :style="{
                            top: `${item.marker.top}%`,
                            left: `${item.marker.left}%`,
                        }"
                        @click="() => pickBranch(item.id)"
                    >
                        <span class="marker__dot"></span>
                        {{ item.name }}
                    </div>
                </div>
            </div>
        </div>
        <IconsCompanyLogo class="logo" />
    </div>
</template>

<script setup>
const { $texts } = useNuxtApp();
const { newsApiBase } = useRuntimeConfig();
const url = newsApiBase + 'cities';

const items = ref([]);
const activeBranchId = ref(4);

const activeBranchInfo = computed(() => {
    if (!items.value.length) return null;
    return items.value.find((obj) => obj.id === activeBranchId.value);
});

const pickBranch = (id) => {
    activeBranchId.value = id;
};
onMounted(async () => {
    const data = await $fetch(url);
    items.value = data;
});
</script>

<style
    src="@/assets/scss/components/Home/BracnhesList.scss"
    lang="scss"
    scoped
></style>
