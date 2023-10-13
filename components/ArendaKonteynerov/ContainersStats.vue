<template>
    <div class="containers-stats">
        <IconsCompanyLogo class="logo" :alt="$texts.companyNameSeo" />
        <div class="controls">
            <button
                v-for="(container, i) in controlBtnsData"
                :key="i"
                :class="{ btn_active: container.index === currentIndex }"
                @click="currentIndex = container.index"
            >
                {{ container.name }}
            </button>
        </div>
        <div class="body">
            <div class="image-conainer" :style="img"></div>
            <div class="stats">
                <h3>{{ $texts.containerStats }}</h3>
                <div class="table">
                    <div
                        v-for="(item, i) in currentContainerTableData"
                        :key="i"
                        class="table-item"
                    >
                        <span class="table-item__label">{{ item.label }}</span>
                        <span class="table-item__line">{{
                            $texts.leadingDots
                        }}</span>
                        <span class="table-item__value">{{ item.value }}</span>
                    </div>
                </div>
                <div class="bottom">
                    <span class="price">{{
                        $texts.monthlyRent + currentContainerData.price
                    }}</span>
                    <p class="delivery-note">
                        {{ $texts.rentalContainerDeliveryNote }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    containersTypes,
    containersStatsLabels,
    containersStatsValues,
} from '~~/config/rentalContainersList';
export default {
    data() {
        return {
            currentIndex: 0,
        };
    },
    computed: {
        controlBtnsData() {
            return containersTypes;
        },
        currentContainerData() {
            return containersStatsValues[this.currentIndex];
        },

        currentContainerTableData() {
            return containersStatsLabels.map((item) => ({
                label: item.label,
                value: this.currentContainerData[item.key],
            }));
        },
        img() {
            const $img = useImage();
            const imgUrl = $img(
                `images/rental_containers/${this.currentContainerData.img}`,
                {
                    format: 'webp',
                    preload: true,
                }
            );
            return {
                backgroundImage: `url('${imgUrl}')`,
            };
        },
    },
};
</script>

<style
    src="@/assets/scss/components/ArendaKonteynerov/ContainersStats.scss"
    lang="scss"
    scoped
></style>
