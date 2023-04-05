<template>
    <div class="partners">
        <h3 class="partners__title">
            {{ $texts.partners }}
        </h3>
        <Swiper
            id="mys"
            ref="swiper"
            slides-per-view="2"
            loop
            :breakpoints="{
                768: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                },
            }"
        >
            <SwiperSlide class="partner"
                ><img src="@/public/images/test1.png"
            /></SwiperSlide>
            <SwiperSlide class="partner"
                ><img src="@/public/images/test2.png" />
            </SwiperSlide>
            <SwiperSlide class="partner"
                ><img src="@/public/images/test3.png" />
            </SwiperSlide>
            <SwiperSlide class="partner"
                ><img src="@/public/images/test3.png" />
            </SwiperSlide>
            <SwiperSlide class="partner"
                ><img src="@/public/images/test3.png" />
            </SwiperSlide>
            <SwiperSlide class="partner"
                ><img src="@/public/images/test3.png" />
            </SwiperSlide>
            <SwiperSlide class="partner"
                ><img src="@/public/images/test3.png" />
            </SwiperSlide>
            <SwiperSlide class="partner"
                ><img src="@/public/images/test3.png" />
            </SwiperSlide>
            <HomeSwiperControls />
        </Swiper>
    </div>
</template>

<script>
export default {};
</script>
<style
    src="@/assets/scss/components/Home/PartnersSwiper.scss"
    lang="scss"
    scoped
></style>
