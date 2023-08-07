<template>
    <div class="company-info">
        <h2>{{ $texts.about }}</h2>
        <div class="cards-container">
            <div class="info-card" v-html="$texts.companyDescription"></div>
            <IconsAboutMap />
            <div class="info-card" v-html="$texts.companyLocation"></div>
        </div>
        <SharedKeyIndicators class="indicators" :in-services="false" />
    </div>
</template>

<style
    src="@/assets/scss/components/About/CompanyInfo.scss"
    lang="scss"
></style>
