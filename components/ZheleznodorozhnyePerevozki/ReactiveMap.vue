<template>
    <div class="map">
        <div class="top">
            <h2>{{ $texts.regularRoutesMap }}</h2>
            <div class="btns_container" @mouseleave="city = memo">
                <button
                    v-for="(destination, i) in trainFreightList"
                    :key="i"
                    :class="{ btn_active: destination.city === city }"
                    @mouseover="showMap(destination.city)"
                    @click="fixateMap(destination.city)"
                >
                    {{ destination.label }}
                </button>
                <button class="action-btn" @click="calculatorPopupShown = true">
                    {{ $texts.startCalculation }}
                </button>
            </div>
        </div>
        <div class="img-container">
            <nuxt-img
                src="images/train_freight/map.png"
                class="map-static"
                :alt="$texts.trainFreight + 'с' + $texts.companyNameSeo"
            />
            <nuxt-img
                v-for="(destination, i) in trainFreightList"
                v-show="city === destination.city"
                :key="i"
                format="webp"
                class="map-reactive"
                :src="'images/train_freight/' + destination.city + '.png'"
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
                {{ $texts.showAll }}<img src="@/assets/icons/expand.svg" />
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
                    {{ $texts.collapse }}<img src="@/assets/icons/expand.svg" />
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
            memo: '',
        };
    },
    computed: {
        trainFreightList() {
            return trainFreightList;
        },
        destinationsListMobile() {
            return trainFreightList.slice(0, 4);
        },
        destinationsListMobileExpanded() {
            return trainFreightList.slice(4);
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
