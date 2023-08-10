<template>
    <div>
        <button @click="scrollTop">
            Наверх
            <img src="@/assets/icons/arrow-up-bold.svg" />
        </button>
    </div>
</template>

<script setup>
const scrollTop = () => {
    if (process.client) {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }
};
</script>

<style lang="scss" scoped>
div {
    margin-top: 42px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
}
button {
    padding: 10px 20px;
    background: $red;
    border-radius: 999px;
    color: white;
    display: flex;
    gap: 6px;
    align-items: center;
    justify-content: center;
    justify-self: flex-end;
    width: 100px;
    font-weight: 500;
}
</style>
