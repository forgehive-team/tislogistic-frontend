<template>
    <div>
        <h2>{{ $texts.foreignServicesTitle }}</h2>
        <div class="grid">
            <div v-for="(item, i) in services" :key="i" class="card">
                <span> {{ item }}</span>
                <nuxt-img
                    :src="imgBasePath + (i + 1) + '.svg'"
                    class="number"
                    alt=""
                />
            </div>
            <div class="card card_container">
                <nuxt-img
                    src="images/container_blue.png"
                    format="webp"
                    alt=""
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { services } from '~~/config/foreignServicesList';
const imgBasePath = 'images/svg_numbers/';
</script>

<style
    src="@/assets/scss/components/ForeignActivity/ForeignServices.scss"
    lang="scss"
    scoped
></style>
