<template>
    <div class="administration">
        <h2>{{ $texts.branchAdministration }}</h2>
        <Swiper
            class="swiper"
            :slides-per-view="'auto'"
            :breakpoints="{
                320: {
                    spaceBetween: 12,
                },
                768: {
                    spaceBetween: 12,
                },
                1248: {
                    spaceBetween: 16,
                },
            }"
        >
            <SwiperSlide v-for="(item, i) in props.data" :key="i" class="slide">
                <div class="slide-content">
                    <div class="img-container">
                        <img v-if="item.image" :src="item.image" />
                    </div>
                    <p class="name">{{ item.name }}</p>
                    <p class="position">{{ item.position }}</p>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script setup>
const props = defineProps(['data']);
</script>

<style
    src="@/assets/scss/components/Contacts/AdministrationSlider.scss"
    lang="scss"
    scoped
></style>
