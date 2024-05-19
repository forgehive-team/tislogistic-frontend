<script setup>
const goHome = () => {
    navigateTo('/');
};
</script>

<template>
    <main id="error-page">
        <div>
            <section>
                <div class="bg white-theme-only gradient-bg"></div>
                <div class="flex-container">
                    <h1>404</h1>
                    <h2>{{ $texts.notFound }}</h2>
                    <button class="button animate-red" @click="goHome">
                        {{ $texts.backToHome }}
                    </button>
                </div>
            </section>
        </div>
    </main>
</template>

<style lang="scss">
$red: #b12925;
$red-strong: #8c0912;
$yellow: #f1b83b;
$shallow-gray: #686872;
$light-gray: #2c2c2c;
$gray: #2a2a2f;
$blue-gray: rgba(51, 51, 56, 1);
$dark-main: #1b1b1f;
$text-gray: #adadb9;
$text-dark-gray: #5c5c5c;
$almost-white: #fff;
$text-dark: #1e1e1e;

$max-width-desktop: 1248px;
$mobile-breakpoint: 768px;
$tablet-breakpoint: 768px;
$desktop-breakpoint: 1200px;
$desktop-large-breakpoint: 1366px;

#error-page {
    color: $text-dark;
    .flex-container {
        display: flex;
        flex-direction: column;
    }
    .gradient-bg {
        min-height: 100vh;
    }
    h1 {
        margin: 60px auto 0;
        font-size: 56px;
        line-height: 72px;
        -webkit-text-stroke: 2px $blue-gray;
        color: $yellow;
    }
    h2 {
        -webkit-text-stroke: 1px $blue-gray;
        margin: 0 auto 28px;
        color: $yellow;
    }
    .button {
        color: $almost-white;
        margin: 0 auto;
        width: 100%;
        display: flex;
        gap: 10px;
        justify-content: center;
        align-items: center;
        border-radius: 50px;
        font-weight: 500;
        font-size: 14px;
        height: 44px;
    }
    .animate-red {
        background: $red !important;
        transition: all 0.2s ease-in-out;
        &:hover {
            background: $red-strong !important;
        }
    }
    @media (min-width: $tablet-breakpoint) {
        .button {
            width: 280px;
        }
        h1 {
            margin-top: 80px;
        }
        h2 {
            margin-bottom: 38px;
        }
        .gradient-bg {
            min-height: 100vh;
        }
    }
    @media (min-width: $desktop-breakpoint) {
        h1 {
            margin-top: 120px;
            font-size: 72px;
            line-height: 90px;
        }
        .gradient-bg {
            min-height: 100vh;
        }
        h2 {
            margin-bottom: 42px;
        }
    }
}
</style>
