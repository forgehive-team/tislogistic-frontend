<template>
    <div class="info-container">
        <h2 class="info-title">
            {{ `${$texts.containerWay} №${trackingInfo.containerNumber}` }}
        </h2>
        <div class="info-flex">
            <div v-for="item in items" class="info-item">
                <p class="info-item__label">{{ item.label }}</p>
                <p class="info-item__value">{{ item.value }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { $texts } = useNuxtApp() as any;

type Tracking = {
    loadingPort: string;
    dischargePort: string;
    arrivalDate: string;
    vessel: string;
    voyage: string;
    containerNumber: string;
};

const props = defineProps<{
    trackingInfo: Tracking;
}>();

const items = [
    {
        label: $texts.voyage,
        value: props.trackingInfo.voyage || '-/-',
    },

    {
        label: $texts.portArrivalDate,
        value: props.trackingInfo.arrivalDate || '-/-',
    },
    {
        label: $texts.loadingPort,
        value: props.trackingInfo.loadingPort || '-/-',
    },
    {
        label: $texts.dischargePort,
        value: props.trackingInfo.dischargePort || '-/-',
    },
    {
        label: $texts.vessel,
        value: props.trackingInfo.vessel || '-/-',
    },
];
</script>

<style src="@/assets/scss/pages/Tracking.scss" lang="scss" scoped></style>
