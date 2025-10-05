<template>
    <div class="calculator__back-blur">
        <h2>{{ $texts.cargoContactTitle }}</h2>
        <div class="content accent-inside underline-inside">
            <p v-html="$texts.consolatatedCargoContactsHTML"></p>
        </div>

        <IconsCompanyLogo class="logo" />
    </div>
</template>

<script setup lang="ts">
const { $texts } = useNuxtApp() as any;
</script>

<style
    lang="scss"
    src="@/assets/scss/components/Shared/DeliveryCalculator.scss"
    scoped
></style>

<style lang="scss" scoped>
.calculator__back-blur {
    padding: 20px 12px;
    min-height: 1px;
}

h2 {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
}

.content {
    background: var(--text-5);
    padding: 12px;
    padding-right: 24px;
    border-radius: 10px;
    margin-top: 20px;
}
p {
    color: var(--text-secondary);
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
}

@media (min-width: $tablet-breakpoint) {
    h2 {
        font-size: 32px;
        line-height: 40px;
        max-width: 466px;
    }

    .content {
        padding: 24px;
        margin-top: 24px;
    }

    p {
        font-size: 16px;
        line-height: 20px;
    }

    .calculator__back-blur {
        padding: 24px;
    }
}

@media (min-width: $desktop-breakpoint) {
    h2 {
        max-width: 716px;
    }

    .content {
        padding: 40px;
    }
    .calculator__back-blur {
        padding: 40px;
    }
    p {
        font-size: 20px;
        line-height: 24px;
        max-width: 808px;
    }
}
</style>
