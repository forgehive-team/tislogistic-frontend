<template>
    <div class="cookie-container">
        <div class="cookie-message">
            <p>
                We use cookies to understand how you interact with the website.
                To learn more about this, you can check out our
                <NuxtLink to="/privacy-policy" target="_blank"
                    >privacy policy</NuxtLink
                >.
            </p>
            <button class="animate-red cookie-btn" @click="handleAgree">
                I understand
            </button>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(['agreed']);

function handleAgree() {
    emit('agreed');
}
</script>

<style lang="scss" scoped>
.cookie-container {
    position: fixed;
    padding: 0 16px;
    bottom: 16px;
    left: 0;
    right: 0;
    z-index: 9999;
    display: flex;
}

.cookie-message {
    display: flex;
    width: 100%;
    background: var(--main-primary);
    border: solid 1px var(--border-primary);
    border-radius: 24px;
    position: relative;
    flex-direction: column;
    gap: 20px;
    padding: 20px 12px 12px 12px;
}
p {
    color: var(--text-secondary);
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0%;
    vertical-align: middle;
}
a {
    text-decoration: underline;
}
.cookie-btn {
    width: 100%;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    font-weight: 500;
    font-size: 14px;
    height: 44px;
    color: white;
}
@media (min-width: $tablet-breakpoint) {
    p {
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 1%;
        max-width: 381px;
    }
    .cookie-message {
        max-width: 728px;
        flex-direction: row;
        gap: 20px;
        padding: 32px;
        justify-content: space-between;
        margin-left: auto;
    }
    .cookie-container {
        padding: 0 32px;
    }
    .cookie-btn {
        margin-top: auto;
    }
}
@media (min-width: $desktop-breakpoint) {
    .cookie-container {
        padding: 0 64px;
    }
}
</style>
