<template>
    <div class="card">
        <div class="card__img-container" :title="data.seoAlt" :style="bg"></div>
        <div class="card__info">
            <h3>{{ data.title }}</h3>
            <p>{{ data.text }}</p>
            <p v-if="data.legal" class="legal">{{ data.legal }}</p>
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
        bg() {
            const $img = useImage();
            const imgUrl = $img(this.data.img, {
                format: 'webp',
                quality: 40,
                alt: this.data.seoAlt,
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
