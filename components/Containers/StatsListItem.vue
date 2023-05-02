<template>
    <div class="list-item" :class="container.className">
        <h2 class="list-item__title">
            {{ container.title }}
        </h2>
        <p class="list-item__description">
            {{ container.description }}
        </p>
        <div class="list-item__img-container">
            <nuxt-img
                class="list-item__img"
                :src="container.img"
                quality="100"
                style="min-height: 130px"
                :alt="container.title + ' для грузоперевозок от ТИС Лоджистик'"
            ></nuxt-img>
        </div>

        <div class="list-item__table">
            <div class="table-dimensions">
                <div v-for="item in dimensions" :key="item" class="table-item">
                    {{ item }}
                </div>
            </div>
            <div class="table-weight-title">{{ $texts.weight }}</div>
            <div class="table-weights">
                <div v-for="item in weights" :key="item" class="table-item">
                    {{ item }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        container: {
            type: Object,
            required: true,
        },
    },
    computed: {
        innerHeight() {
            return this.container.inner.height.length < 10
                ? this.container.inner.height + ' mm'
                : this.container.inner.height;
        },
        dimensions() {
            const { $texts } = useNuxtApp();
            return [
                $texts.containerDimensions,
                $texts.length,
                $texts.width,
                $texts.height,
                $texts.outer,
                this.container.outer.length + ' mm',
                this.container.outer.width + ' mm',
                this.container.outer.height + ' mm',
                $texts.inner,
                this.container.inner.length + ' mm',
                this.container.inner.width + ' mm',
                this.innerHeight,
                $texts.doors,
                '--',
                this.container.doors.width,
                this.container.doors.height,
            ];
        },
        weights() {
            const { $texts } = useNuxtApp();
            return [
                $texts.grossWeightMax,
                this.container.maxGrossWeight,
                $texts.tare,
                this.container.tare,
                $texts.maxLoad,
                this.container.maxLoad,
                $texts.volume,
                this.container.volume,
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
