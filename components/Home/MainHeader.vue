<!-- eslint-disable vue/no-v-html -->
<template>
    <header class="main-header">
        <h1 class="main-header__header">
            {{ $texts.homeHeader }}
            <br class="mobile-tablet-only" />
            <span>{{ $texts.companyName }}</span>
        </h1>
        <h4 class="main-header__subheader" v-html="$texts.homeSubheader"></h4>
        <HomeLinkUnderline class="desktop-only">{{
            $texts.learnMore
        }}</HomeLinkUnderline>
    </header>
</template>

<script></script>

<style
    src="@/assets/scss/components/Home/MainHeader.scss"
    lang="scss"
    scoped
></style>
