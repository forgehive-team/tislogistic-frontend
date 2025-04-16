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
    operationDate: string;
    operation: string;
    containerNumber: string;
    currentStation: string;
    destinationStation: string;
    distanceLeft: string;
};

const props = defineProps<{
    trackingInfo: Tracking;
}>();

const items = [
    {
        label: $texts.operationDate,
        value: props.trackingInfo.operationDate || '-/-',
    },
    {
        label: $texts.operation,
        value: props.trackingInfo.operation || '-/-',
    },
    {
        label: $texts.dislocationStation,
        value: props.trackingInfo.currentStation || '-/-',
    },
    {
        label: $texts.destinationStation,
        value: props.trackingInfo.destinationStation || '-/-',
    },
    {
        label: $texts.remainingDistance,
        value: props.trackingInfo.distanceLeft
            ? props.trackingInfo.distanceLeft + ` ${$texts.km}`
            : '-/-',
    },
];
</script>

<style src="@/assets/scss/pages/Tracking.scss" lang="scss" scoped></style>
