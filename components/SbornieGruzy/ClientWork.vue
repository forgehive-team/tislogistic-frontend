<template>
    <div>
        <h2 class="component-header">{{ $texts.coherentWorkWithClient }}</h2>
        <ul>
            <template v-for="(step, i) in clientSteps">
                <li>
                    <nuxt-img
                        :src="step.img"
                        alt=""
                        :class="{ 'icon-gray': i !== 0 && i !== 4 }"
                    ></nuxt-img>

                    <p>{{ step.text }}</p>
                </li>
                <IconsDashedLine v-if="i < 4" class="dash" />
            </template>
        </ul>
    </div>
</template>

<script setup>
import { clientSteps } from '~~/config/consolidatedCargoList';
</script>

<style lang="scss" scoped>
ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
}
.arrow {
    align-self: center;
    transform: rotate(90deg);
}
img {
    width: 112px;
    align-self: center;
}
li {
    display: flex;
    flex-direction: column;
}
p {
    color: var(--text-secondary);
    text-align: center;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 1%;
    margin-top: 12px;
    max-width: 236px;
}
.dash {
    transform: rotate(90deg);
}
@media (min-width: $tablet-breakpoint) {
    ul {
        flex-direction: row;
        gap: 0;
        justify-content: space-around;
        padding-bottom: 50px;
        overflow: visible;
    }
    li {
        position: relative;
    }
    li > img {
        width: 64px;
        height: auto;
    }
    p {
        font-size: 12px;
        line-height: 16px;
        position: absolute;
        width: 122px;
        left: 50%;
        transform: translateX(-50%);
        top: 70px;
        margin: 0;
    }
    .dash {
        transform: unset;
    }
}

@media (min-width: $desktop-breakpoint) {
    ul {
        padding-bottom: 40px;
        padding: 0 40px 40px;
    }

    li > img {
        width: unset;
    }
    p {
        font-size: 16px;
        line-height: 18px;
        top: 120px;
        width: 228px;
    }
}
</style>
