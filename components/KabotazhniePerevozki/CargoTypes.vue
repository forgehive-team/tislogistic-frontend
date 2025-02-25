<template>
    <div>
        <h2>{{ $texts.cargoTypes }}</h2>
        <div class="cargo-types__container">
            <div v-for="(cargo, i) in list" :key="i" class="cargo-type">
                <nuxt-img
                    :src="cargo.img"
                    :alt="cargo.label"
                    class="icon-gray"
                ></nuxt-img>
                <div class="cargo-text">
                    <h5>{{ cargo.label }}</h5>
                    <p>{{ cargo.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { $texts } = useNuxtApp() as any;
const imgPath = 'images/train_freight/cargo_types/';
const list = [
    {
        label: $texts.containers,
        text: $texts.cargoDescription1,
        img: imgPath + 'containers.svg',
        alt: '',
    },

    {
        label: $texts.refrigeratedCargo,
        text: $texts.cargoDescription2,
        img: imgPath + 'refrigerated.svg',
        alt: '',
    },

    {
        label: $texts.dangerousCargo,
        text: $texts.cargoDescription3,
        img: imgPath + 'dangerous.svg',
        alt: '',
    },
    {
        label: $texts.passengerCars,
        text: $texts.cargoDescription4,
        img: imgPath + 'car.svg',
        alt: '',
    },

    {
        label: $texts.generalCargo,
        text: $texts.cargoDescription5,
        img: imgPath + 'general.svg',
        alt: '',
    },
    {
        label: $texts.trucksAndSpecialEquipment,
        text: $texts.cargoDescription6,
        img: imgPath + 'truck.svg',
        alt: '',
    },
];
</script>

<style scoped lang="scss">
img {
    max-width: 48px;
    align-self: flex-start;
}
h2 {
    font-size: 24px;
    line-height: 28px;
}
.cargo-types__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-top: 32px;
}
.cargo-type {
    display: flex;
    gap: 24px;
}
.cargo-text {
    display: flex;
    flex-direction: column;
    gap: 6px;
}
p {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: var(--text-secondary);
}
h5 {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 1.2%;
}

@media (min-width: $tablet-breakpoint) {
    h2 {
        font-size: 32px;
        line-height: 40px;
    }
    .cargo-type {
        flex-direction: column;
    }
    .cargo-types__container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;
        margin-top: 40px;
    }
    img {
        max-width: 80px;
        width: 80px;
    }
}
@media (min-width: $desktop-breakpoint) {
    h2 {
        font-weight: 700;
        font-size: 36px;
        line-height: 36px;
    }
    .cargo-types__container {
        margin-top: 42px;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 80px;
        row-gap: 42px;
    }
    p,
    h5 {
        text-align: center;
    }

    .cargo-type {
        width: 100%;
        align-items: center;
    }
    img {
        align-self: center;
    }
}
</style>
