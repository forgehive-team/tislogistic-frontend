<template>
    <div class="tracking__form-container" :class="{ shimmer: isLoading }">
        <h1 class="form-title">{{ $texts.trackYourCargo }}</h1>

        <div class="form-flex">
            <div class="return-call__field">
                <input
                    class="return-call__input"
                    :placeholder="$texts.enterContainerNumber"
                    v-model="containerInput"
                />
            </div>

            <button
                @click="() => getTracking()"
                class="tracking-btn animate-red"
                :class="{ 'tracking-btn-loading': isLoading || isBlocked }"
            >
                {{ $texts.track }}
            </button>
        </div>

        <p class="tracking-error" v-if="error">{{ error }}</p>

        <TrackingTrainInfo
            v-if="tracking && tracking.type === 'Train'"
            :tracking-info="tracking"
        />
        <TrackingSeaInfo
            v-if="tracking && tracking.type === 'Sea'"
            :tracking-info="tracking"
        />

        <IconsCompanyLogo class="logo" />
    </div>
</template>

<script setup lang="ts">
const { $texts } = useNuxtApp() as any;
const { apiV2Base } = useRuntimeConfig();

const tracking = ref<any>(null);
const isLoading = ref(false);
const containerInput = ref('');
const error = ref(null);
const isBlocked = ref(false);

const isValidContainerNumber = (number: string) =>
    /^[A-Z]{4}\d{7}$/.test(number);

const getTracking = async () => {
    if (isLoading.value || isBlocked.value) return;
    tracking.value = null;
    error.value = null;

    const containerNumber = containerInput.value.trim().toUpperCase();
    if (!containerNumber) return;
    if (!isValidContainerNumber(containerNumber)) {
        error.value = $texts.errorBadContainerNumber;
        return;
    }
    isLoading.value = true;
    try {
        const res = await $fetch(
            `${apiV2Base}/tracking/?number=${containerNumber}`
        );
        console.log(res);
        tracking.value = res;
    } catch (e: any) {
        console.log(e);
        if (e.response?.status === 404) {
            error.value = $texts.errorContainerNotFound;
        } else if (e.response?.status === 429) {
            error.value = $texts.errorRateLimit;
            isBlocked.value = true;
            setTimeout(() => {
                isBlocked.value = false;
            }, 1000);
        }
    } finally {
        isLoading.value = false;
    }
};
</script>

<style src="@/assets/scss/pages/Tracking.scss" lang="scss" scoped></style>

<style
    src="@/assets/scss/components/Shared/ReturnCallModal.scss"
    lang="scss"
    scoped
></style>
