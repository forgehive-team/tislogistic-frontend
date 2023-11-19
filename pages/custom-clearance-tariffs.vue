<template>
    <div>
        <section>
            <div class="bg white-theme-only gradient-bg"></div>
            <div>
                <SharedBreadCrumbs class="breadcrumbs" />
                <h1>Customs clearance fees</h1>
                <div class="content">
                    <strong>
                        Contingent tariffs for the calculation of the contract
                        price of the Yew service Customs clearance logistician
                    </strong>
                    <template v-for="item in tables" :key="item.title">
                        <h2>{{ item.title }}</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price, rubles</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="row in item.rows" :key="row.name">
                                    <td>{{ row.name }}</td>
                                    <td>{{ row.price }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </template>
                    <br />
                    <h2>Note:</h2>
                    <ul>
                        <li>Prices include VAT;</li>
                        <li>Complex regimes are at a negotiated cost;</li>
                        <li>
                            Service fees are not included public bodies and the
                            cost of third-party services organisations;
                        </li>
                        <li>
                            The timing and cost of certification services depend
                            on the specifics of the goods themselves, the
                            availability of other certificates and the
                            characteristics of the certification tests carried
                            out. Final cost of certification services determined
                            on a case-by-case basis, after look into all aspects
                            of the upcoming process certifications;
                        </li>
                        <li>
                            Discounts are given to regular customers, the size
                            of which shall be specified in a separate addendum
                            to treaty.
                        </li>
                    </ul>
                </div>
            </div>
            <SharedGoUp />
        </section>
    </div>
</template>

<script setup>
const { $texts } = useNuxtApp();
definePageMeta({
    breadcrumbTitle: 'Customs clearance tariffs',
});
useServerSeoMeta({
    title: 'Customs clearance tariffs',
    description:
        'Customs clearance tariffs. «TIS LOGISTICS» - freight forwarding company. Multimodal container transportation, air-, auto-, rail-delivery of cargoes in Russia from China and Asian countries on a turnkey basis. Customs clearance, certification and professional warehousing services.',
    keywords: $texts.seoKeywordsBase,
});

const tables = [
    {
        title: 'Provision of advisory services',
        rows: [
            {
                name: 'Advice to participants of the CEA (determination of the TNVED code, preliminary calculation of payments, the need for certification, licensing, etc.) for each code',
                price: 'Free',
            },
        ],
    },
    {
        title: 'Documentation:',
        rows: [
            {
                name: 'Customs declaration (CT) (1 container/1 load)',
                price: 'from 15 000',
            },
            {
                name: '- for each subsequent container in the batch',
                price: ' ',
            },
            {
                name: '- from 2 to 5 ktk in a batch',
                price: '3 000',
            },
            {
                name: '- from 5 to 10 ktk in a batch',
                price: '2 000',
            },
            {
                name: '- 10 and above',
                price: '1 000',
            },
            {
                name: '- for each additional sheet',
                price: '3 000',
            },
            {
                name: 'Issuance of necessary certificates (excluding cost of work of certification bodies)',
                price: '3 000',
            },
        ],
    },
    {
        title: 'Organisational services:',
        rows: [
            {
                name: 'Organisation of customs inspection',
                price: 'from 6 000',
            },
            {
                name: 'Organisation of customs inspection (including preliminary)',
                price: 'from 6 000',
            },
            {
                name: 'Organisation of sampling and sampling',
                price: 'from 6 000',
            },
            {
                name: 'Organisation of passage of CFC, veterinary control',
                price: 'from 5 000',
            },
        ],
    },
];
</script>

<style src="@/assets/scss/pages/Tarify.scss" lang="scss" scoped></style>
