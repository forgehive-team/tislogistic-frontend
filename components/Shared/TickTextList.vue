<template>
    <div>
        <h2 class="component-header">{{ title }}</h2>
        <ul>
            <li v-for="item in items" :key="item.id">
                <nuxt-img src="images/advantages_icons/standard.svg" alt="" />
                <p class="step">{{ item.text }}</p>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    items: Array<{ text: string; id: number }>;
    title: string;
}>();
</script>

<style scoped lang="scss">
ul {
    display: flex;
    flex-direction: column;
    gap: 24px;
}
li {
    display: flex;
    gap: 16px;
}

p {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: var(--text-secondary);
    white-space: pre-wrap;
}
img {
    width: 40px;
    filter: brightness(0) saturate(100%) invert(82%) sepia(40%) saturate(1258%)
        hue-rotate(332deg) brightness(105%) contrast(89%);

    height: fit-content;
    align-self: flex-start;
}
@media (min-width: $tablet-breakpoint) {
    ul {
        column-gap: 40px;
        row-gap: 24px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-flow: row;
        grid-template-rows: auto auto auto;
    }
}
@media (min-width: $desktop-breakpoint) {
    ul {
        column-gap: 60px;
        row-gap: 48px;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto auto;
    }
    p {
        font-size: 20px;
        line-height: 24px;
    }
}
</style>
