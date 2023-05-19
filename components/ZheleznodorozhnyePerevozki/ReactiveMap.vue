<template>
    <div class="map">
        <div class="top">
            <h2>{{ $texts.regularRoutesMap }}</h2>
            <div class="btns_container">
                <button v-for="(destination, i) in trainFreightList" :key="i">
                    {{ destination.label }}
                </button>
            </div>
        </div>
        <nuxt-img src="images/train_freight/map.png" class="map-img-static" />
        <nuxt-img
            src="images/train_freight/moscow.png"
            class="map-img-reactive"
        />
    </div>
</template>

<script>
import { trainFreightList } from '~~/config/trainFreightList';
export default {
    computed: {
        trainFreightList() {
            return trainFreightList;
        },
    },
};
</script>

<style
    src="@/assets/scss/components/ZheleznodorozhnyePerevozki/ReactiveMap.scss"
    lang="scss"
    scoped
></style>
