<template>
    <section>
        <SharedBreadCrumbs class="breadcrumbs" />
        <div class="links-container">
            <a class="link" :class="{ 'link-current': isNews }">{{
                $texts.news
            }}</a>
            <a class="link" :class="{ 'link-current': !isNews }">{{
                $texts.projects
            }}</a>
        </div>
        <h1>{{ $texts.news }}</h1>
        <div class="cards-container">
            <NewsMainCard
                v-for="(item, i) in data"
                :key="i"
                :title="item.title"
                :text="item.text"
                :date="item.date"
                :url="currentRoute + '/' + item.slug"
            />
        </div>
        <div class="btn-container">
            <button class="go-up-btn" @click="scrollToTop">
                {{ $texts.goUp }}
                <img src="@/assets/icons/expand.svg" />
            </button>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
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
