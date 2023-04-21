<template>
    <header class="header">
        <SharedBreadCrumbs />
        <h1 class="header__title">
            {{ $texts.transportCompany }}
            <span>{{ $texts.companyName }}</span>
            {{ $texts.servicesTitle }}
        </h1>
        <h4 class="header__note">{{ $texts.servicesNote }}</h4>
    </header>
</template>
<style
    src="@/assets/scss/components/Services/MainHeader.scss"
    lang="scss"
    scoped
></style>
