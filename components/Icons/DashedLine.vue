<template>
    <div class="container">
        <div class="dashed"></div>
    </div>
</template>

<style scoped lang="scss">
.container {
    height: 64px;
    width: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.dashed {
    width: 64px;
    border: none;
    height: 1px;
    background: #000;
    background: repeating-linear-gradient(
        90deg,
        rgba(199, 199, 199, 1),
        rgba(199, 199, 199, 1) 6px,
        transparent 6px,
        transparent 12px
    );
}
</style>
