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
            v-if="data && activeCity"
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
                        :link="item.link"
                    />
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script setup>
const { newsApiBase } = useRuntimeConfig();
const url = newsApiBase + 'vacancies';

const activeCityId = ref(null);
const changeCity = (id) => {
    activeCityId.value = id;
};
const activeCity = computed(() => {
    return data.value
        ? toRaw(data.value).find((obj) => obj.id === activeCityId.value)
        : null;
});

const data = ref(null);

onMounted(async () => {
    const res = await $fetch(url);
    activeCityId.value = res[0].id;
    data.value = res;
});
</script>

<style
    src="@/assets/scss/components/Vacancies/OpenPositions.scss"
    lang="scss"
    scoped
></style>
