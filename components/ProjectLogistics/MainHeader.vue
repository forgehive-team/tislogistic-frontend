<template>
    <header class="header">
        <SharedBreadCrumbs class="breadcrumbs" />
        <h1>{{ $texts.projectLogisticsTitle }}</h1>
        <h5>{{ $texts.projectLogisticsNote }}</h5>
        <div class="header__btns-container">
            <button class="animate-red" @click="calculatorPopupShown = true">
                {{ $texts.calculate }}
            </button>
            <button class="header__btn_gray" @click="scrollDown">
                {{ $texts.details }}
                <img src="@/assets/icons/expand.svg" />
            </button>
        </div>
    </header>
</template>

<script>
export default {
    setup() {
        const calculatorPopupShown = useCalculatorPopup();
        return {
            calculatorPopupShown,
        };
    },
    methods: {
        scrollDown() {
            if (process.client) {
                document.getElementById('scroll-target').scrollIntoView({
                    behavior: 'smooth',
                    inline: 'center',
                });
            }
        },
    },
};
</script>

<style
    src="@/assets/scss/components/ProjectLogistics/MainHeader.scss"
    lang="scss"
    scoped
></style>
