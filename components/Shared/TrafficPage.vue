<template>
    <div class="main">
        <ClientOnly fallback-tag="span" fallback="Loading the map...">
            <div id="gist"></div>
            <div id="gist1"></div>
        </ClientOnly>
        <div class="legend">
            <span v-for="(item, i) in legendItems" :key="i">
                <svg
                    width="11"
                    height="22"
                    viewBox="0 0 11 22"
                    :fill="item.color"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0.5 10.2744C0.5 7.79285 1.30262 5.35711 2.82346 3.22331L4.79963 0.450668C5.22791 -0.150222 6.27209 -0.150223 6.70037 0.450668L8.67654 3.22331C10.1974 5.35711 11 7.79285 11 10.2744V21.0775C11 21.8604 9.90162 22.286 9.1828 21.7818L6.46194 19.873C6.05053 19.5844 5.44947 19.5844 5.03806 19.873L2.3172 21.7818C1.59838 22.286 0.5 21.8604 0.5 21.0775L0.5 10.2744Z"
                    />
                </svg>
                {{ item.title }}
            </span>
        </div>
    </div>
</template>

<script setup>
/* eslint-disable no-useless-escape */
const { $texts } = useNuxtApp();
onMounted(async () => {
    if (process.client) {
        const clientImport = await import('postscribe');
        const postscribe = clientImport.default;
        postscribe(
            '#gist',
            `<script type="text/javascript">
	width='100%';
	height='450';
	border='1';
	shownames='false';
	latitude='37.4460';
	longitude='24.9467';
	zoom='9';
	maptype='1';
	trackvessel='0';
	fleet='';
<\/script>`
        );
        postscribe(
            '#gist1',
            `<script type="text/javascript" src="http://www.marinetraffic.com/js/embed.js"><\/script>`
        );
    }
});

const legendItems = [
    {
        title: $texts.passengerShips,
        color: '#3498db',
    },
    {
        title: $texts.cargoShips,
        color: '#27ae60',
    },
    {
        title: $texts.tankers,
        color: '#d35400',
    },
    {
        title: $texts.atAnchor,
        color: 'yellow',
    },
];
</script>

<style src="@/assets/scss/pages/Traffic.scss" lang="scss" scoped></style>
