<template>
    <div
        class="calculator__input-container select_container"
        @click="cityOptionsShown = !cityOptionsShown"
    >
        <div class="calculator__select" :class="{ gray: !formData.city_id }">
            {{ cityChosen }}
            <img
                src="@/assets/icons/expand.svg"
                :class="{ rotated: cityOptionsShown }"
                alt=""
            />
            <Transition>
                <ul v-if="cityOptionsShown" class="calculator__options">
                    <li
                        v-for="(cityID, key) in citiesIDs"
                        :key="key"
                        @click="updateField(cityID, 'city_id')"
                    >
                        {{ cities[cityID] }}
                    </li>
                </ul>
            </Transition>
        </div>
        <label class="calculator__input-label">Филиал</label>
        <div
            v-if="invalidInputMessages.city_id"
            class="calculator__error-message"
        >
            {{ invalidInputMessages.city_id }}
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
    },
    emits: ['fieldUpd'],
    data() {
        return {
            cityOptionsShown: false,
        };
    },
    computed: {
        cities() {
            const route = useRoute();
            return [
                'services-terminalnie-uslugi',
                'services-terminal-services',
            ].includes(route.name)
                ? {
                      20: 'Владивосток',
                      70: 'Хабаровск',
                      30: 'Новосибирск',
                  }
                : {
                      2: 'Владивосток',
                      5: 'Санкт-Петербург',
                      7: 'Хабаровск',
                      3: 'Новосибирск',
                      10: 'Новороссийск',
                      4: 'Москва',
                      8: 'Уссурийск',
                      6: 'Находка',
                  };
        },
        citiesIDs() {
            return Object.keys(this.cities);
        },
        cityChosen() {
            const { $texts } = useNuxtApp();
            return this.formData.city_id
                ? this.cities[this.formData.city_id]
                : $texts.chooseClosestBranch;
        },
    },
    methods: {
        updateField(value) {
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
