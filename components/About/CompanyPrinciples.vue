<template>
    <div>
        <h2>{{ $texts.principles }}</h2>
        <div class="grid">
            <HomeCardsItem
                v-for="(item, i) in principles"
                :key="i"
                class="_title-yellow principle"
                :title="item.title"
                :text="item.description"
            />
        </div>
        <div class="ceo-container">
            <div
                class="photo-container tablet-desktop-only"
                :style="photo"
            ></div>
            <div class="text-container">
                <p class="quote">{{ $texts.ceoQuote }}</p>
                <div class="photo-container mobile-only" :style="photo"></div>
                <p class="name">{{ $texts.ceoName }}</p>
                <p class="ceo">{{ $texts.ceo }}</p>
            </div>
            <IconsCompanyLogo class="logo" />
        </div>
    </div>
</template>

<script setup>
const principles = [
    {
        title: 'Скорость',
        description:
            'собственный контейнерный парк значительно удешевляет и ускоряет перевозку',
    },
    {
        title: 'Экспертность',
        description:
            'этот способ отлично подходит в том случае, если необходимо комбинировать отправления',
    },
    {
        title: 'Надёжность',
        description:
            'грузы находятся не только на палубе судна, но и в трюме, что обеспечивает сохранность в холодное время года',
    },
];
const $img = useImage();
const imgUrl = $img('images/ceo.png');
const photo = `background-image: url('${imgUrl}')`;
</script>

<style
    src="@/assets/scss/components/About/CompanyPrinciples.scss"
    lang="scss"
    scoped
></style>
