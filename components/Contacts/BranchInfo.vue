<template>
    <div class="branch-info">
        <div class="info">
            <div v-for="(item, i) in fields" :key="i" class="item">
                <p class="label">{{ item.label }}</p>
                <p class="value" :class="i < 2 && 'value_bold'">
                    {{ data[props.activeCityId][item.ref] }}
                </p>
            </div>
        </div>
        <div v-if="showMap" class="map">
            <ContactsYandexMap :coords="data[props.activeCityId].coords" />
            <div>
                <h3>{{ data[props.activeCityId].coords }}</h3>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['activeCityId']);
const { $texts } = useNuxtApp();
const showMap = ref(false);
onMounted(() => {
    setTimeout(() => {
        showMap.value = true;
    }, 1000);
});
const fields = [
    {
        label: $texts.phone,
        ref: 'phone',
    },
    {
        label: $texts.emailString,
        ref: 'email',
    },
    {
        label: $texts.address,
        ref: 'address',
    },
    {
        label: $texts.workingHours,
        ref: 'hours',
    },
];
//  to be fetched
const data = {
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
    },
    3: {
        phone: '8 924 333 33 33',
        email: 'test@mail.ru',
        address: 'smth street',
        hours: 'С понедельника по понедельник. Выходной - понедельник',
        coords: [55, 36],
    },
    4: {
        phone: '8 924 333 33 33',
        email: 'test@mail.ru',
        address: 'smth street',
        hours: 'С понедельника по понедельник. Выходной - понедельник',
        coords: [55, 36],
    },
    5: {
        phone: '8 924 333 33 33',
        email: 'test@mail.ru',
        address: 'smth street',
        hours: 'С понедельника по понедельник. Выходной - понедельник',
        coords: [55, 36],
    },
    6: {
        phone: '8 924 333 33 33',
        email: 'test@mail.ru',
        address: 'smth street',
        hours: 'С понедельника по понедельник. Выходной - понедельник',
        coords: [55, 36],
    },
    7: {
        phone: '8 924 333 33 33',
        email: 'test@mail.ru',
        address: 'smth street',
        hours: 'С понедельника по понедельник. Выходной - понедельник',
        coords: [55, 36],
    },
};
</script>

<style
    src="@/assets/scss/components/Contacts/BranchInfo.scss"
    lang="scss"
    scoped
></style>
