<template>
    <div @click="close">
        <img :src="props.img" />
    </div>
</template>

<script setup>
const props = defineProps(['img']);
const emit = defineEmits(['close']);
const close = () => {
    emit('close');
};
</script>

<style
    src="@/assets/scss/components/Shared/FullScreenImg.scss"
    lang="scss"
    scoped
></style>
