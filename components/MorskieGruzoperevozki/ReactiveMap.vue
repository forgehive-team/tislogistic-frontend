<template>
    <div class="map">
        <h2>{{ $texts.internationalSeaFreight + $texts.companyName }}</h2>
        <p>{{ $texts.seaFreightAllCountries }}</p>
        <div class="map__btns-container" @mouseleave="country = memo">
            <button
                v-for="(destination, i) in seaFreightList"
                :key="i"
                :class="{ btn_active: destination.country === country }"
                @mouseover="showMap(destination.country)"
                @click="fixateMap(destination.country)"
            >
                <nuxt-img
                    :src="
                        'images/sea_freight/flags/' +
                        destination.country +
                        '.png'
                    "
                    sizes="lg:1px xxl:65px"
                    :alt="destination.label"
                />
                {{ destination.label }}
            </button>
            <button
                @click="calculatorPopupShown = true"
                @mouseover="country = memo"
            >
                {{ $texts.startCalculation }}
            </button>
        </div>
        <div class="img-container">
            <nuxt-img
                class="bg-map"
                src="images/sea_freight/static_maps/map.png"
                quality="100"
                preload="true"
                sizes="lg:1px xxl:1512px"
                :alt="$texts.internationalSeaFreight + $texts.companyNameSeo"
                style="min-height: 600px"
            />
            <nuxt-img
                v-for="(destination, i) in seaFreightList"
                v-show="country === destination.country"
                :key="i"
                class="react-map"
                format="webp"
                quality="100"
                sizes="lg:1px xxl:1512px"
                :alt="
                    $texts.internationalSeaFreight +
                    destination.seoAlt +
                    $texts.companyNameSeo
                "
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
        showCalculator() {
            this.country = this.memo;
            this.calculatorPopupShown = true;
        },
    },
};
</script>

<style
    src="@/assets/scss/components/MorskieGruzoperevozki/ReactiveMap.scss"
    lang="scss"
    scoped
></style>
