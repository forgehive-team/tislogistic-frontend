<template>
    <div class="map">
        <h2>{{ $texts.regularRoutesMap }}</h2>
        <div class="btns_container" @mouseleave="city = memo">
            <button
                v-for="(destination, i) in buttonsList"
                :key="i"
                :class="{ btn_active: destination.city === city }"
                @mouseover="showMap(destination.city)"
                @click="fixateMap(destination.city)"
            >
                {{ destination.label }}
            </button>
            <button
                class="action-btn"
                @click="calculatorPopupShown = true"
                @mouseover="city = memo"
            >
                {{ $texts.startCalculation }}
            </button>
        </div>
        <div class="img-container">
            <IconsTrainMapsStaticMap
                class="map-static"
                :alt="$texts.trainFreight + 'с' + $texts.companyNameSeo"
            />
            <nuxt-img
                v-for="(destination, i) in trainFreightList"
                v-show="city === destination.city"
                :key="i"
                format="webp"
                class="map-reactive train-path"
                :src="'images/train_freight/' + destination.city + '.svg'"
                :alt="
                    $texts.trainFreight +
                    destination.seo +
                    ' с' +
                    $texts.companyNameSeo
                "
            />
        </div>
        <div class="bottom-mobile" @mouseleave="city = memo">
            <button
                v-for="(destination, i) in destinationsListMobile"
                :key="i"
                :class="{ btn_active: destination.city === city }"
                @mouseover="showMap(destination.city)"
                @click="fixateMap(destination.city)"
            >
                {{ destination.label }}
            </button>
            <button
                v-if="!showAllCitiesMobile"
                @click="showAllCitiesMobile = true"
            >
                {{ $texts.showAll }}
                <img src="@/assets/icons/expand.svg" alt="" />
            </button>
            <template v-if="showAllCitiesMobile">
                <button
                    v-for="(destination, i) in destinationsListMobileExpanded"
                    :key="i"
                    :class="{ btn_active: destination.city === city }"
                    @mouseover="showMap(destination.city)"
                    @click="fixateMap(destination.city)"
                >
                    {{ destination.label }}
                </button>
                <button
                    class="collapse-btn"
                    @click="showAllCitiesMobile = false"
                >
                    {{ $texts.collapse }}
                    <img src="@/assets/icons/expand.svg" alt="" />
                </button>
            </template>
        </div>
    </div>
</template>

<script>
import { trainFreightList } from '~~/config/trainFreightList';
export default {
    setup() {
        const calculatorPopupShown = useCalculatorPopup();
        return {
            calculatorPopupShown,
        };
    },
    data() {
        return {
            showAllCitiesMobile: false,
            city: 'spb',
            memo: 'empty',
        };
    },
    computed: {
        trainFreightList() {
            return trainFreightList;
        },
        buttonsList() {
            return trainFreightList.slice(-13);
        },
        destinationsListMobile() {
            return this.buttonsList.slice(0, 4);
        },
        destinationsListMobileExpanded() {
            return this.buttonsList.slice(4);
        },
    },
    methods: {
        showMap(city) {
            this.city = city;
        },
        fixateMap(city) {
            this.memo = city;
        },
    },
};
</script>

<style
    src="@/assets/scss/components/ZheleznodorozhnyePerevozki/ReactiveMap.scss"
    lang="scss"
    scoped
></style>
