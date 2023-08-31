<template>
    <div class="ceo-container">
        <div class="photo-container tablet-desktop-only" :style="photo"></div>
        <div class="text-container">
            <p class="quote">{{ $texts.ceoQuote }}</p>
            <div class="photo-container mobile-only" :style="photo"></div>
            <p class="name">{{ $texts.ceoName }}</p>
            <p class="ceo">{{ $texts.ceo }}</p>
        </div>
        <IconsCompanyLogo class="logo" />
    </div>
</template>

<script setup>
const $img = useImage();
const imgUrl = $img('images/ceo.png');
const photo = `background-image: url('${imgUrl}')`;
</script>

<style
    src="@/assets/scss/components/About/CompanyPrinciples.scss"
    lang="scss"
    scoped
></style>
