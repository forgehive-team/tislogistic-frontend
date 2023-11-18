<template>
    <div class="static-map">
        <IconsCoastalFreight
            class="bg-container"
            :alt="$texts.coastalShipping + ' from' + $texts.companyNameSeo"
        />
        <h2>{{ $texts.coastalShipping }}</h2>
        <p>{{ $texts.coastalShippingNote }}</p>
        <h3>{{ $texts.coastalAvailableDestinations }}</h3>
        <ul>
            <li v-for="(option, key) in coastalDestinations" :key="key">
                <span v-if="option.title">{{ option.title }}</span>
                {{ option.text }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { coastalDestinations } from '~~/config/seaFreightList';
</script>

<style
    src="@/assets/scss/components/MorskieGruzoperevozki/CoastalFreight.scss"
    lang="scss"
    scoped
></style>
