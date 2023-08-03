<template>
    <div class="swiper">
        <div class="slide">
            <div class="slide-container">
                <div class="slide-content">
                    <SharedServicesHeader
                        class="_home"
                        :title="$texts.homeHeader + $texts.companyName"
                        :subtitle="$texts.homeSubheader"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<style
    src="@/assets/scss/components/Home/HeaderSlider.scss"
    lang="scss"
    scoped
></style>
