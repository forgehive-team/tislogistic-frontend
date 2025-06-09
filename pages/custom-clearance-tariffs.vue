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
                    <template v-if="tables.length" v-for="item in tables" :key="item.title">
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
const { newsApiBase } = useRuntimeConfig();
const url = newsApiBase + 'tariffs';

definePageMeta({
    breadcrumbTitle: 'Customs clearance tariffs',
});
useServerSeoMeta({
    title: 'Customs clearance tariffs',
    description:
        'Customs clearance tariffs. «TIS LOGISTICS» - freight forwarding company. Multimodal container transportation, air-, auto-, rail-delivery of cargoes in Russia from China and Asian countries on a turnkey basis. Customs clearance, certification and professional warehousing services.',
    keywords: $texts.seoKeywordsBase,
});

const tables = ref([])
onMounted(async () => {
  try {
    const res = await $fetch(url)
    tables.value = res.map(category => ({
      title: category.title,
      rows: category.items.map(item => ({
        name: item.name,
        price: item.description
      }))
    }))
  } catch (err) {
    console.error('Failed to load resource:', err)
  }
})
</script>

<style src="@/assets/scss/pages/Tarify.scss" lang="scss" scoped></style>
