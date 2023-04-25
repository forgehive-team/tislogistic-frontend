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
                <div class="calculator__destination">
                    <div class="calculator__input-container">
                        <img
                            src="@/assets/icons/search-red.svg"
                            class="calculator__search_icon"
                        />
                        <input
                            class="calculator__input calculator__input_icon-left"
                            :placeholder="$texts.from"
                            :value="formData.from"
                            @input="
                                $emit('fieldUpd', $event.target.value, 'from')
                            "
                        />
                        <label class="calculator__input-label">{{
                            $texts.from
                        }}</label>
                    </div>
                    <div
                        v-if="invalidInputMessages.from"
                        class="calculator__error-message"
                    >
                        {{ invalidInputMessages.from }}
                    </div>
                    <div v-else class="calculator__suggestions">
                        <span data-for="from" @click="fillDestination">{{
                            $texts.dest1
                        }}</span>
                        <span data-for="from" @click="fillDestination">{{
                            $texts.dest2
                        }}</span>
                        <span
                            data-for="from"
                            class="tablet-desktop-only"
                            @click="fillDestination"
                            >{{ $texts.dest3 }}</span
                        >
                    </div>
                </div>
                <div class="calculator__destination">
                    <div class="calculator__input-container">
                        <img
                            src="@/assets/icons/search-red.svg"
                            class="calculator__search_icon"
                        />
                        <input
                            class="calculator__input calculator__input_icon-left"
                            :placeholder="$texts.to"
                            :value="formData.to"
                            @input="
                                $emit('fieldUpd', $event.target.value, 'to')
                            "
                        />
                        <label class="calculator__input-label">{{
                            $texts.to
                        }}</label>
                    </div>
                    <div
                        v-if="invalidInputMessages.to"
                        class="calculator__error-message"
                    >
                        {{ invalidInputMessages.to }}
                    </div>
                    <div v-else class="calculator__suggestions">
                        <span data-for="to" @click="fillDestination">{{
                            $texts.dest4
                        }}</span>
                        <span data-for="to" @click="fillDestination">{{
                            $texts.dest5
                        }}</span>
                        <span
                            data-for="to"
                            class="tablet-desktop-only"
                            @click="fillDestination"
                            >{{ $texts.dest6 }}</span
                        >
                    </div>
                </div>
            </div>
            <div class="calculator__input-container">
                <img
                    src="@/assets/icons/info.svg"
                    class="calculator__info_icon"
                />
                <input
                    class="calculator__input"
                    :placeholder="$texts.parcelDescription"
                    :value="formData.description"
                    @input="
                        $emit('fieldUpd', $event.target.value, 'description')
                    "
                />
                <label class="calculator__input-label">{{
                    $texts.parcelDescription
                }}</label>
                <div
                    v-if="invalidInputMessages.description"
                    class="calculator__error-message"
                >
                    {{ invalidInputMessages.description }}
                </div>
            </div>
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
