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
                <div
                    class="return-call__field"
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
                            @click="formData.service = $event.target.innerText"
                        >
                            {{ service }}
                        </li>
                    </ul>
                </div>

                <div
                    class="return-call__field"
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
                        class="return-call__options"
                    >
                        <li
                            v-for="(branch, key) in branches"
                            :key="key"
                            @click="formData.branch = $event.target.innerText"
                        >
                            {{ branch }}
                        </li>
                    </ul>
                </div>

                <input
                    class="return-call__field"
                    :placeholder="$texts.FIO"
                    @input="formData.fio = $event.target.value"
                />

                <input
                    v-maska
                    class="return-call__field"
                    :placeholder="$texts.phoneNumber"
                    data-maska="+7 ### ###-##-##"
                    data-maska-eager
                    @input="formData.phone = $event.target.value"
                />
            </div>

            <div class="return-call__bottom">
                <button class="return-call__send animate-red" @click="sendData">
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
        sendData() {
            this.successShown = !this.successShown;
            this.returnCallShown = false;
            this.clearData();
            console.log(this.formData);
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
        clearData() {
            for (const key in this.formData) {
                this.formData[key] = '';
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
