<template>
    <div>
        <h2>{{ $texts.deliveryProcess }}</h2>
        <div class="img-container">
            <nuxt-img
                class="mobile"
                src="images/process_mobile.png"
                sizes="sm:350px md:400px lg:1px xl:1px xxl:1px 2xl:1px"
                :alt="$texts.deliveryProcess + $texts.companyNameSeo"
            />
            <nuxt-img
                class="tablet-desktop"
                src="images/process_desktop.png"
                sizes="sm:1px md:1248px xxl:1512px 2xl:2200px"
                :alt="$texts.deliveryProcess + $texts.companyNameSeo"
            />
        </div>
    </div>
</template>

<style
    src="@/assets/scss/components/Home/DeliveryProcess.scss"
    lang="scss"
    scoped
></style>
