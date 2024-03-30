<template>
    <div ref="advantage" class="advantage">
        <div class="advantage__title">
            <span>{{ title }}</span>
        </div>
<!--        <count-up-->
<!--            class="advantage__title"-->
<!--            :class="{ yellow: inServices }"-->
<!--            :end-val="title"-->
<!--            :duration="3"-->
<!--            :options="counterOptions"-->
<!--            :autoplay="false"-->
<!--        ></count-up>-->
        <p class="advantage__description">{{ description }}</p>
    </div>
</template>

<script>
// import CountUp from 'vue-countup-v3';
export default {
    // components: {
    //     'count-up': CountUp,
    // },
    props: {
        title: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        measurement: {
            type: String,
            default: '',
            required: false,
        },
        inServices: {
            type: Boolean,
            required: true,
        },
    }
    /*
    computed: {
        counterOptions() {
            return {
                separator: ' ',
                suffix: this.measurement,
                useEasing: true,
                smartEasingThreshold: this.title - 8,
                smartEasingAmount: 8,
                enableScrollSpy: true,
                scrollSpyOnce: true,
            };
        },
    },
     */
};
</script>
<style
    src="@/assets/scss/components/Shared/KeyIndicatorsItem.scss"
    lang="scss"
    scoped
></style>
