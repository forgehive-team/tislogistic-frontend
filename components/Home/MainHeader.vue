<!-- eslint-disable vue/no-v-html -->
<template>
    <header class="main-header">
        <h1 class="main-header__header">
            {{ $texts.homeHeader }}
            <br class="mobile-tablet-only" />
            <span>{{ $texts.companyName }}</span>
        </h1>
        <p class="main-header__subheader" v-html="$texts.homeSubheader"></p>
        <HomeLinkUnderline class="desktop-only header__link" to="/about">{{
            $texts.learnMore
        }}</HomeLinkUnderline>
    </header>
</template>
<style
    src="@/assets/scss/components/Home/MainHeader.scss"
    lang="scss"
    scoped
></style>
