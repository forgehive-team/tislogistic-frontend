<template>
    <div>
        <div class="phone-input-container">
            <SharedPhoneInputCode
                :val="countrySelected"
                @update="(c) => (countrySelected = c)"
            />
            <input
                class="phone__input-trans"
                :placeholder="$texts.phone"
                v-model="userInput"
            />
            <label class="calculator__input-label">{{ $texts.phone }}</label>
        </div>
        <div v-if="errorMes" class="calculator__error-message">
            {{ errorMes }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { countryCodes } from '~~/config/phone_country_code';
const { $texts } = useNuxtApp() as unknown as any;

const props = defineProps<{
    val: string;
    errorMes: string | undefined | null;
}>();

const emit = defineEmits(['fieldUpd']);

const countrySelected = ref(countryCodes[1]);
const userInput = ref('');

watchEffect(() => {
    emit('fieldUpd', countrySelected.value.phone_code + userInput.value);
});
</script>

<style
    src="@/assets/scss/components/Shared/DeliveryCalculator.scss"
    lang="scss"
    scoped
></style>
