<script setup lang="ts">
import { coastalFreightAdvantages } from '~~/config/coastalFreightList';
const { $texts } = useNuxtApp() as any;
</script>
<template>
    <div class="advantages">
        <h2>{{ $texts.coastalFreightAdvantages }}</h2>
        <div class="container">
            <HomeCardsItem
                v-for="(advantage, i) in coastalFreightAdvantages"
                :key="i"
                :title="advantage.title"
                :text="advantage.text"
                class="_car"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
h2 {
    white-space: pre-wrap;
}
.container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 32px;
}
h3 {
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    margin-right: auto;
}
p {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: var(--text-secondary);
    margin-top: 16px;
    margin-right: auto;
}
@media (min-width: $tablet-breakpoint) {
    h3 {
        line-height: 25px;
    }
}
@media (min-width: $desktop-breakpoint) {
    h2 {
        line-height: 36px;
    }
    .container {
        flex-direction: row;
    }
}
</style>
