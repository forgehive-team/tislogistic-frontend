<template>
    <div>
        <h2>{{ $texts.openVacancies }}</h2>
        <ContactsCitySlider
            :active-city-id="activeCityId"
            @pick-city="changeCity"
        />
        <Swiper
            v-if="data"
            class="swiper"
            :slides-per-view="'auto'"
            :breakpoints="{
                320: {
                    spaceBetween: 16,
                },
                768: {
                    spaceBetween: 24,
                },
                1248: {
                    spaceBetween: 24,
                },
            }"
        >
            <SwiperSlide
                v-for="(item, i) in data[activeCityId]"
                :key="i"
                class="slide"
            >
                <div class="slide-content">
                    <VacanciesVacancyCard
                        :title="item.title"
                        :salary="item.salary"
                    />
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script setup>
const activeCityId = ref(1);
const changeCity = (id) => {
    activeCityId.value = id;
};
const data = ref(null);
const fakeData = {
    1: [
        {
            title: 'Логист по морским перевозкам',
            salary: 'от 60 000 рублей на руки',
            link: 'https://spb.hh.ru/vacancy/85147524?from=vacancy_search_list&query=%D0%BF',
        },
        {
            title: 'Логист по наземным перевозкам',
            salary: 'от 60 000 рублей на руки',
            link: 'https://spb.hh.ru/vacancy/85147524?from=vacancy_search_list&query=%D0%BF',
        },
    ],
    2: [],
    3: [
        {
            title: 'Логист по подземным перевозкам',
            salary: 'от 60 000 рублей на руки',
            link: 'https://spb.hh.ru/vacancy/85147524?from=vacancy_search_list&query=%D0%BF',
        },
    ],
    4: [
        {
            title: 'Логист по воздушным перевозкам',
            salary: 'от 60 000 рублей на руки',
            link: 'https://spb.hh.ru/vacancy/85147524?from=vacancy_search_list&query=%D0%BF',
        },
    ],
    5: [
        {
            title: 'Логист по межпланетным перевозкам',
            salary: 'от 60 000 рублей на руки',
            link: 'https://spb.hh.ru/vacancy/85147524?from=vacancy_search_list&query=%D0%BF',
        },
        {
            title: 'Логист по межпланетным перевозкам',
            salary: 'от 60 000 рублей на руки',
            link: 'https://spb.hh.ru/vacancy/85147524?from=vacancy_search_list&query=%D0%BF',
        },
    ],
    6: [
        {
            title: '1с разработчик',
            salary: 'от 10 000 рублей на руки',
            link: 'https://spb.hh.ru/vacancy/85147524?from=vacancy_search_list&query=%D0%BF',
        },
        {
            title: '2с разработчик',
            salary: 'от 11 000 рублей на руки',
            link: 'https://spb.hh.ru/vacancy/85147524?from=vacancy_search_list&query=%D0%BF',
        },
        {
            title: '3с разработчик',
            salary: 'от 12 000 рублей на руки',
            link: 'https://spb.hh.ru/vacancy/85147524?from=vacancy_search_list&query=%D0%BF',
        },
        {
            title: '4с разработчик',
            salary: 'от 13 000 рублей на руки',
            link: 'https://spb.hh.ru/vacancy/85147524?from=vacancy_search_list&query=%D0%BF',
        },
        {
            title: '5с разработчик',
            salary: 'от 13 500 рублей на руки',
            link: 'https://spb.hh.ru/vacancy/85147524?from=vacancy_search_list&query=%D0%BF',
        },
    ],
    7: [],
};

onMounted(() => {
    setTimeout(() => {
        data.value = fakeData;
    }, 1000);
});
</script>

<style
    src="@/assets/scss/components/Vacancies/OpenPositions.scss"
    lang="scss"
    scoped
></style>
