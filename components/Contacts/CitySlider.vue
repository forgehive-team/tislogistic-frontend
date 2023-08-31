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
            <SwiperSlide
                v-for="city in props.cities"
                :key="city.id"
                class="slide"
            >
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
const props = defineProps(['activeCityId', 'cities']);
const emit = defineEmits(['pickCity']);

const pickCity = (id) => {
    emit('pickCity', id);
};
</script>

<style
    src="@/assets/scss/components/Contacts/CitySlider.scss"
    lang="scss"
    scoped
></style>
