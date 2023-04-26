<template>
    <div class="calculator__body">
        <div class="calculator__desktop-layout-container">
            <div class="calculator__destinations">
                <button
                    class="calculator__switch tablet-desktop-only"
                    @click="switchDestinations"
                >
                    <img src="@/assets/icons/switch-arrows.svg" />
                </button>

                <SharedCalculatorCityInput
                    :form-data="formData"
                    :invalid-input-messages="invalidInputMessages"
                    input-name="from"
                    :destinations="destinationsList.slice(0, 3)"
                    @field-upd="(value) => $emit('fieldUpd', value, 'from')"
                />
                <SharedCalculatorCityInput
                    :form-data="formData"
                    :invalid-input-messages="invalidInputMessages"
                    input-name="to"
                    :destinations="destinationsList.slice(-3)"
                    @field-upd="(value) => $emit('fieldUpd', value, 'to')"
                />
            </div>

            <SharedCalculatorInput
                :form-data="formData"
                :invalid-input-messages="invalidInputMessages"
                input-name="description"
                @field-upd="(value) => $emit('fieldUpd', value, 'description')"
            />
        </div>

        <div class="calculator__bottom">
            <div class="tablet-desktop-only calculator__note">
                {{ $texts.calculatorNote }}
            </div>
            <button
                class="calculator__button btn-next animate-red"
                @click="handleSubmit"
            >
                {{ $texts.next }}
                <img
                    class="calculator__button-arrow"
                    src="@/assets/icons/arrow-right.svg"
                />
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        handleSubmit: {
            type: Function,
            required: true,
        },
        formData: {
            type: Object,
            required: true,
        },
        invalidInputMessages: {
            type: Object,
            required: true,
        },
    },
    emits: ['fieldUpd'],
    computed: {
        destinationsList() {
            const { $texts } = useNuxtApp();
            return [
                $texts.dest1,
                $texts.dest2,
                $texts.dest3,
                $texts.dest4,
                $texts.dest5,
                $texts.dest6,
            ];
        },
    },
    methods: {
        switchDestinations() {
            const temp = this.formData.to;
            this.$emit('fieldUpd', this.formData.from, 'to');
            this.$emit('fieldUpd', temp, 'from');
        },
        fillDestination(e) {
            const target = e.currentTarget;
            const value = target.innerText;
            const targetField = target.dataset.for;
            this.$emit('fieldUpd', value, targetField);
        },
    },
};
</script>

<style
    lang="scss"
    src="@/assets/scss/components/Shared/DeliveryCalculator.scss"
    scoped
></style>
