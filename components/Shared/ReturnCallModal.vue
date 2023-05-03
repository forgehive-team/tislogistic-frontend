<template>
    <div
        class="blur_shown return-bg visibility-animate"
        @click="closeFromBoundaries"
    >
        <div class="return-call">
            <button
                class="return-call__close"
                @click="returnCallShown = !returnCallShown"
            >
                <img src="@/assets/icons/close.svg" />
            </button>
            <h3>{{ $texts.returnCall }}</h3>
            <h5>{{ $texts.willCall }}</h5>

            <div class="return-call__fields">
                <div class="return-call__field">
                    <div
                        class="return-call__input"
                        :class="{ gray: !formData.service }"
                        name="service"
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
                                v-for="(service, key) in services"
                                :key="key"
                                @click="
                                    updateField(
                                        $event.target.innerText,
                                        'service'
                                    )
                                "
                            >
                                {{ service }}
                            </li>
                        </ul>
                    </div>
                    <div class="return-call__error">
                        {{ invalidInputMessages.service }}
                    </div>
                </div>

                <div class="return-call__field">
                    <div
                        class="return-call__input"
                        :class="{ gray: !formData.branch }"
                        name="branch"
                        @click="branchOptionsShown = !branchOptionsShown"
                    >
                        {{ branchChosen }}
                        <img
                            src="@/assets/icons/expand.svg"
                            :class="{ rotated: branchOptionsShown }"
                        />
                        <ul
                            :class="{ options_shown: branchOptionsShown }"
                            class="return-call__options branch_options"
                        >
                            <li
                                v-for="(branch, key) in branches"
                                :key="key"
                                @click="
                                    updateField(
                                        $event.target.innerText,
                                        'branch'
                                    )
                                "
                            >
                                {{ branch }}
                            </li>
                        </ul>
                    </div>
                    <div class="return-call__error">
                        {{ invalidInputMessages.branch }}
                    </div>
                </div>

                <div class="retrun-call__field">
                    <input
                        class="return-call__input"
                        :placeholder="$texts.FIO"
                        @input="updateField($event.target.value, 'fio')"
                    />
                    <div class="return-call__error">
                        {{ invalidInputMessages.fio }}
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
                <button
                    class="return-call__send animate-red"
                    @click="handleSubmit"
                >
                    {{ $texts.send }}
                </button>
                <p>
                    Нажимая кнопку <span>«Отправить»</span>, Вы принимаете
                    условия
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
    </div>
</template>

<script>
import { vMaska } from 'maska';
import { servicesList } from '~~/config/servicesList';
import validate from '~~/helpers/validate';
export default {
    directives: { maska: vMaska },
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
                service: '',
                branch: '',
                phone: '',
                fio: '',
            },
            invalidInputMessages: {
                service: '',
                branch: '',
                phone: '',
                fio: '',
            },
        };
    },
    computed: {
        services() {
            return servicesList.map((obj) => obj.title);
        },
        serviceChosen() {
            const { $texts } = useNuxtApp();
            return this.formData.service
                ? this.formData.service
                : $texts.whichService;
        },
        branchChosen() {
            const { $texts } = useNuxtApp();
            return this.formData.branch ? this.formData.branch : $texts.branch;
        },
        branches() {
            return [
                'Москва',
                'Санкт-Петербург',
                'Владивосток',
                'Новосибирск',
                'Находка',
                'Уссурийск',
                'Хабаровск',
            ];
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
        sendData() {
            this.successShown = !this.successShown;
            this.returnCallShown = false;
            this.clearData();
            // CORS
            // try {
            //     await $fetch(
            //         'https://tislogistic.ru/api/callback_request/submit',
            //         {
            //             method: 'POST',
            //             headers: {
            //                 'Content-Type': 'application/json',
            //             },
            //             body: JSON.stringify(this.formData),
            //         }
            //     );
            // } catch (err) {
            //     console.log(err);
            // }
        },
        closeFromBoundaries(e) {
            if (e.target === e.currentTarget) {
                this.returnCallShown = false;
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
