<template>
    <div class="advantages">
        <h2
            class="advantages__title"
            :class="{ advantages__title_services: inServices }"
        >
            {{ title }}
        </h2>
        <div class="advantages__container">
            <SharedKeyIndicatorsItem
                v-for="item in advantagesList"
                :key="item.header"
                :title="item.header"
                :description="item.description"
                :measurement="item.measurement"
                :in-services="inServices"
            />
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        inServices: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    computed: {
        advantagesList() {
            const { $texts } = useNuxtApp();
            return [
                {
                    header: $texts.tonsPerYearNumber,
                    description: $texts.tonsPerYear,
                },
                {
                    header: $texts.contractsSignedNumber,
                    description: $texts.contractsSigned,
                },
                {
                    header: $texts.experiencedEmployeesNumber,
                    description: $texts.experiencedEmployees,
                },
                {
                    header: $texts.warehouseAreaNumber,
                    description: $texts.warehouseArea,
                    measurement: $texts.warehouseAreaNumberSuffix,
                },
            ];
        },
    },
};
</script>

<style
    src="@/assets/scss/components/Shared/KeyIndicators.scss"
    lang="scss"
    scoped
></style>
