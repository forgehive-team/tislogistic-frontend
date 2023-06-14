<template>
    <div>
        <NewsMain :data="fakeData" />
    </div>
</template>

<script setup>
const { $texts } = useNuxtApp();
// declare endpoint here
// fetch here
definePageMeta({
    breadcrumbTitle: 'Новости',
});
useServerSeoMeta({
    title: $texts.news,
});
const fakeData = [
    {
        title: 'Наши возможности: доставка объемных грузов',
        text: 'Невозможное возможно — доставка негабаритных грузов с Тис Лоджистик',
        date: '06 сентября 2022',
        img: null,
        slug: '5',
    },
    {
        title: 'Наши возможности: доставка объемных грузов',
        text: 'Невозможное возможно — доставка негабаритных грузов с Тис Лоджистик',
        date: '06 сентября 2022',
        img: null,
        slug: '6',
    },
    {
        title: 'Наши возможности: доставка объемных грузов',
        text: 'Невозможное возможно — доставка негабаритных грузов с Тис Лоджистик',
        date: '06 сентября 2022',
        img: null,
        slug: '7',
    },
    {
        title: 'Наши возможности: доставка объемных грузов',
        text: 'Невозможное возможно — доставка негабаритных грузов с Тис Лоджистик',
        date: '06 сентября 2022',
        img: null,
        slug: '8',
    },
];
</script>

<style lang="scss" scoped></style>
