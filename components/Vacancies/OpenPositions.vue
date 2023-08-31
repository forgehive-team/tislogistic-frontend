<template>
    <div>
        <h2>{{ $texts.openVacancies }}</h2>
        <ContactsCitySlider
            v-if="data"
            :active-city-id="activeCityId"
            :cities="data"
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
                v-for="(item, i) in activeCity.vacancies"
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
const { newsApiBase } = useRuntimeConfig();
const url = newsApiBase + 'vacancies';

const activeCityId = ref(1);
const changeCity = (id) => {
    activeCityId.value = id;
    console.log(activeCity.value);
};
const activeCity = computed(() => {
    return data.value
        ? toRaw(data.value).find((obj) => obj.id === activeCityId.value)
        : null;
});

const data = ref(null);

onMounted(async () => {
    const res = await $fetch(url);
    data.value = res;
});
</script>

<style
    src="@/assets/scss/components/Vacancies/OpenPositions.scss"
    lang="scss"
    scoped
></style>
