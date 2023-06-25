<template>
    <section>
        <div :style="background" class="bg news-bg"></div>
        <SharedBreadCrumbs class="breadcrumbs" />
        <div class="links-container">
            <NuxtLink
                to="/news"
                class="link"
                :class="{ 'link-current': isNews }"
                >{{ $texts.news }}</NuxtLink
            >
            <NuxtLink
                to="/projects"
                class="link"
                :class="{ 'link-current': !isNews }"
                >{{ $texts.projects }}</NuxtLink
            >
        </div>

        <div v-if="pending"></div>
        <!-- add loading if needed -->
        <template v-else>
            <div class="cards-container">
                <NewsMainCard
                    v-for="(item, i) in data"
                    :key="i"
                    :title="item.title"
                    :text="item.short_description"
                    :date="item.published_at"
                    :url="currentRoute + '/' + item.slug"
                    :img="item.preview_image"
                />
            </div>
            <div class="btn-container">
                <button class="go-up-btn" @click="scrollToTop">
                    {{ $texts.goUp }}
                    <img src="@/assets/icons/expand.svg" />
                </button>
            </div>
        </template>
    </section>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            required: true,
        },
        pending: {
            type: Boolean,
            required: true,
        },
    },
    setup() {
        const route = useRoute();
        const currentRoute = route.fullPath;
        return {
            currentRoute,
        };
    },
    computed: {
        isNews() {
            return this.currentRoute === '/news';
        },
        title() {
            const { $texts } = useNuxtApp();
            return this.isNews ? $texts.news : $texts.projects;
        },
        background() {
            const $img = useImage();
            const imgUrl = $img('images/news_background.jpg', {
                format: 'webp',
                preload: true,
                quality: '100',
            });
            return {
                backgroundImage: `url('${imgUrl}')`,
            };
        },
    },
    methods: {
        scrollToTop() {
            if (process.client) {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth',
                });
            }
        },
    },
};
</script>

<style
    src="@/assets/scss/components/News/NewsMain.scss"
    lang="scss"
    scoped
></style>
