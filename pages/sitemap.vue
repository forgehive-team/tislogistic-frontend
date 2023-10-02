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
    breadcrumbTitle: 'Карта сайтa',
});

useServerSeoMeta({
    title: 'Карта сайта',
    keywords: $texts.seoKeywordsBase,
});

const parsedSitemap = [
    {
        label: 'Главная',
        url: '/',
        subroutes: [],
    },
    {
        label: 'О компании',
        url: '/about',
        subroutes: [],
    },
    {
        label: 'Классификация контейнеров',
        url: '/containers',
        subroutes: [],
    },
    {
        label: 'Позиция и движение судов',
        url: '/traffic',
        subroutes: [],
        client: true,
    },
    {
        label: 'Проекты',
        url: '/projects',
        subroutes: [
            {
                label: 'Наши возможности: доставка объемных грузов',
                url: '/projects/nashi-vozmozhnosti-dostavka-obemnyh-gruzov',
            },
            {
                label: 'Опасная краска',
                url: '/projects/opasnaya-kraska',
            },
            {
                label: 'Тяжелое оборудование',
                url: '/projects/tyazheloe-oborudovanie',
            },
            {
                label: 'Ламборгини из Японии, или сложности доставки в условиях санкций',
                url: '/projects/lamborgini-iz-yaponii-ili-slozhnosti-dostavki-v-usloviyah-sankcij',
            },
        ],
    },
    {
        label: 'Новости',
        url: '/news',
        subroutes: [
            {
                label: 'Доставим ваш груз из Китая в флекситанк-контейнерах',
                url: '/news/dostavim-vas-gruz-iz-kitaia-v-fleksi-tank-konteinerax',
            },
            {
                label: 'Отправка из Китая автомобилей в контейнерах без очередей',
                url: '/news/novaia-usluga-otpravka-iz-kitaia-avtomobilei-v-konteinera-bez-oceredei-ot-2-x-stuk',
            },
            {
                label: 'Зеон под опекой',
                url: '/news/opekunstvo-nad-belym-nosorogom-po-imeni-zeon',
            },
        ],
    },
    {
        label: 'Политика конфиденциальности',
        url: '/politika-konfidencialnosti',
        subroutes: [],
    },
    {
        label: 'Пользовательское соглашение',
        url: '/eula',
        subroutes: [],
    },

    // {
    //     label: 'Инкотермс 2020',
    //     url: '/inkoterms-2020',
    //     subroutes: [],
    // },
    {
        label: 'Тарифы на таможенное оформление грузов',
        url: '/tarify-na-tamozhennoe-oformlenie-gruzov',
        subroutes: [],
    },
    {
        label: 'Карта сайта',
        url: '/sitemap',
        subroutes: [],
    },
    {
        label: 'Услуги',
        url: '/services',
        subroutes: [
            {
                label: 'Морские грузоперевозки',
                url: '/services/morskie-gruzoperevozki',
            },
            {
                label: 'Железнодорожные перевозки',
                url: '/services/zheleznodorozhnye-perevozki',
            },
            {
                label: 'Авиаперевозки',
                url: '/services/aviaperevozki',
            },
            {
                label: 'Автомобильные перевозки',
                url: '/services/avtomobilnye-perevozki',
            },
            {
                label: 'Проектная логистика',
                url: '/services/project-logistics',
            },
            {
                label: 'Аренда контейнеров',
                url: '/services/arenda-konteynerov',
            },

            {
                label: 'Таможенное оформление',
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
