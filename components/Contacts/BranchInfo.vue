<template>
    <div class="branch-info">
        <div class="info">
            <div v-for="(item, i) in fields" :key="i" class="item">
                <p class="label">{{ item.label }}</p>
                <p class="value" :class="i < 2 && 'value_bold'">
                    {{ props.data[item.ref] }}
                </p>
            </div>
        </div>
        <div v-if="showMap" class="map">
            <ContactsYandexMap :coordinates="props.data.coordinates" />
            <div>
                <h3>{{ props.data.coords }}</h3>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['data']);
const { $texts } = useNuxtApp();

const showMap = ref(false);
// prevent yandex from crashing
onMounted(() => {
    setTimeout(() => {
        showMap.value = true;
    }, 1000);
});

const fields = [
    {
        label: $texts.phone,
        ref: 'phone_number',
    },
    {
        label: $texts.emailString,
        ref: 'email',
    },
    {
        label: $texts.address,
        ref: 'address',
    },
    {
        label: $texts.workingHours,
        ref: 'schedule',
    },
];
</script>

<style
    src="@/assets/scss/components/Contacts/BranchInfo.scss"
    lang="scss"
    scoped
></style>
