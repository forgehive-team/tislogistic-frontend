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
        <label class="calculator__input-label">Branch</label>
        <div
            v-if="invalidInputMessages.city_id"
            class="calculator__error-message"
        >
            {{ invalidInputMessages.city_id }}
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
                      20: 'Vladivostok',
                      70: 'Khabarovsk',
                      30: 'Novosibirsk',
                  }
                : {
                      2: 'Vladivostok',
                      5: 'Saint Petersburg',
                      7: 'Khabarovsk',
                      3: 'Novosibirsk',
                      10: 'Novorossiysk',
                      4: 'Moscow',
                      8: 'Ussuriysk',
                      6: 'Nakhodka',
                  };
        },
        citiesIDs() {
            return this.cities.length === 3
                ? [20, 70, 30]
                : [2, 5, 7, 3, 10, 4, 8, 6];
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
