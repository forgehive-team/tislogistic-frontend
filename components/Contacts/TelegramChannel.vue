<template>
    <div class="telegram">
        <h2>{{ $texts.telegramTitle }}</h2>
        <p>{{ $texts.telegramDescription }}</p>
        <HomeLinkUnderline :to="$texts.telegramLink" :blank="true">{{
            $texts.goToTelegram
        }}</HomeLinkUnderline>
        <nuxt-img src="images/telegram.png" format="webp" quality="100" />
    </div>
</template>

<style
    src="@/assets/scss/components/Contacts/TelegramChannel.scss"
    lang="scss"
    scoped
></style>
