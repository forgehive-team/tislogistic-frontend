<template>
    <div class="calculator__input-container">
        <img
            v-if="inputName === 'description'"
            src="@/assets/icons/info.svg"
            class="calculator__info_icon"
            :alt="$texts.additionalInfo"
        />
        <div
            v-if="inputName === 'description'"
            class="calculator__description-message"
        >
            {{ $texts.descriptionInputMessage }}
        </div>

        <input
            v-if="inputName === 'phone'"
            class="calculator__input"
            :placeholder="$texts[inputName]"
            :value="formData[inputName]"
            @input="updateField"
        />
        <input
            v-else
            :type="inputName === 'email' ? 'email' : 'text'"
            class="calculator__input"
            :placeholder="$texts[inputName]"
            :value="formData[inputName]"
            @input="updateField"
        />
        <label class="calculator__input-label">{{ $texts[inputName] }}</label>
        <div
            v-if="invalidInputMessages[inputName]"
            class="calculator__error-message"
        >
            {{ invalidInputMessages[inputName] }}
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
        inputName: {
            type: String,
            required: true,
        },
    },
    emits: ['fieldUpd'],
    methods: {
        updateField(e) {
            const value = e.target.value;
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
