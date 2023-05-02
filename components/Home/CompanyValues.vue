<template>
    <div class="values">
        <div class="values__top">
            <h2 class="values__title">
                {{ $texts.companyValues }} <br class="mobile-only" />
                {{ $texts.companyName }}
            </h2>
            <div class="values__links">
                <HomeLinkUnderline>{{ $texts.vacancies }}</HomeLinkUnderline>
                <HomeLinkUnderline>{{ $texts.about }}</HomeLinkUnderline>
            </div>
        </div>
        <div class="values__mission">
            <h3 class="values__mission-title">{{ $texts.ourMission }}</h3>
            <p class="values__mission-text">{{ $texts.ourMissionDesc }}</p>
        </div>
        <div class="values__cards-container">
            <HomeValuesCardItem
                v-for="value in valuesList"
                :key="value.title"
                :value-obj="value"
            />
        </div>
        <div class="values__actions-container">
            <p class="values__actions-text">{{ $texts.useUs }}</p>
            <div class="values__actions-buttons">
                <button
                    class="values__actions-btn animate-red"
                    @click="scrollToCalculator"
                >
                    {{ $texts.backToForm }}
                    <img
                        class="values__actions-arrow"
                        src="@/assets/icons/arrow-up-bold.svg"
                    />
                </button>
                <button
                    class="values__actions-btn values__actions-btn_white"
                    @click="returnCallShown = true"
                >
                    {{ $texts.returnCall }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        const returnCallShown = useReturnCallModal();
        return {
            returnCallShown,
        };
    },
    computed: {
        valuesList() {
            const { $texts } = useNuxtApp();
            const path = '/images/values/';
            return [
                {
                    title: $texts.professionalism,
                    text: $texts.professionalismDesc,
                    icon: path + 'business.svg',
                },
                {
                    title: $texts.improvement,
                    text: $texts.improvementDesc,
                    icon: path + 'graph.svg',
                },
                {
                    title: $texts.ecologyCompliance,
                    text: $texts.ecologyComplianceDesc,
                    icon: path + 'plant.svg',
                    class: 'eco',
                },
                {
                    class: 'tablet-insert',
                    text: $texts.useUs,
                },
            ];
        },
    },
    methods: {
        scrollToCalculator() {
            if (process.client) {
                document.getElementById('calculator').scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'center',
                });
            }
        },
    },
};
</script>

<style
    src="@/assets/scss/components/Home/CompanyValues.scss"
    lang="scss"
    scoped
></style>
