<template>
    <div>
        <h2 class="component-header">
            {{ $texts.consolidatedAdvantgesTitle }}
        </h2>

        <ul>
            <li v-for="(item, i) in list" :key="i">
                <nuxt-img
                    :src="item.img"
                    :alt="item.alt"
                    class="icon-gray"
                ></nuxt-img>
                <div class="text-container">
                    <strong>{{ item.title }}</strong>
                    <p>{{ item.text }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
const { $texts } = useNuxtApp() as any;

import { consolidatedCargoAdvantages as list } from '~~/config/consolidatedCargoList';
</script>

<style lang="scss" scoped>
ul {
    display: flex;
    flex-direction: column;
    gap: 40px;
}
li {
    width: 100%;
    display: flex;
    gap: 24px;
    img {
        align-self: flex-start;
        max-width: 48px;
    }
    p,
    strong {
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 1%;
    }
    strong {
        font-weight: 700;
        color: var(--text-primary);
    }
    p {
        font-weight: 400;
        color: var(--text-secondary);
    }
}

@media (min-width: $tablet-breakpoint) {
    ul {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: auto auto;
        gap: 40px;
    }

    li {
        grid-column: span 2;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
            align-self: center;
        }
        p,
        strong {
            text-align: center !important;
        }
    }

    .text-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
    }

    li:nth-child(4) {
        grid-column: 2 / span 2;
    }
    p {
        margin-top: 4px;
    }
}

@media (min-width: $desktop-breakpoint) {
    .text-container {
        p,
        strong {
            max-width: 350px;
            font-size: 20px !important;
        }
    }

    li {
        img {
            max-width: none;
        }
    }
}
</style>
