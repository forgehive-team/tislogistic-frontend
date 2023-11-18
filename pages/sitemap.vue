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
const { $texts } = useNuxtApp();

definePageMeta({
    breadcrumbTitle: 'Site Map',
});

useServerSeoMeta({
    title: 'Site Map',
    keywords: $texts.seoKeywordsBase,
});

const parsedSitemap = [
    {
        label: 'Home',
        url: '/',
        subroutes: [],
    },
    {
        label: 'About the company',
        url: '/about',
        subroutes: [],
    },
    {
        label: 'Classification of containers',
        url: '/containers',
        subroutes: [],
    },
    {
        label: 'Position and movement of vessels',
        url: '/traffic',
        subroutes: [],
        client: true,
    },
    {
        label: 'Projects',
        url: '/projects',
        subroutes: [
            {
                label: 'Our capability: Bulk delivery',
                url: '/projects/our-vehicles-delivery-obemnyh-gruzov',
            },
            {
                label: 'Dangerous paint',
                url: '/projects/opasnaya-kraska',
            },
            {
                label: 'Heavy equipment',
                url: '/projects/tyazheloe-development',
            },
            {
                label: 'Lamborghinis from Japan, or the difficulties of delivery under sanctions',
                url: '/projects/Lamborghini-from-japan-or-implications-in-sanctions',
            },
        ],
    },
    {
        label: 'News',
        url: '/news',
        subroutes: [
            {
                label: 'We will deliver your cargo from China in flexitank containers',
                url: `/news/let's-deliver-vas-gruz-from-kitai-in-flexi-tank-conteinerax`,
            },
            {
                label: 'Shipment of vehicles from China in containers without queues',
                url: '/news/new-service-fixing-other-cars-in-container-without-2-x-stuk',
            },
            {
                label: 'Zeon in Custody',
                url: '/news/burning-over-the-white-nose-after-the-name-zeon',
            },
        ],
    },
    {
        label: 'Privacy Policy',
        url: '/politics-confidentiality',
        subroutes: [],
    },
    {
        label: 'User Agreement',
        url: '/eula',
        subroutes: [],
    },
    {
        label: 'Customs clearance tariffs',
        url: '/tariffs-for-the-formation-of-ruins',
        subroutes: [],
    },
    {
        label: 'Website Map',
        url: '/websitemap',
        subroutes: [],
    },
    {
        label: 'Services',
        url: '/services',
        subroutes: [
            {
                label: 'Sea freight',
                url: '/services/marine-gruzoperevozki',
            },
            {
                label: 'Railway transportation',
                url: '/services/zheleznodorozhnye-perevozki',
            },
            {
                label: 'Air transport',
                url: '/services/aviaperevozki',
            },
            {
                label: 'Road freight transportation',
                url: '/services/avtomobilnye-perevozki',
            },
            {
                label: 'Project Logistics',
                url: '/services/project-logistics',
            },
            {
                label: 'Containers rental',
                url: '/services/arenda-conteynerov',
            },

            {
                label: 'Customs clearance',
                url: '/services/tamozhennoe-oformlenie',
            },
        ],
    },
];

const routesRight = parsedSitemap.slice(-4);
const routesLeft = parsedSitemap.slice(0, 8);

const routesList = [routesLeft, routesRight];
</script>

<style src="@/assets/scss/pages/Sitemap.scss" lang="scss" scoped></style>
