<template>
    <div class="return-call">
        <button
            v-if="modal"
            class="return-call__close"
            @click="returnCallShown = false"
        >
            <img src="@/assets/icons/close.svg" />
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

            <div class="retrun-call__field">
                <input
                    class="return-call__input"
                    :placeholder="$texts.FIO"
                    @input="updateField($event.target.value, 'full_name')"
                />
                <div class="return-call__error">
                    {{ invalidInputMessages.full_name }}
                </div>
            </div>

            <div class="retrun-call__field">
                <input
                    v-maska
                    class="return-call__input"
                    :placeholder="$texts.phoneNumber"
                    data-maska="+7 ### ###-##-##"
                    data-maska-eager
                    @input="updateField($event.target.value, 'phone')"
                />
                <div class="return-call__error">
                    {{ invalidInputMessages.phone }}
                </div>
            </div>
        </div>

        <div class="return-call__bottom">
            <button class="return-call__send animate-red" @click="handleSubmit">
                {{ $texts.send }}
            </button>
            <p>
                Нажимая кнопку <span>«Отправить»</span>, Вы принимаете условия
                <br class="tablet-only" />
                <span
                    >пользовательского
                    <br class="desktop-only" />
                    соглашения</span
                >
                и
                <span>политики конфиденциальности</span>
            </p>
        </div>
    </div>
</template>

<script>
import { vMaska } from 'maska';
import validate from '~~/helpers/validate';
export default {
    directives: { maska: vMaska },
    props: {
        title: {
            type: String,
            required: true,
        },
        modal: {
            type: Boolean,
            required: true,
        },
    },
    setup() {
        const returnCallShown = useReturnCallModal();
        const successShown = useSuccessModal();
        return {
            returnCallShown,
            successShown,
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
            return {
                14: 'Морские грузоперевозки',
                15: 'Железнодорожные перевозки',
                16: 'Автомобильные перевозки',
                17: 'Авиаперевозки',
                18: 'Доставка сборных грузов',
                19: 'Таможенное оформление',
                20: 'Ответственное хранение',
                21: 'Экспедирование грузов',
                22: 'Страхование грузов',
                23: 'Сертификация продукции',
            };
        },
        servicesIDs() {
            return Object.keys(this.services);
        },
        serviceChosen() {
            const { $texts } = useNuxtApp();
            return this.formData.service_id
                ? this.services[this.formData.service_id]
                : $texts.whichService;
        },
        cities() {
            return {
                2: 'Владивосток',
                3: 'Новосибирск',
                4: 'Москва',
                5: 'Санкт-Петербург',
                6: 'Находка',
                7: 'Хабаровск',
                8: 'Уссурийск',
            };
        },
        citiesIDs() {
            return Object.keys(this.cities);
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
            this.successShown = !this.successShown;
            this.returnCallShown = false;
            try {
                await $fetch(`${apiBase}/api/callback_request/submit`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(this.formData),
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
