<template>
    <div class="city-slider">
        <Swiper
            class="swiper"
            :slides-per-view="'auto'"
            :breakpoints="{
                320: {
                    spaceBetween: 8,
                },
                768: {
                    spaceBetween: 8,
                },
                1248: {
                    spaceBetween: 16,
                },
            }"
        >
            <SwiperSlide v-for="city in cities" :key="city.id" class="slide">
                <div class="slide-content">
                    <button
                        :class="{
                            'btn-active': city.id === props.activeCityId,
                        }"
                        @click="() => pickCity(city.id)"
                    >
                        {{ city.name }}
                    </button>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script setup>
const props = defineProps(['activeCityId']);
const emit = defineEmits(['pickCity']);

const pickCity = (id) => {
    emit('pickCity', id);
};
const cities = [
    {
        id: 1,
        name: 'Москва',
    },
    {
        id: 2,
        name: 'Владивосток',
    },
    {
        id: 3,
        name: 'Санкт-Петербург',
    },
    {
        id: 4,
        name: 'Новосибирск',
    },
    {
        id: 5,
        name: 'Хабаровск',
    },
    {
        id: 6,
        name: 'Уссурийск',
    },
    {
        id: 7,
        name: 'Находка',
    },
];
</script>

<style
    src="@/assets/scss/components/Contacts/CitySlider.scss"
    lang="scss"
    scoped
></style>
