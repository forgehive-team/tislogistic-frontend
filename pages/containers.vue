<template>
    <div>
        <section class="containers-main">
            <div :style="background" class="containers-bg"></div>
            <ContainersMainHeader />
        </section>
        <section class="containers-list">
            <ContainersStatsList />
        </section>
        <section class="containers-card">
            <SharedConclusionCard :seo-alt="$texts.seoConclusionContainers" />
        </section>
    </div>
</template>

<script>
export default {
    setup() {
        const { $texts } = useNuxtApp();
        definePageMeta({
            breadcrumbTitle: 'Классификация контейнеров',
        });
        useServerSeoMeta({
            title: $texts.seoTitleContainers,
            ogTitle: $texts.seoTitleContainers,
            description: $texts.seoDescription,
            ogDescription: $texts.seoDescription,
            keywords: $texts.seoKeywords,
        });
    },
    computed: {
        background() {
            const $img = useImage();
            const imgUrl = $img('images/containers_background.jpg', {
                format: 'webp',
                preload: true,
                sizes: 'xxl:1512',
                quality: 100,
            });
            return {
                backgroundImage: `url('${imgUrl}')`,
            };
        },
    },
};
</script>

<style src="@/assets/scss/pages/Containers.scss" lang="scss" scoped></style>
