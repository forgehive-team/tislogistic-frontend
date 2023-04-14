<template>
    <header class="containers-header">
        <SharedBreadCrumbs />
        <h1 class="main-header__header">
            {{ $texts.containersHeader }}
            <br class="mobile-tablet-only" />
            <span>{{ $texts.companyName }}</span>
        </h1>
        <div class="containers-header__btns">
            <button class="animate-red">
                {{ $texts.containersCalculate }}
            </button>
            <button class="animate-yellow-btn containers-header__btn_white">
                {{ $texts.contacts }}
            </button>
        </div>
    </header>
</template>

<script>
export default {};
</script>

<style
    src="@/assets/scss/components/Containers/MainHeader.scss"
    lang="scss"
    scoped
></style>
