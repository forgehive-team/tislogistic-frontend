<template>
    <div>
        <section>
            <div class="bg white-theme-only gradient-bg"></div>
            <div>
                <SharedBreadCrumbs class="breadcrumbs" />
                <h1>Тарифы на таможенное оформление грузов</h1>
                <div class="content">
                    <strong>
                        Условные тарифы для расчета договорной цены услуги Тис
                        Лоджистик по таможенному оформлению грузов
                    </strong>
                    <template v-if="tables.length" v-for="item in tables" :key="item.title">
                        <h2>{{ item.title }}</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Наименование</th>
                                    <th>Стоимость, руб.</th>
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
                    <h2>Примечание:</h2>
                    <ul>
                        <li>Цены указаны с учетом НДС;</li>
                        <li>
                            Сложные режимы оформляются по договорной стоимости;
                        </li>
                        <li>
                            Стоимость услуг не включает в себя сборы
                            государственных органов и стоимость услуг сторонних
                            организаций;
                        </li>
                        <li>
                            Сроки и стоимость услуг по сертификации зависят от
                            специфики самого товара, наличия других сертификатов
                            и особенностей проводимых испытаний по сертификации.
                            Окончательная стоимость сертификационных услуг
                            определяется в каждом случае отдельно, после
                            изучения всех аспектов предстоящего процесса
                            сертификации;
                        </li>
                        <li>
                            Постоянным клиентам предоставляются скидки, размер
                            которых оговаривается отдельным дополнением к
                            договору.
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
    breadcrumbTitle: 'Тарифы на таможенное оформление грузов',
});
useServerSeoMeta({
    title: 'Тарифы на таможенное оформление грузов',
    description:
        'Тарифы на таможенное оформление грузов. «ТИС ЛОДЖИСТИК» — транспортно-экспедиторская компания. Мультимодальные контейнерные перевозки, авиа-, авто-, ЖД доставка грузов по России из Китая и стран Азии под ключ. Таможенное оформление, сертификационные и профессиональные складские услуги.',
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
