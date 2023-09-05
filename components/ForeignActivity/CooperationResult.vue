<template>
    <div>
        <h2>{{ $texts.cooperationResultTitle }}</h2>
        <div class="top-container">
            <div class="icon-wrapper">
                <IconsCooperationSchemeCargoBox />
                <p class="t1">{{ $texts.buyGoods }}</p>
            </div>
            <IconsCooperationSchemeStepArrow class="arrow" />
            <div class="icon-wrapper">
                <IconsCooperationSchemeSecureChain />
                <p class="t2">
                    {{ $texts.buildChain }}
                </p>
            </div>
            <IconsCooperationSchemeStepArrow class="arrow extend" />
            <div class="icon-wrapper">
                <IconsCooperationSchemeCustomClearance />
                <p class="t3">{{ $texts.doCustomClearance }}</p>
            </div>
            <IconsCooperationSchemeStepArrow class="arrow" />
            <div class="icon-wrapper">
                <IconsCooperationSchemeCargoLoad />
                <p class="t4">{{ $texts.unloadCargo }}</p>
            </div>
        </div>
        <div class="middle-container">
            <IconsCooperationSchemeSumLine />
        </div>
        <div class="bottom-container">
            <IconsCooperationSchemeThePayment />
            <p>{{ $texts.paymentAfter }}</p>
        </div>
    </div>
</template>

<script setup></script>

<style
    src="@/assets/scss/components/ForeignActivity/CooperationResult.scss"
    lang="scss"
    scoped
></style>
