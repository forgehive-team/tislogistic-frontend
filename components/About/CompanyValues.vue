<template>
    <div class="company-values">
        <h2>{{ $texts.companyValues }}</h2>
        <div class="company-values__mission">
            <div v-html="$texts.ourMission"></div>
        </div>
        <div class="company-values__grid">
            <div
                v-for="(item, i) in valuesList"
                :key="i"
                class="company-values__item"
            >
                <nuxt-img :src="item.img" :alt="item.alt" class="icon-gray" />
                <div class="company-values__text">
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { valuesList as valuesListRaw } from '~~/config/valuesList';
const lang = useLanguage();
const valuesList = computed(() => {
    return valuesListRaw[lang.value];
});
</script>
<style
    src="@/assets/scss/components/About/CompanyValues.scss"
    lang="scss"
></style>
