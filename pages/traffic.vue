<template>
    <div>
        <section>
            <div class="bg gradient-bg white-theme-only news-bg"></div>
            <div>
                <SharedBreadCrumbs class="breadcrumbs" />
                <div class="top">
                    <h1>Позиция и движение судов</h1>
                    <p>
                        Комплексное предоставление услуг, транспортировка любых
                        грузов на дальние расстояния, гарантированное качество
                        услуги и тщательный контроль на каждом этапе следования
                        контейнера, платформы или вагона — эти преимущества
                        заставляют наших Клиентов пользоваться именно нашими
                        услугами.
                    </p>
                </div>

                <SharedTrafficPage />
                <div class="bottom">
                    <SharedServicesLinks title="Услуги" />
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const { $texts } = useNuxtApp();
definePageMeta({
    breadcrumbTitle: 'Позиция и движение судов',
});
useServerSeoMeta({
    title: 'Позиция и движение судов',
    description: $texts.seoHomeDescription,
    ogDescription: $texts.seoHomeDescription,
    keywords: $texts.seoKeywordsBase,
});
</script>
<style src="@/assets/scss/pages/Traffic.scss" lang="scss" scoped></style>
