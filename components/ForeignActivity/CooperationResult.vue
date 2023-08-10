<template>
    <div>
        <h2>{{ $texts.cooperationResultTitle }}</h2>
        <div class="top-container">
            <div class="icon-wrapper">
                <IconsCooperationSchemeCargoBox />
                <p class="t1">покупаем товар</p>
            </div>
            <IconsCooperationSchemeStepArrow class="arrow" />
            <div class="icon-wrapper">
                <IconsCooperationSchemeSecureChain />
                <p class="t2">
                    Выстраиваем безопасную, быструю и выгодную логистическую
                    цепочку из любой точки мира
                </p>
            </div>
            <IconsCooperationSchemeStepArrow class="arrow extend" />
            <div class="icon-wrapper">
                <IconsCooperationSchemeCustomClearance />
                <p class="t3">Проводим таможенную очистку</p>
            </div>
            <IconsCooperationSchemeStepArrow class="arrow" />
            <div class="icon-wrapper">
                <IconsCooperationSchemeCargoLoad />
                <p class="t4">Отгружаем товар на ваш склад</p>
            </div>
        </div>
        <div class="middle-container">
            <IconsCooperationSchemeSumLine />
        </div>
    </div>
</template>

<script setup></script>

<style
    src="@/assets/scss/components/ForeignActivity/CooperationResult.scss"
    lang="scss"
    scoped
></style>
