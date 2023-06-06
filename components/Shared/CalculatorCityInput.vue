<template>
    <div class="calculator__destination">
        <div class="calculator__input-container">
            <img
                src="@/assets/icons/search-red.svg"
                class="calculator__search_icon"
                alt=""
            />
            <input
                class="calculator__input calculator__input_icon-left"
                :placeholder="$texts[inputName]"
                :value="formData[inputName]"
                @input="useInput"
                @blur="handleBlur"
            />
            <label class="calculator__input-label">{{
                $texts[inputName]
            }}</label>
            <ul
                v-if="suggestions.length && suggestionsShown"
                class="calculator__input-suggestions"
            >
                <li
                    v-for="(suggestion, key) in suggestions"
                    :key="key"
                    tabindex="0"
                    @click="useSuggestion"
                >
                    {{ suggestion }}
                </li>
            </ul>
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
import useThrottling from '~~/helpers/useThrottling';
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
    data() {
        return {
            suggestions: [],
            suggestionsShown: false,
        };
    },
    computed: {
        throttledFetchSuggestions() {
            const fetchSuggestions = async (value) => {
                const data = await $fetch(
                    `https://anybodygo-production.up.railway.app` +
                        `/locations/search?q=${value}`
                );
                const cities = data.slice(0, 3).map((obj) => obj.name);
                if (this.suggestionsShown) {
                    this.suggestions = [...cities];
                }
            };
            return useThrottling(fetchSuggestions, 1000);
        },
    },
    methods: {
        updateField(e) {
            const value = e.target.value ? e.target.value : e.target.innerText;
            this.$emit('fieldUpd', value);
        },
        useSuggestion(e) {
            this.updateField(e);
            this.clearSuggestions();
        },
        updateSuggestions(value) {
            if (!value) {
                this.clearSuggestions();
                return;
            }
            if (!this.suggestionsShown) {
                this.suggestionsShown = true;
            }
            this.throttledFetchSuggestions(value);
        },
        useInput(e) {
            this.updateSuggestions(e.target.value);
            this.updateField(e);
        },
        clearSuggestions() {
            if (this.suggestions.length) {
                this.suggestions = [];
            }
            this.suggestionsShown = false;
        },
        handleBlur(e) {
            // remove suggestions if focus moved to any element except the suggestions themselves
            if (!e.currentTarget.parentNode.contains(e.relatedTarget)) {
                this.clearSuggestions();
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
