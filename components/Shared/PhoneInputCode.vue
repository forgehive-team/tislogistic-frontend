<template>
    <div class="phonecode-selected" @click="optionsShown = !optionsShown">
        <nuxt-img
            :src="`images/flags_codes/${getCodeByCode}.svg`"
            :width="20"
            :height="20"
        />
        <span>{{ val.phone_code }}</span>
    </div>

    <div v-if="optionsShown" class="phonecode-options">
        <div
            v-for="country in countryCodes"
            :key="country.code"
            class="phonecode-option"
            @click="selectOption(country)"
        >
            <nuxt-img
                :src="`images/flags_codes/${country.code}.svg`"
                :width="20"
                :height="20"
            />
            <span>{{ country.name }}</span>
            <span class="codes-end">{{ country.phone_code }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { countryCodes } from '~~/config/phone_country_code';
const props = defineProps<{
    val: any;
}>();

const emit = defineEmits(['update']);

const optionsShown = ref(false);

const getCodeByCode = computed(() => {
    if (props.val.phone_code === '+7') return 'RU';
    if (props.val.phone_code === '+86') return 'CN';
    return countryCodes.find((el) => el.phone_code === props.val.phone_code)
        ?.code;
});

const selectOption = (code: any) => {
    optionsShown.value = false;
    emit('update', code);
};
</script>

<style
    src="@/assets/scss/components/Shared/PhoneCode.scss"
    lang="scss"
    scoped
></style>
