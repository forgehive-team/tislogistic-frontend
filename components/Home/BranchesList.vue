<template>
    <div class="branches">
        <h2 class="branches__title">{{ $texts.branchesTitle }}</h2>
        <HomeBranchesItem
            v-if="activeBranchInfo"
            :phone="activeBranchInfo.phone"
            :email="activeBranchInfo.email"
            :address="activeBranchInfo.address"
        />
        <div class="branches__map">
            <div class="rel">
                <IconsBranchesMap />
                <div class="markers-container">
                    <div
                        v-for="(item, i) in fakeMarkers"
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
    </div>
</template>

<script setup>
const { $texts } = useNuxtApp();
const { newsApiBase } = useRuntimeConfig();
const url = newsApiBase + 'cities';
const items = ref([]);

const fakeMarkers = [
    {
        name: 'Москва',
        address:
            '690014, г. Владивосток ул. Толстого, \n32А, ТЦ «Велес», 2 этаж',
        email: 'москва@мо',
        phone: '89240000000',
        id: 1,
        marker: {
            top: 50,
            left: 16,
            small: false,
            right: false,
        },
    },
    {
        name: 'Санкт-Петербург',
        address: '',
        email: '',
        phone: '',
        id: 2,
        marker: {
            top: 40,
            left: 14,
            small: false,
            right: true,
        },
    },
    {
        name: 'Новосибиирск',
        address: '',
        email: '',
        phone: '',
        id: 3,
        marker: {
            top: 45,
            left: 34,
            small: false,
            right: false,
        },
    },
    {
        name: 'Хабаровск',
        address: '',
        email: '',
        phone: '',
        id: 4,
        marker: {
            top: 51,
            left: 50,
            small: false,
            right: false,
        },
    },
    {
        name: 'Владивосток',
        address: '',
        email: '',
        phone: '',
        id: 5,
        marker: {
            top: 68,
            left: 54,
            small: false,
            right: true,
        },
    },
    {
        name: 'Уссурийск',
        address: '',
        email: '',
        phone: '',
        id: 6,
        marker: {
            top: 60,
            left: 54,
            small: true,
            right: true,
        },
    },
    {
        name: 'Наxодка',
        address: '',
        email: '',
        phone: '',
        id: 7,
        marker: {
            top: 60,
            left: 56,
            small: true,
            right: false,
        },
    },
];

const activeBranchId = ref(1);

const activeBranchInfo = computed(() => {
    if (!items.value.length) return null;
    return items.value.find((obj) => obj.id === activeBranchId.value);
});

const pickBranch = (id) => {
    activeBranchId.value = id;
};
onMounted(async () => {
    const data = await $fetch(url);
    console.log(data);
    // items.value = data;
    items.value = fakeMarkers;
});
</script>

<style
    src="@/assets/scss/components/Home/BracnhesList.scss"
    lang="scss"
    scoped
></style>
