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
                @click="toggleStep"
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
        <div class="calculator__body">
            <SharedCalculatorFirst v-if="firstStep" />
            <SharedCalculatorSecond v-else />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            firstStep: false,
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
        toggleStep() {
            this.firstStep = !this.firstStep;
        },
    },
};
</script>

<style
    lang="scss"
    src="@/assets/scss/components/Shared/DeliveryCalculator.scss"
    scoped
></style>
