<template>
    <div>
        <h2>{{ $texts.coastalFeatures }}</h2>
        <div class="container">
            <IconsCoastalMap
                class="bg-map"
                :alt="$texts.coastalShipping + ' от' + $texts.companyNameSeo"
            />
            <strong>
                {{ $texts.keyPorts }}
            </strong>
            <p class="yellow-inside" v-html="$texts.coastalRegionsHtml"></p>
            <h3>
                {{ $texts.coastalAvailableDestinations }}
            </h3>
            <ul>
                <li
                    v-for="(option, key) in coastalFreightDestinations"
                    :key="key"
                >
                    <span v-if="option.title">{{ option.title }}</span>
                    {{ option.text }}
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup lang="ts">
import { coastalFreightDestinations } from '~~/config/coastalFreightList';
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
    box-shadow: 0px 2px 4px 0px #00000003;
}
h2 {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 32px;
    z-index: 2;
}
strong {
    color: var(--text-primary);
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    display: inline-block;
    letter-spacing: 1%;
    margin-bottom: 16px;
    z-index: 2;
    position: relative;
}
p {
    color: var(--text-primary);
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 1%;
    z-index: 2;
    position: relative;
}
h3 {
    letter-spacing: 1%;
    margin-top: 230px;
    margin-bottom: 16px;
    z-index: 2;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    z-index: 2;
    position: relative;
}
ul {
    z-index: 2;
    all: revert;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    padding-left: 26px;
    padding-inline-start: 26px;
    list-style-type: none;
}
li {
    all: revert;
    font-size: 14px;
    line-height: 24px;
    padding-left: 10px;
    position: relative;
    color: var(--text-primary);
    &::before {
        content: '';
        position: absolute;
        height: 4px;
        width: 4px;
        border-radius: 4px;
        background: $yellow;
        left: -15px;
        top: calc(50% - 2px);
    }
    span {
        font-weight: 600;
    }
}
.bg-map {
    position: absolute;
    top: 215px;
    height: 230px;
    width: auto;
    right: 0;
    z-index: -1;
    fill: var(--coastal-map);
    color: var(--map-text);
}

@media (min-width: $tablet-breakpoint) {
    strong {
        font-weight: 600px;
        font-size: 24px;
        line-height: 29px;
    }
    p {
        font-size: 16px;
        line-height: 24px;
    }
    h2 {
        font-size: 32px;
        line-height: 40px;
        margin-bottom: 32px;
    }
    h3 {
        font-size: 24px;
        line-height: 24px;
        margin-top: 24px;
    }
    ul {
        margin-bottom: 280px;
        width: 340px;
    }
    li {
        font-size: 16px;
        line-height: 24px;
    }
    .bg-map {
        bottom: 0;
        height: unset;
        right: 0;
    }
}
@media (min-width: $desktop-breakpoint) {
    .container {
        padding: 32px 40px;
    }
    strong {
        white-space: pre-wrap;
    }
    p {
        width: 506px;
    }
    ul {
        width: 600px;
        margin-bottom: 0;
    }
    h2 {
        font-size: 36px;
        line-height: 40px;
    }
    h3 {
        margin-top: 40px;
    }
    .bg-map {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    li {
        line-height: 30px;
    }
}
</style>
