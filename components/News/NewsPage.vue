<!-- eslint-disable vue/no-v-html -->
<template>
    <section v-if="data" class="news__top">
        <SharedBreadCrumbs
            class="news__breadcrumbs"
            :reactive-label="data.title"
        />

        <div class="news__main-content">
            <p class="news__date">{{ processedDate }}</p>
            <h1 class="news__title">{{ data.title }}</h1>
            <p class="news__short-description">
                {{ data.short_description }}
            </p>
            <img
                class="news__main-img"
                :src="data.main_image"
                :alt="data.title + $texts.companyNameSeo"
            />
            <div class="news__description" v-html="data.description"></div>

            <template v-if="data.images.length">
                <NewsImagesSwiper
                    v-if="data.images.length > 2"
                    class="news__swiper"
                    :img-list="data.images"
                />
                <div v-else class="news__static-pictures">
                    <div
                        v-for="(imgSrc, i) in data.images"
                        :key="i"
                        class="news__bottom-img-container"
                    >
                        <img :src="imgSrc" />
                    </div>
                </div>
            </template>
        </div>
    </section>

    <section v-if="data.other_items.length" class="news__bottom">
        <h2 class="news__other-items-title">{{ otherItemsTitle }}</h2>
        <NewsOtherItems :items-list="data.other_items" :is-news="isNews" />
        <div class="news__btn-container">
            <button class="news__go-up-btn" @click="scrollToTop">
                {{ $texts.goUp }}
                <img src="@/assets/icons/expand.svg" alt="" />
            </button>
        </div>
    </section>
</template>

<script>
import transformDate from '~~/helpers/transformDate';

export default {
    props: {
        data: {
            type: Object,
            required: true,
        },
        isNews: {
            type: Boolean,
            required: true,
        },
    },
    computed: {
        processedDate() {
            return transformDate(this.data.published_at);
        },
        otherItemsTitle() {
            return this.isNews ? 'Другие новости' : 'Другие проекты';
        },
    },
    methods: {
        scrollToTop() {
            if (process.client) {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth',
                });
            }
        },
    },
};
</script>
<!-- scoped classes never apply to v-html -->
<style src="@/assets/scss/components/News/NewsPage.scss" lang="scss"></style>
