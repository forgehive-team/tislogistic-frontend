<template>
    <div>
        <h2>{{ $texts.cargoCategories }}</h2>
        <div class="cargo-types__container">
            <div v-for="(cargo, i) in list" :key="i" class="cargo-type">
                <nuxt-img
                    :src="cargo.img"
                    :alt="cargo.alt"
                    class="icon-gray"
                ></nuxt-img>

                <p>{{ cargo.text }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { importCategories as list } from '~~/config/parallelImportList';
const { $texts } = useNuxtApp() as any;
</script>

<style scoped lang="scss">
img {
    max-width: 48px;
    align-self: flex-start;
}
h2 {
    font-size: 24px;
    line-height: 28px;
}
.cargo-types__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 32px;
}
.cargo-type {
    display: flex;
    gap: 24px;
    padding: 20px 24px;
    border-radius: 16px;
    background: var(--main-primary);
}
p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--text-primary);
}

@media (min-width: $tablet-breakpoint) {
    h2 {
        font-size: 32px;
        line-height: 40px;
    }
    p {
        letter-spacing: 1.2%;
        text-align: center;
    }
    .cargo-type {
        flex-direction: column;
        grid-column: span 2;
    }
    .cargo-type:nth-child(-n + 4) {
        grid-column: span 3;
    }
    .cargo-types__container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        margin-top: 40px;
    }
    img {
        align-self: center;
        max-width: 80px;
        width: 80px;
    }
}
@media (min-width: $desktop-breakpoint) {
    h2 {
        font-weight: 700;
        font-size: 36px;
        line-height: 36px;
    }
    .cargo-types__container {
        margin-top: 42px;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }

    .cargo-type {
        width: 100%;
        align-items: center;
        grid-column: span 1 !important;
    }
}
</style>
