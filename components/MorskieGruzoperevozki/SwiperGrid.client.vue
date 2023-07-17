<template>
    <div class="swiper-grid" :class="`swiper-grid_${props.type}`">
        <div class="heading">
            <div>
                <h2>
                    {{ props.title }}
                </h2>
                <p v-if="props.text">
                    {{ props.text }}
                </p>
            </div>
            <SharedSwiperControls
                class="controls-desktop"
                :next-id="nextElId"
                :prev-id="prevElId"
            />
        </div>

        <Swiper
            :modules="[SwiperNavigation, SwiperGrid]"
            :navigation="{
                nextEl: '#' + nextElId,
                prevEl: '#' + prevElId,
            }"
            :grid="{
                rows: 3,
                fill: 'row',
            }"
            :breakpoints="{
                320: {
                    slidesPerView: 2,
                    spaceBetween: 8,
                },
                768: {
                    loop: true,
                    slidesPerView: 3.2,
                    spaceBetween: 10,
                    grid: {
                        rows: 1,
                        fill: 'row',
                    },
                },
                1248: {
                    loop: true,
                    slidesPerView: 6,
                    spaceBetween: 10,
                    grid: null,
                },
            }"
        >
            <SwiperSlide v-for="(item, i) in props.list" :key="i" class="slide">
                <div class="slide-content">
                    <nuxt-img
                        v-if="item.img"
                        :src="item.img"
                        :alt="item.label"
                        :quality="60"
                    />
                    <p>{{ item.label }}</p>
                </div>
            </SwiperSlide>
        </Swiper>
        <SharedSwiperControls
            class="controls-mobile"
            :next-id="nextElId"
            :prev-id="prevElId"
        />
    </div>
</template>

<script setup>
const props = defineProps(['title', 'text', 'list', 'type']);
const prevElId = 'prev-' + props.type;
const nextElId = 'next-' + props.type;
</script>

<style
    lang="scss"
    scoped
    src="@/assets/scss/components/MorskieGruzoperevozki/SwiperGrid.scss"
></style>
