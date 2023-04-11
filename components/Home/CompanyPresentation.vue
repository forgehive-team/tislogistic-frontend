<template>
    <div class="presentation">
        <div class="presentation__content">
            <h3 class="presentation__title">{{ $texts.presentationTitle }}</h3>
            <p class="presentation__text">
                {{ $texts.presentationDescription }}
            </p>
            <button class="presentation__btn">
                {{ $texts.download }}
                <img src="@/assets/icons/arrow-white-right.svg" />
            </button>
        </div>
        <div class="presentation__bg tablet-desktop-only">
            <nuxt-img
                class="presentation__img"
                format="webp"
                sizes="sm:0px md:0px lg:500px xl:700px xxl:700px 2xl:700px"
                src="images/notepad.png"
            />
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style
    src="@/assets/scss/components/Home/CompanyPresentation.scss"
    lang="scss"
    scoped
></style>
