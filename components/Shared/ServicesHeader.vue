<template>
    <header class="header">
        <SharedBreadCrumbs class="breadcrumbs" />
        <h1>{{ title }}</h1>
        <h5>{{ subtitle }}</h5>
        <div class="header__btns-container">
            <button class="animate-red" @click="calculatorPopupShown = true">
                {{ $texts.calculate }}
            </button>
            <button class="header__btn_gray" @click="scrollDown">
                {{ $texts.details }}
                <img src="@/assets/icons/expand.svg" alt="" />
            </button>
        </div>
    </header>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
            required: true,
        },
    },
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
                    block: 'center',
                    inline: 'center',
                });
            }
        },
    },
};
</script>

<style
    lang="scss"
    src="@/assets/scss/components/Shared/ServicesHeader.scss"
    scoped
></style>
