<template>
    <div>
        <h2>{{ $texts.howToOrder }}</h2>
        <ul class="container">
            <template v-for="(step, i) in orderSteps">
                <li>
                    <nuxt-img
                        :src="step.img"
                        :alt="step.label"
                        class="icon-gray"
                    ></nuxt-img>

                    <strong>{{ step.label }}</strong>
                    <p>{{ step.text }}</p>
                </li>
                <IconsCooperationSchemeStepArrow v-if="i < 3" class="arrow" />
            </template>
        </ul>
    </div>
</template>

<script setup>
import { orderSteps } from '~~/config/parallelImportList';
</script>

<style lang="scss" scoped>
ul {
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
    margin-top: 32px;
}
.arrow {
    align-self: center;
    transform: rotate(90deg);
}
img {
    width: 112px;
    align-self: center;
    margin-bottom: 20px;
}
li {
    display: flex;
    flex-direction: column;
    max-width: 286px;
}
p {
    color: var(--text-secondary);
    text-align: center;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 1%;
    margin-top: 4px;
}
strong {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 1.2%;

    color: var(--text-primary);
    text-align: center;
}

@media (min-width: $tablet-breakpoint) {
    ul {
        flex-direction: row;
        align-items: flex-start;
        gap: 0;
        justify-content: space-between;
    }
    .arrow {
        transform: unset;
        min-width: 22px;
        max-width: 22px;
        align-self: flex-start;
        margin-top: 10px;
    }
    img {
        width: 60px;
        margin-bottom: 12px;
    }
    p {
        font-size: 12px;
        line-height: 16px;
    }
    strong {
        font-size: 12px;
        line-height: 20px;
    }
    li {
        max-width: 149px;
        min-width: 136px;
    }
}

@media (min-width: $desktop-breakpoint) {
    ul {
        flex-direction: row;
        align-items: flex-start;
        gap: 0;
        justify-content: space-between;
    }
    .arrow {
        min-width: 40px;
        max-width: 40px;
        margin-top: 32px;
    }
    img {
        width: 112px;
        margin-bottom: 24px;
    }
    p,
    strong {
        font-size: 16px;
        line-height: 20px;
    }
    li {
        max-width: 236px;
        min-width: 236px;
    }
}
</style>
