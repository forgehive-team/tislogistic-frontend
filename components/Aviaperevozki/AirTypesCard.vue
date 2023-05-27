<template>
    <div class="card">
        <div
            class="card__img-container"
            :style="bg"
            :title="seoAlt"
            :aria-label="seoAlt"
        ></div>
        <div class="card__info">
            <h3>{{ data.title }}</h3>
            <div v-if="data.legal" id="scroll-target"></div>
            <p>{{ data.text }}</p>
            <p v-if="data.legal" class="legal">
                {{ data.legal }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: true,
        },
    },
    computed: {
        seoAlt() {
            const { $texts } = useNuxtApp();
            return this.data.title + ' oт' + $texts.companyNameSeo;
        },
        bg() {
            const $img = useImage();
            const imgUrl = $img(this.data.img, {
                format: 'webp',
                quality: 40,
                alt: this.seoAlt,
            });
            return {
                backgroundImage: `url('${imgUrl}')`,
            };
        },
    },
};
</script>

<style
    src="@/assets/scss/components/Aviaperevozki/AirTypes.scss"
    lang="scss"
    scoped
></style>
