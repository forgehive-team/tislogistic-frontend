<template>
    <div class="calculator__destination">
        <div class="calculator__input-container">
            <img
                src="@/assets/icons/search-red.svg"
                class="calculator__search_icon"
            />
            <input
                class="calculator__input calculator__input_icon-left"
                :placeholder="$texts[inputName]"
                :value="formData[inputName]"
                @input="updateField"
            />
            <label class="calculator__input-label">{{
                $texts[inputName]
            }}</label>
        </div>

        <div
            v-if="invalidInputMessages[inputName]"
            class="calculator__error-message"
        >
            {{ invalidInputMessages[inputName] }}
        </div>

        <div v-else class="calculator__suggestions">
            <span
                v-for="(destination, key) in destinations"
                :key="key"
                @click="updateField"
                >{{ destination }}</span
            >
        </div>
    </div>
</template>

<script>
export default {
    props: {
        formData: {
            type: Object,
            required: true,
        },
        invalidInputMessages: {
            type: Object,
            required: true,
        },
        destinations: {
            type: Array,
            required: true,
        },
        inputName: {
            type: String,
            required: true,
        },
    },
    emits: ['fieldUpd'],
    methods: {
        updateField(e) {
            const value = e.target.value ? e.target.value : e.target.innerText;
            this.$emit('fieldUpd', value);
        },
    },
};
</script>

<style
    src="@/assets/scss/components/Shared/DeliveryCalculator.scss"
    lang="scss"
    scoped
></style>
