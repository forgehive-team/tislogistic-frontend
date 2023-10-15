<template>
    <div class="card">
        <div class="card__img-container" :title="data.seoAlt" :style="bg"></div>
        <div class="card__info">
            <h3>{{ data.title }}</h3>
            <ul>
                <li v-for="(line, key) in data.list" :key="key">{{ line }}</li>
            </ul>
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
                quality: 60,
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
    src="@/assets/scss/components/ProjectLogistics/AnyDelivery.scss"
    lang="scss"
    scoped
></style>
