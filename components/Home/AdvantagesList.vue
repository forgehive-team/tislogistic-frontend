<template>
    <div class="advantages">
        <h2 class="advantages__title">{{ $texts.whyChooseUs }}</h2>
        <div class="advantages__container">
            <HomeAdvantagesItem
                v-for="item in advantagesList"
                :key="item.header"
                :title="item.header"
                :description="item.description"
            />
        </div>
    </div>
</template>
<script>
export default {
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
                },
            ];
        },
    },
};
</script>

<style
    src="@/assets/scss/components/Home/AdvantagesList.scss"
    lang="scss"
    scoped
></style>
