<template>
    <header class="header">
        <SharedBreadCrumbs class="breadcrumbs" />
        <h1>{{ title }}</h1>
        <h5>{{ subtitle }}</h5>
        <div class="header__btns-container">
            <button
                v-if="!formless"
                class="animate-red"
                @click="calculatorPopupShown = true"
            >
                {{ $texts.calculate }}
            </button>
            <button class="header__btn_gray" @click="scrollDown">
                {{ $texts.details }}
                <IconsExpandArrow />
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
        formless: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    setup() {
        const calculatorPopupShown = useCalculatorPopup();
        const { $texts } = useNuxtApp();
        console.log($texts);
        return {
            calculatorPopupShown,
        };
    },
    methods: {
        scrollDown() {
            if (process.client) {
                const target = document.getElementById('scroll-target');
                const yOffset = -100;
                const y =
                    target.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
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
