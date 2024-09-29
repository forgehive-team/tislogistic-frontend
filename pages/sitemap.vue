<template>
    <div>
        <section>
            <div class="bg white-theme-only gradient-bg"></div>
            <div>
                <SharedBreadCrumbs class="breadcrumbs" />
                <h1>Карта сайта</h1>
                <div class="sitemap">
                    <div v-for="(sitemap, i) in routesList" :key="i">
                        <ul v-for="route in sitemap" :key="route.label">
                            <li>
                                <NuxtLink v-if="!route.client" :to="route.url"
                                    >{{ route.label }}
                                </NuxtLink>
                                <a v-else :href="route.url">{{
                                    route.label
                                }}</a>
                                <ul
                                    v-if="route.subroutes.length"
                                    class="subroutes"
                                >
                                    <li
                                        v-for="subroute in route.subroutes"
                                        :key="subroute.label"
                                    >
                                        <NuxtLink :to="subroute.url">
                                            {{ subroute.label }}
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <SharedGoUp />
        </section>
    </div>
</template>

<script setup>
import { servicesList, infoList } from '~~/config/servicesList';

const { $texts } = useNuxtApp();
const { newsApiBase } = useRuntimeConfig();

const urlNews = newsApiBase + 'news';
const { data: dataNews } = await useFetch(urlNews, {
    key: 'news',
});
const urlProjects = newsApiBase + 'projects';

const { data: dataProjects } = await useFetch(urlProjects, {
    key: 'projects',
});

definePageMeta({
    breadcrumbTitle: 'Карта сайтa',
});

useServerSeoMeta({
    title: 'Карта сайта',
    keywords: $texts.seoKeywordsBase,
});

const parsedSitemap = [
    {
        label: $texts.homePage,
        url: '/',
        subroutes: [],
    },
    {
        label: $texts.about,
        url: '/about',
        subroutes: [],
    },
    {
        label: $texts.contacts,
        url: '/contacts',
        subroutes: [],
    },
    {
        label: $texts.news,
        url: '/news',
        subroutes: dataNews.value.map((el) => ({
            label: el.title,
            url: `/news/${el.slug}`,
        })),
    },
    {
        label: $texts.projects,
        url: '/projects',
        subroutes: dataProjects.value.map((el) => ({
            label: el.title,
            url: `/news/${el.slug}`,
        })),
    },
    {
        label: $texts.services,
        url: '/services',
        subroutes: servicesList
            .filter((el) => !el.disabled)
            .map((el) => ({ label: el.title, url: el.to })),
    },
    {
        label: $texts.info,
        url: '#',
        subroutes: infoList.map((el) => ({ label: el.title, url: el.to })),
    },
];

const routesRight = parsedSitemap.slice(-2);
const routesLeft = parsedSitemap.slice(0, 5);

const routesList = [routesLeft, routesRight];
</script>

<style src="@/assets/scss/pages/Sitemap.scss" lang="scss" scoped></style>
