<template>
    <div>
        <h2>{{ $texts.ourAdvantages }}</h2>
        <div class="container container-top">
            <div
                v-for="item in multimodalAdvantages.slice(0, 3)"
                :key="item.title"
                class="item"
            >
                <h3>{{ item.title }}</h3>
                <div>{{ item.text }}</div>
            </div>
        </div>
        <div class="img-container">
            <IconsMultimodalSchemesConnectMobile />
            <IconsMultimodalSchemesConnectTablet />
            <IconsMultimodalSchemesConnectDesktop />
        </div>
        <div class="container container-bottom">
            <div
                v-for="item in multimodalAdvantages.slice(-2)"
                :key="item.title"
                class="item"
            >
                <h3>{{ item.title }}</h3>
                <div v-html="item.text"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { multimodalAdvantages } from '~~/config/multimodalList';
</script>

<style
    src="@/assets/scss/components/MultimodalnyePerevozki/MultimodalAdvantages.scss"
    lang="scss"
    scoped
></style>
