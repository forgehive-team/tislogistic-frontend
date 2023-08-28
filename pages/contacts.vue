<template>
    <div>
        <section>
            <div class="bg white-theme-only gradient-bg"></div>
            <SharedBreadCrumbs class="breadcrumbs" />
            <h1>{{ $texts.contacts }}</h1>
            <ContactsCitySlider
                :active-city-id="activeCityId"
                @pick-city="changeCity"
            />
            <ContactsBranchInfo
                v-if="data"
                :active-city-id="activeCityId"
                :data="data[activeCityId]"
            />
        </section>
        <section v-if="activeCityId === 1">
            <h2>{{ $texts.companyAdministration }}</h2>
            <AboutCeoQuote class="ceo-quote" />
        </section>
        <section v-else>
            <h2>{{ $texts.branchAdministration }}</h2>
            <ContactsAdministrationSlider
                v-if="data"
                :data="data[activeCityId].administration"
            />
        </section>
        <section>
            <ContactsTelegramChannel />
        </section>
        <section>
            <div class="calculator__back-blur">
                <SharedDeliveryCalculator />
                <IconsCompanyLogo class="logo" />
            </div>
        </section>
    </div>
</template>

<script setup>
const { $texts } = useNuxtApp();
// yandex maps crash on page transitions if attrs not fetched
definePageMeta({
    breadcrumbTitle: 'Контакты',
});
useServerSeoMeta({
    title: $texts.contacts,
    ogTitle: $texts.contacts,
    // description: $texts.aboutSubtitle,
    // ogDescription: $texts.aboutSubtitle,
    keywords: $texts.seoHomeKeywords + $texts.seoKeywordsBase,
});

// many placeholders here
const activeCityId = ref(1);
const changeCity = (id) => {
    activeCityId.value = id;
};
const data = ref(null);
const fakeData = {
    1: {
        phone: '8 924 333 33 33',
        email: 'test@mail.ru',
        address: '105094, г. Москва, ул. Золотая, д. 11, помещ. 10А21',
        hours: 'Понедельник — Пятница с 9.00 до 18.00 \nВыходной: Суббота, Воскресенье.',
        coords: [55, 36],
    },
    2: {
        phone: '8 924 333 33 33',
        email: 'test@mail.ru',
        address: 'Владивосток',
        hours: 'С понедельника по понедельник. \nВыходной - понедельник',
        coords: [43, 131],
        administration: [
            {
                name: 'Никита Маковей',
                position: 'Операционный менеджер',
                img: '',
            },
            {
                name: 'Никита Маковей',
                position: 'Операционный менеджер',
                img: '',
            },
            {
                name: 'Никита Маковей',
                position: 'Операционный менеджер',
                img: '',
            },
        ],
    },
    3: {
        phone: '8 924 333 33 33',
        email: 'test@mail.ru',
        address: 'smth street',
        hours: 'С понедельника по понедельник. Выходной - понедельник',
        coords: [38, 36],
        administration: [
            {
                name: 'Никита Маковей',
                position: 'Операционный менеджер',
                img: '',
            },
            {
                name: 'Никита Маковей',
                position: 'Операционный менеджер',
                img: '',
            },
            {
                name: 'Никита Маковей',
                position: 'Операционный менеджер',
                img: '',
            },
        ],
    },
    4: {
        phone: '8 924 333 33 33',
        email: 'test@mail.ru',
        address: 'smth street',
        hours: 'С понедельника по понедельник. Выходной - понедельник',
        coords: [45, 32],
        administration: [
            {
                name: 'Никита Маковей',
                position: 'Операционный менеджер',
                img: '',
            },
            {
                name: 'Никита Маковей',
                position: 'Операционный менеджер',
                img: '',
            },
            {
                name: 'Никита Маковей',
                position: 'Операционный менеджер',
                img: '',
            },
        ],
    },
    5: {
        phone: '8 924 333 33 33',
        email: 'test@mail.ru',
        address: 'smth street',
        hours: 'С понедельника по понедельник. Выходной - понедельник',
        coords: [40, 34],
        administration: [
            {
                name: 'Никита Маковей',
                position: 'Операционный менеджер',
                img: '',
            },
            {
                name: 'Никита Маковей',
                position: 'Операционный менеджер',
                img: '',
            },
            {
                name: 'Никита Маковей',
                position: 'Операционный менеджер',
                img: '',
            },
        ],
    },
    6: {
        phone: '8 924 333 33 33',
        email: 'test@mail.ru',
        address: 'smth street',
        hours: 'С понедельника по понедельник. Выходной - понедельник',
        coords: [55, 36],
        administration: [
            {
                name: 'Никита Маковей',
                position: 'Операционный менеджер',
                img: '',
            },
            {
                name: 'Никита Маковей',
                position: 'Операционный менеджер',
                img: '',
            },
            {
                name: 'Никита Маковей',
                position: 'Операционный менеджер',
                img: '',
            },
        ],
    },
    7: {
        phone: '8 924 333 33 33',
        email: 'test@mail.ru',
        address: 'smth street',
        hours: 'С понедельника по понедельник. Выходной - понедельник',
        coords: [55, 36],
        administration: [
            {
                name: 'Никита Маковей',
                position: 'Операционный менеджер',
                img: '',
            },
            {
                name: 'Никита Маковей',
                position: 'Операционный менеджер',
                img: '',
            },
            {
                name: 'Никита Маковей',
                position: 'Операционный менеджер',
                img: '',
            },
        ],
    },
};
onMounted(() => {
    setTimeout(() => {
        data.value = fakeData;
    }, 1000);
});
</script>

<style src="@/assets/scss/pages/Contacts.scss" lang="scss" scoped></style>
