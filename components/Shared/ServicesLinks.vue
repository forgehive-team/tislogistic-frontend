<template>
    <div>
        <h2>{{ $texts.otherServices }}</h2>
        <div class="links-container">
            <NuxtLink
                v-for="(service, i) in services"
                :key="i"
                :to="service.to"
                >{{ service.title }}</NuxtLink
            >
        </div>
    </div>
</template>

<script>
import { servicesList } from '~~/config/servicesList';
export default {
    setup() {
        const route = useRoute();
        const currentRoute = route.fullPath;
        return {
            currentRoute,
        };
    },
    computed: {
        services() {
            return servicesList.filter(
                (service) =>
                    service.to !== this.currentRoute && !service.disabled
            );
        },
    },
};
</script>

<style
    src="@/assets/scss/components/Shared/ServicesLinks.scss"
    lang="scss"
    scoped
></style>
