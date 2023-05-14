<template>
    <div class="map">
        <h2>{{ $texts.internationalSeaFreight + $texts.companyName }}</h2>
        <p>{{ $texts.seaFreightAllCountries }}</p>
        <div class="map__btns-container" @mouseleave="country = memo">
            <button
                v-for="(dest, i) in seaFreightList"
                :key="i"
                :class="{ btn_active: dest.flag === country }"
                @mouseover="showMap(dest.flag)"
                @click="fixateMap(dest.flag)"
            >
                <nuxt-img
                    :src="'images/sea_freight/flags/' + dest.flag + '.png'"
                />
                {{ dest.label }}
            </button>
            <button @click="calculatorPopupShown = true">
                {{ $texts.startCalculation }}
            </button>
        </div>
        <div class="img-container">
            <nuxt-img
                class="bg-map"
                src="images/sea_freight/static_maps/map.png"
            />
            <nuxt-img
                v-if="country"
                class="react-map"
                quality="100"
                :src="'images/sea_freight/reactive_maps/' + country + '.png'"
            />
        </div>
    </div>
</template>

<script>
import { seaFreightList } from '~~/config/seaFreightList';
export default {
    setup() {
        const calculatorPopupShown = useCalculatorPopup();
        return {
            calculatorPopupShown,
        };
    },
    data() {
        return {
            country: '',
            // remembers the last clicked country to show when not hovering on others
            memo: '',
        };
    },
    computed: {
        seaFreightList() {
            return seaFreightList;
        },
    },
    methods: {
        showMap(country) {
            this.country = country;
        },
        fixateMap(country) {
            this.country = country;
            this.memo = country;
        },
    },
};
</script>

<style
    src="@/assets/scss/components/MorskieGruzoperevozki/ReactiveMap.scss"
    lang="scss"
    scoped
></style>
