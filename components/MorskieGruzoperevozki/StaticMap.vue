<template>
    <div class="static-map">
        <nuxt-img
            class="bg-container"
            :src="'images/sea_freight/static_maps' + img"
            format="webp"
            sizes="md:532px xxl:854px"
            quality="90"
            :alt="title + ' от' + $texts.companyNameSeo"
        />
        <h2>{{ title }}</h2>
        <p>{{ note }}</p>
        <h3>{{ subtitle }}</h3>
        <ul>
            <li v-for="(option, key) in list" :key="key">
                <span v-if="option.title">{{ option.title }}</span>
                {{ option.text }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        note: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
            required: true,
        },
        list: {
            type: Array,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
    },
};
</script>

<style
    src="@/assets/scss/components/MorskieGruzoperevozki/StaticMap.scss"
    lang="scss"
    scoped
></style>
