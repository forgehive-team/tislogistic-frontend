<template>
    <div>
        <h2>{{ $texts.internationalTradeTitle }}</h2>
        <div class="grid">
            <div v-for="(item, i) in list" :key="i" class="item">
                <nuxt-img :src="item.img" alt="" class="icon-gray" />
                <p>{{ item.label }}</p>
            </div>
        </div>
        <p class="footnote">{{ $texts.parallelImportDef }}</p>
    </div>
</template>

<script setup>
const imgBasePath = 'images/international_trade/';
const list = [
    {
        label: 'Предоставление возможности кредитования на выгодных условиях без лишних документов для постоянных клиентов',
        img: imgBasePath + 'credit.svg',
    },
    {
        label: 'Приобретение товара на любом международном рынке, включая параллельный импорт*',
        img: imgBasePath + 'any_market.svg',
    },
    {
        label: 'Полную таможенную очистку, как в стране отправителя, так и в стране получателя ',
        img: imgBasePath + 'custom_clearance.svg',
    },
    {
        label: 'Обход \nмеждународных \nсанкций',
        img: imgBasePath + 'sanctions.svg',
    },
];
</script>

<style
    src="@/assets/scss/components/ForeignActivity/InternationalTrade.scss"
    lang="scss"
    scoped
></style>
