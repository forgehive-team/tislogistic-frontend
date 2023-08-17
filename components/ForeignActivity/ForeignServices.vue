<template>
    <div>
        <h2>{{ $texts.foreignServicesTitle }}</h2>
        <div class="grid">
            <div v-for="(item, i) in services" :key="i" class="card">
                <span> {{ item }}</span>
                <nuxt-img
                    :src="imgBasePath + (i + 1) + '.svg'"
                    class="number"
                    alt=""
                />
            </div>
            <div class="card card_container">
                <nuxt-img
                    src="images/container_blue.png"
                    format="webp"
                    alt=""
                />
            </div>
        </div>
    </div>
</template>

<script setup>
const imgBasePath = 'images/svg_numbers/';
const services = [
    'Консультацию клиентов \nпо вопросам обхода \nсанкционных \nограничений',
    'Расчёт таможенных \nпошлин и налогов, \nподлежащих уплате \nв таможенных органах',
    'Полную предварительную \nпроверку документов \nдля таможенного \nоформления',
    'Составление и подачу \nтаможенных деклараций \nи контроль прохождения \nтаможенного оформления',
    'Подбор кода \nТН ВЭД',
    'Сопровождение таможенных процедур и представление интересов клиентов в таможенных органах',
    'Помощь в составлении \nвнешнеторговых \nконтрактах',
    'Сопровождение судебных \nспоров с таможенными \nорганами по гражданским \nи административным делам',
    'Предоставление услуги \n«Международный торговый дом»',
];
</script>

<style
    src="@/assets/scss/components/ForeignActivity/ForeignServices.scss"
    lang="scss"
    scoped
></style>
