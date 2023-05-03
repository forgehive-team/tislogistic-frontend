<template>
    <header class="header">
        <SharedBreadCrumbs />
        <h1 class="header__title">
            {{ $texts.transportCompany }}
            <span>{{ $texts.companyName }}</span>
            {{ $texts.servicesTitle }}
        </h1>
        <p class="header__note">{{ $texts.servicesNote }}</p>
    </header>
</template>
<style
    src="@/assets/scss/components/Services/MainHeader.scss"
    lang="scss"
    scoped
></style>
