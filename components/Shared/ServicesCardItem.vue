<template>
    <NuxtLink
        class="service"
        :to="service.to"
        :class="{ service_disabled: service.disabled }"
    >
        <div class="service__content">
            <img
                class="service__arrow service-icon"
                src="@/assets/icons/arrow-diagonal.svg"
                alt=""
            />
            <h3 class="service__title">{{ $texts[service.title] }}</h3>
        </div>
        <nuxt-img
            class="service__img service-icon"
            :src="service.icon"
            :alt="imgAlt"
        />
    </NuxtLink>
</template>

<script>
export default {
    props: {
        service: {
            type: Object,
            required: true,
        },
    },
    computed: {
        imgAlt() {
            const { $texts } = useNuxtApp();
            return this.service.title + ' ' + $texts.companyName;
        },
    },
    mounted() {
        console.log(this.service);
    },
};
</script>

<style
    src="@/assets/scss/components/Shared/ServicesCards.scss"
    lang="scss"
    scoped
></style>
