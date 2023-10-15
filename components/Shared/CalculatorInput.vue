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

        <!-- maska attrs cant be v-binded -->
        <input
            v-if="inputName === 'phone'"
            v-maska
            data-maska="+# ### ###-##-##"
            class="calculator__input"
            :placeholder="$texts[inputName]"
            :value="formData[inputName]"
            @input="updateField"
            @click="setNumberToDefault"
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
import { vMaska } from 'maska';
export default {
    directives: { maska: vMaska },
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
        setNumberToDefault() {
            if (!this.formData.phone) {
                this.$emit('fieldUpd', '+7');
            }
        },
    },
};
</script>

<style
    src="@/assets/scss/components/Shared/DeliveryCalculator.scss"
    lang="scss"
    scoped
></style>
