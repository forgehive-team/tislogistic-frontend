<template>
    <div class="map">
        <h2>{{ $texts.internationalSeaFreight + $texts.companyName }}</h2>
        <p>{{ $texts.seaFreightAllCountries }}</p>
        <div class="map__btns-container" @mouseleave="country = memo">
            <button
                v-for="(dest, i) in seaFreightList"
                :key="i"
                :class="{ btn_active: dest.country === country }"
                @mouseover="showMap(dest.country)"
                @click="fixateMap(dest.country)"
            >
                <nuxt-img
                    :src="'images/sea_freight/flags/' + dest.country + '.png'"
                    format="webp"
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
                format="webp"
                quality="90"
                preload="true"
            />
            <nuxt-img
                v-for="(destination, i) in seaFreightList"
                v-show="country === destination.country"
                :key="i"
                class="react-map"
                format="webp"
                quality="100"
                :src="
                    'images/sea_freight/reactive_maps/' +
                    destination.country +
                    '.png'
                "
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
