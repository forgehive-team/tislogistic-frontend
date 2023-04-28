<template>
    <div class="sidebar mobile-tablet-only">
        <div class="sidebar__container">
            <div class="sidebar__top">
                <div class="navbar__logo-container sidebar__logo">
                    <img
                        src="../../assets/icons/logoBlack.svg"
                        class="navbar__logo"
                    />
                </div>
                <button class="sidebar__close" @click="toggleSidebar">
                    <img src="../../assets/icons/close.svg" />
                </button>
            </div>
            <div class="sidebar__links">
                <NuxtLink
                    v-for="link in links"
                    :key="link.label"
                    :to="link.path"
                    class="sidebar__link"
                    @click="toggleSidebar"
                >
                    {{ link.label }}
                </NuxtLink>
            </div>
            <div class="sidebar__buttons">
                <button
                    class="navbar__btn navbar__btn_red sidebar__btn"
                    @click="openCalculatorPopup"
                >
                    {{ $texts.calculateDelivery }}
                </button>
                <button
                    class="navbar__btn sidebar__btn"
                    @click="openReturnCall"
                >
                    {{ $texts.returnCall }}
                </button>
            </div>
            <div class="sidebar__footer">
                <a href="tel:8 (800) 234-80-70">
                    <img src="../../assets/icons/phone.svg" />
                    {{ $texts.companyPhone }}
                </a>
                <a href="mailto:info@tislogistic.ru">
                    <img src="../../assets/icons/email.svg" />
                    {{ $texts.companyEmail }}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        toggleSidebar: {
            type: Function,
            required: true,
        },
        links: {
            type: Object,
            required: true,
        },
    },
    setup() {
        const calculatorPopupShown = useCalculatorPopup();
        const returnCallShown = useReturnCallModal();
        return {
            calculatorPopupShown,
            returnCallShown,
        };
    },
    methods: {
        openCalculatorPopup() {
            this.toggleSidebar();
            this.calculatorPopupShown = true;
        },
        openReturnCall() {
            this.toggleSidebar();
            this.returnCallShown = true;
        },
    },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/Shared/NavBar.scss';
@import '@/assets/scss/components/Shared/SideBar.scss';
</style>
