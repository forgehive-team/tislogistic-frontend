<template>
    <header class="header">
        <SharedBreadCrumbs class="breadcrumbs" />
        <h1>{{ $texts.projectLogisticsTitle }}</h1>
        <h5>{{ $texts.projectLogisticsNote }}</h5>
        <div class="header__btns-container">
            <button class="animate-red">
                {{ $texts.calculate }}
            </button>
            <button class="header__btn_gray">
                {{ $texts.details }}
                <img src="@/assets/icons/expand.svg" />
            </button>
        </div>
    </header>
</template>

<script>
export default {};
</script>

<style
    src="@/assets/scss/components/ProjectLogistics/MainHeader.scss"
    lang="scss"
    scoped
></style>
