<template>
    <aside class="sidebar mobile-tablet-only">
        <div class="sidebar__container">
            <div class="sidebar__top">
                <NuxtLink class="sidebar__logo" to="/" @click="toggleSidebar">
                    <IconsCompanyLogo
                        :alt="$texts.homePage + $texts.companyNameSeo"
                    />
                </NuxtLink>
                <button class="sidebar__close" @click="toggleSidebar">
                    <img
                        src="../../assets/icons/close.svg"
                        :alt="$texts.close"
                    />
                </button>
            </div>
            <div class="sidebar__theme-container">
                <SharedThemeSwitch />
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
                    <IconsPhoneIcon />
                    {{ $texts.companyPhone }}
                </a>
                <a href="mailto:info@tislogistic.ru">
                    <IconsEmailIcon />
                    {{ $texts.companyEmail }}
                </a>
            </div>
        </div>
    </aside>
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
