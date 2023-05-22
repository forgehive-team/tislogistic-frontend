<template>
    <div>
        <h2>{{ $texts.cargoTypes }}</h2>
        <div class="cargo-types__container">
            <div
                v-for="(cargo, i) in cargoTypesList"
                :key="i"
                class="cargo-type"
            >
                <nuxt-img :src="cargo.img" :alt="cargo.label"></nuxt-img>
                <p>{{ cargo.label }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        cargoTypesList() {
            const { $texts } = useNuxtApp();
            const imgPath = 'images/train_freight/cargo_types/';
            return [
                {
                    label: $texts.generalCargo,
                    img: imgPath + 'general.svg',
                    alt: '',
                },
                {
                    label: $texts.dangerousCargo,
                    img: imgPath + 'dangerous.svg',
                    alt: '',
                },
                {
                    label: $texts.refrigeratedCargo,
                    img: imgPath + 'refrigerated.svg',
                    alt: '',
                },
                {
                    label: $texts.oversizedCargo,
                    img: imgPath + 'oversized.svg',
                    alt: '',
                },
            ];
        },
    },
};
</script>

<style
    src="@/assets/scss/components/ZheleznodorozhnyePerevozki/CargoTypes.scss"
    lang="scss"
    scoped
></style>
