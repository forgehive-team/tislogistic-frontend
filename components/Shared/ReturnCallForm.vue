<template>
    <div class="return-call">
        <button
            v-if="modal"
            class="return-call__close"
            @click="returnCallShown = false"
        >
            <IconsClosePopup :alt="$texts.close" />
        </button>
        <h3>{{ title }}</h3>
        <h5>{{ $texts.willCall }}</h5>

        <div class="return-call__fields">
            <div class="return-call__field">
                <div
                    class="return-call__input"
                    :class="{ gray: !formData.service_id }"
                    @click="serviceOptionsShown = !serviceOptionsShown"
                >
                    {{ serviceChosen }}
                    <img
                        src="@/assets/icons/expand.svg"
                        :class="{ rotated: serviceOptionsShown }"
                        alt=""
                    />
                    <ul
                        class="return-call__options"
                        :class="{ options_shown: serviceOptionsShown }"
                    >
                        <li
                            v-for="(serviceID, key) in servicesIDs"
                            :key="key"
                            @click="updateField(serviceID, 'service_id')"
                        >
                            {{ services[serviceID] }}
                        </li>
                    </ul>
                </div>
                <div class="return-call__error">
                    {{ invalidInputMessages.service_id }}
                </div>
            </div>

            <div class="return-call__field">
                <div
                    class="return-call__input"
                    :class="{ gray: !formData.city_id }"
                    @click="branchOptionsShown = !branchOptionsShown"
                >
                    {{ cityChosen }}
                    <img
                        src="@/assets/icons/expand.svg"
                        :class="{ rotated: branchOptionsShown }"
                        alt=""
                    />
                    <ul
                        :class="{ options_shown: branchOptionsShown }"
                        class="return-call__options branch_options"
                    >
                        <li
                            v-for="(cityID, key) in citiesIDs"
                            :key="key"
                            @click="updateField(cityID, 'city_id')"
                        >
                            {{ cities[cityID] }}
                        </li>
                    </ul>
                </div>
                <div class="return-call__error">
                    {{ invalidInputMessages.city_id }}
                </div>
            </div>

            <div class="return-call__field">
                <input
                    class="return-call__input"
                    :placeholder="$texts.name"
                    :value="formData.full_name"
                    @input="updateField($event.target.value, 'full_name')"
                />
                <div class="return-call__error">
                    {{ invalidInputMessages.full_name }}
                </div>
            </div>

            <div class="return-call__field">
                <input
                    class="return-call__input"
                    :placeholder="$texts.phoneNumber"
                    :value="formData.phone"
                    @input="updateField($event.target.value, 'phone')"
                />
                <div class="return-call__error">
                    {{ invalidInputMessages.phone }}
                </div>
            </div>
        </div>

        <div class="return-call__bottom">
            <button class="return-call__send animate-red" @click="handleSubmit">
                {{ sumbitBtnText }}
            </button>
            <p>
                By clicking the button, you accept the terms of
                <br class="tablet-only" />
                <NuxtLink to="/eula" target="_blank"
                    >user <br class="desktop-only" />
                    agreement
                </NuxtLink>
                and
                <NuxtLink to="/privacy-policy" target="_blank"
                    >privacy policy</NuxtLink
                >
            </p>
        </div>
    </div>
</template>

<script>
import validate from '~~/helpers/validate';

export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        modal: {
            type: Boolean,
            required: true,
        },
        rentalContainers: {
            type: Boolean,
            required: true,
        },
        sumbitBtnText: {
            type: String,
            required: true,
        },
    },
    setup() {
        const returnCallShown = useReturnCallModal();
        const successShown = useSuccessModal();
        const route = useRoute();
        return {
            returnCallShown,
            successShown,
            route,
        };
    },
    data() {
        return {
            serviceOptionsShown: false,
            branchOptionsShown: false,
            formData: {
                service_id: '',
                city_id: '',
                phone: '',
                full_name: '',
            },
            invalidInputMessages: {
                service_id: '',
                city_id: '',
                phone: '',
                full_name: '',
            },
        };
    },
    computed: {
        services() {
            return this.rentalContainers
                ? {
                      25: '20DC',
                      26: '20HC PW',
                      27: '40HC',
                      28: '40HC PW',
                  }
                : {
                      14: 'Sea freight',
                      15: 'Railway freight',
                      16: 'Automobile transportation',
                      17: 'Air freight',
                      24: 'Project logistics',
                      19: 'Customs clearance',
                      20: 'Responsible storage',
                      21: 'Freight forwarding',
                      18: 'Delivery of bulk cargo',
                      22: 'Cargo insurance',
                      23: 'Product certification',
                  };
        },
        servicesIDs() {
            return Object.keys(this.services);
        },
        serviceChosen() {
            const { $texts } = useNuxtApp();
            return this.formData.service_id
                ? this.services[this.formData.service_id]
                : this.rentalContainers
                ? $texts.containerType
                : $texts.whichService;
        },
        cities() {
            return {
                4: 'Moscow',
                2: 'Vladivostok',
                5: 'Saint Petersburg',
                3: 'Novosibirsk',
                7: 'Khabarovsk',
                8: 'Ussuriysk',
                6: 'Nakhodka',
            };
        },
        citiesIDs() {
            // they wanted order
            return [4, 2, 5, 3, 7, 8, 6];
            // return Object.keys(this.cities);
        },
        cityChosen() {
            const { $texts } = useNuxtApp();
            return this.formData.city_id
                ? this.cities[this.formData.city_id]
                : $texts.branch;
        },
    },
    methods: {
        updateField(value, key) {
            this.formData[key] = value;
        },
        handleSubmit() {
            let valid = true;
            for (const [key, value] of Object.entries(this.formData)) {
                const errMessage = validate(value, key);
                if (errMessage) {
                    valid = false;
                    this.invalidInputMessages[key] = errMessage;
                    const unwatch = this.$watch(
                        () => this.formData[key],
                        () => this.clearError(key, unwatch)
                    );
                }
            }
            valid && this.sendData();
        },
        clearError(key, unwatch) {
            this.invalidInputMessages[key] = '';
            unwatch();
        },
        clearData() {
            for (const key in this.formData) {
                this.formData[key] = '';
            }
        },
        async sendData() {
            const { apiBase } = useRuntimeConfig();
            const queryParams = Object.keys(this.route.query).length
                ? this.route.query
                : null;
            const data = { ...this.formData, query_params: queryParams };
            this.successShown = !this.successShown;
            this.returnCallShown = false;
            try {
                if (dataLayer) {
                    dataLayer.push({ event: 'callback' });
                }
                await $fetch(`${apiBase}/api/callback_request/submit`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                    credentials: 'include',
                });
                this.clearData();
            } catch (err) {
                this.clearData();
            }
        },
    },
};
</script>

<style
    src="@/assets/scss/components/Shared/ReturnCallModal.scss"
    lang="scss"
    scoped
></style>
