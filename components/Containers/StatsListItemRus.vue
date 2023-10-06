<template>
    <div class="list-item">
        <h4 class="list-item__title">
            {{ $texts.containerRusTitle }}
        </h4>
        <p class="list-item__description">
            {{ $texts.containerSharedDescription2 }}
        </p>
        <div class="list-item__img-container list-item__img-container_rus">
            <nuxt-img
                class="list-item__img list-item__img"
                src="images/containers/container2.png"
                format="webp"
                :alt="
                    $texts.containerRusTitle +
                    'для грузоперевозок от ' +
                    $texts.companyNameSeo
                "
            ></nuxt-img>
            <nuxt-img
                class="list-item__img"
                src="images/containers/container4.png"
                format="webp"
                :alt="
                    $texts.containerRusTitle +
                    'для грузоперевозок от ' +
                    $texts.companyNameSeo
                "
            ></nuxt-img>
        </div>

        <div class="list-item__table list-item__table_rus">
            <div v-for="(item, i) in tableItems" :key="i" class="table-item">
                {{ item }}
            </div>
        </div>
    </div>
</template>

<script>
import { containersRus } from '@/config/containersList';
export default {
    computed: {
        tableItems() {
            const { $texts } = useNuxtApp();
            return [
                $texts.sizesDesignation,
                containersRus.sizesDesignation[3],
                containersRus.sizesDesignation[5],
                containersRus.sizesDesignation[20],
                containersRus.sizesDesignation[24],
                $texts.grossWeightTonns,
                containersRus.grossWeightTonns[3],
                containersRus.grossWeightTonns[5],
                containersRus.grossWeightTonns[20],
                containersRus.grossWeightTonns[24],
                $texts.innerVolume,
                containersRus.innerVolume[3],
                containersRus.innerVolume[5],
                containersRus.innerVolume[20],
                containersRus.innerVolume[24],
                $texts.sizes,
                $texts.outer,
                $texts.inner,
                $texts.length,
                containersRus.sizes.outer.length[3],
                containersRus.sizes.outer.length[5],
                containersRus.sizes.outer.length[20],
                containersRus.sizes.outer.length[24],
                $texts.width,
                containersRus.sizes.outer.width[3],
                containersRus.sizes.outer.width[5],
                containersRus.sizes.outer.width[20],
                containersRus.sizes.outer.width[24],
                $texts.height,
                containersRus.sizes.outer.height[3],
                containersRus.sizes.outer.height[5],
                containersRus.sizes.outer.height[20],
                containersRus.sizes.outer.height[24],
                $texts.length,
                containersRus.sizes.inner.length[3],
                containersRus.sizes.inner.length[5],
                containersRus.sizes.inner.length[20],
                containersRus.sizes.inner.length[24],
                $texts.width,
                containersRus.sizes.inner.width[3],
                containersRus.sizes.inner.width[5],
                containersRus.sizes.inner.width[20],
                containersRus.sizes.inner.width[24],
                $texts.height,
                containersRus.sizes.inner.height[3],
                containersRus.sizes.inner.height[5],
                containersRus.sizes.inner.height[20],
                containersRus.sizes.inner.height[24],
                $texts.doorsSizes,
                $texts.width,
                containersRus.sizes.doors.width[3],
                containersRus.sizes.doors.width[5],
                containersRus.sizes.doors.width[20],
                containersRus.sizes.doors.width[24],
                $texts.height,
                containersRus.sizes.doors.height[3],
                containersRus.sizes.doors.height[5],
                containersRus.sizes.doors.height[20],
                containersRus.sizes.doors.height[24],
            ];
        },
    },
};
</script>

<style
    src="@/assets/scss/components/Containers/StatsListItem.scss"
    lang="scss"
    scoped
></style>
