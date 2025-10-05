<template>
    <div>
        <h2 class="component-header">{{ $texts.ourPossibilities }}</h2>
        <div class="container">
            <IconsConsolidatedCargoMap class="bg-map" alt="" />

            <ul>
                <li v-for="item in items" :key="item.id">
                    <nuxt-img
                        class="tick"
                        src="images/advantages_icons/standard.svg"
                        alt=""
                    />
                    <p class="step">{{ item.text }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup lang="ts">
import { possibilitiesTexts as items } from '~~/config/consolidatedCargoList';
const { $texts } = useNuxtApp() as any;
</script>

<style lang="scss" scoped>
.container {
    position: relative;
    background: var(--main-primary);
    padding: 24px;
    border-radius: 16px;
    overflow: hidden;
    z-index: -1;
}

.bg-map {
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%) scale(110%);
    z-index: -1;
    // fill: var(--coastal-map);
    color: var(--map-text);
}

ul {
    margin-top: 390px;
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
}
.tick {
    width: 40px;
    filter: brightness(0) saturate(100%) invert(82%) sepia(40%) saturate(1258%)
        hue-rotate(332deg) brightness(105%) contrast(89%);

    height: fit-content;
    align-self: flex-start;
}
@media (min-width: $tablet-breakpoint) {
    .bg-map {
        top: 0px;
        left: 0px;
        right: 0px;
        transform: unset;
        z-index: -1;
        // fill: var(--coastal-map);
        color: var(--map-text);
    }
    li {
        align-items: center;
    }

    ul {
        margin-top: 412px;
    }
}
@media (min-width: $desktop-breakpoint) {
    ul {
        margin-top: 0;
        margin-left: auto;
        max-width: 410px;
        gap: 32px;
    }

    p {
        font-size: 20px;
        line-height: 24px;
    }
    .bg-map {
        bottom: 0;
    }
    .container {
        padding: 60px;
    }
}
</style>
