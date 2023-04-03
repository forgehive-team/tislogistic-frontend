<template>
    <div class="calculator">
        <h2 class="calculator__title">{{ $texts.calculateTitle }}</h2>
        <h5 class="calculator__subtitle">{{ $texts.legalEntitiesOnly }}</h5>
        <div class="calculator__steps">
            <div
                class="calculator__step"
                :class="{
                    calculator__step_active: isFirstStep,
                    calculator__step_text_red: isSecondStep,
                }"
            >
                <img
                    src="@/assets/icons/location.svg"
                    :class="{ calculator__step_red: isSecondStep }"
                />
                {{ $texts.step1 }}
            </div>
            <div
                class="calculator__step"
                :class="{ calculator__step_active: isSecondStep }"
            >
                <img
                    src="@/assets/icons/letter.svg"
                    :class="{ calculator__step_white: isSecondStep }"
                />
                {{ $texts.step2 }}
            </div>
        </div>
        <SharedCalculatorFirst
            v-if="firstStep"
            :go-second-step="goSecondStep"
        />
        <SharedCalculatorSecond v-else :go-first-step="goFirstStep" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            firstStep: true,
        };
    },
    computed: {
        isFirstStep() {
            return this.firstStep;
        },
        isSecondStep() {
            return !this.firstStep;
        },
    },
    methods: {
        goFirstStep() {
            this.firstStep = true;
        },
        goSecondStep() {
            this.firstStep = false;
        },
    },
};
</script>

<style
    lang="scss"
    src="@/assets/scss/components/Shared/DeliveryCalculator.scss"
    scoped
></style>
