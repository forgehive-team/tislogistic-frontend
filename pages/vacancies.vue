<template>
    <div>
        <section>
            <div :style="bgImg" class="bg vacancies-bg"></div>
            <div>
                <SharedBreadCrumbs />
                <h1>{{ $texts.vacancies }}</h1>
                <p>
                    Присоединяйся <span>к команде профессионалов </span>
                    <strong>ТИС ЛОДЖИСТИК</strong>
                </p>
            </div>
        </section>
        <section>
            <VacanciesWhyUs />
        </section>
        <section>
            <div class="open-vacancies">
                <h2>{{ $texts.openVacancies }}</h2>
                <a
                    href="https://novosibirsk.hh.ru/employer/171487?hhtmFrom=vacancy"
                    target="_blank"
                    >Перейти к списку <span>вакансий</span>
                </a>
            </div>
        </section>
        <section>
            <div class="banner">
                <strong>
                    {{ $texts.vacanciesBanner1 }}
                    <span>{{ $texts.vacanciesBanner2 }}</span>
                </strong>
            </div>
        </section>
        <section>
            <VacanciesCvForm />
        </section>
    </div>
</template>

<script setup>
const { $texts } = useNuxtApp();
definePageMeta({
    breadcrumbTitle: 'Вакансии',
});
useServerSeoMeta({
    title: $texts.vacancies,
    ogTitle: $texts.vacancies,
    // description: $texts.aboutSubtitle,
    // ogDescription: $texts.aboutSubtitle,
    keywords: $texts.seoHomeKeywords + $texts.seoKeywordsBase,
});

const $img = useImage();
const imgUrl = $img('images/vacancies_background.png', {
    format: 'webp',
    preload: true,
    quality: '100',
});
const bgImg = `background-image: url('${imgUrl}')`;
</script>

<style src="@/assets/scss/pages/Vacancies.scss" lang="scss" scoped></style>
