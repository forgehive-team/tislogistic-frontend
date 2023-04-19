<template>
    <main>
        <section class="containers-main">
            <div :style="background" class="containers-bg"></div>
            <ContainersMainHeader />
        </section>
        <section class="containers-list">
            <ContainersStatsList />
        </section>
        <section class="containers-card">
            <SharedConclusionCard />
        </section>
    </main>
</template>

<script>
export default {
    setup() {
        definePageMeta({
            breadcrumbTitle: 'Классификация контейнеров',
        });
    },
    computed: {
        bgImg() {
            const $img = useImage();
            const imgUrl = $img('images/containers_background.jpg', {
                format: 'webp',
                preload: true,
                sizes: 'xxl:1512',
                quality: 100,
            });
            return imgUrl;
        },
        background() {
            const imgUrl = this.bgImg;
            return {
                backgroundImage: `url('${imgUrl}')`,
            };
        },
    },
};
</script>

<style src="@/assets/scss/pages/Containers.scss" lang="scss" scoped></style>
