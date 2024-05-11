<template>
    <div class="ceo-wrapper">
        <div class="ceo-container">
            <div class="photo-container photo-container_ceo" :style="ceoPhoto">
                <div class="person">
                    <p class="name">{{ $texts.ceoName }}</p>
                    <p class="ceo">{{ $texts.ceo }}</p>
                </div>
            </div>

            <div class="text-container">
                <p class="quote">{{ $texts.ceoQuote }}</p>

                <!-- MOBILE ONLY -->
                <div class="mobile-only mobile-content">
                    <div class="photo-container" :style="ceoPhoto"></div>
                    <p class="name">{{ $texts.ceoName }}</p>
                    <p class="ceo">{{ $texts.ceo }}</p>
                    <p class="ceo-phone">{{ $texts.ceoPhone }}</p>
                    <p class="ceo-email">{{ $texts.ceoEmail }}</p>
                </div>
                <!-- /MOBILE-ONLY -->
            </div>

            <div class="person-contacts">
                <p class="ceo-phone">{{ $texts.ceoPhone }}</p>
                <p class="ceo-email">{{ $texts.ceoEmail }}</p>
            </div>
        </div>

        <div class="ceo-container ceo-container_deputy">
            <div
                class="photo-container photo-container_deputy"
                :style="deputyPhoto"
            >
                <div class="person">
                    <p class="name">{{ $texts.deputyCeoName }}</p>
                    <p class="ceo">{{ $texts.deputyCeo }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const $img = useImage();
const ceoImgUrl = $img('images/ceo.png');
const ceoPhoto = `background-image: url('${ceoImgUrl}')`;
const deputyImgUrl = $img('images/deputy_ceo.png');
const deputyPhoto = `background-image: url('${deputyImgUrl}')`;
</script>

<style
    src="@/assets/scss/components/Contacts/SeoQuote.scss"
    lang="scss"
    scoped
></style>
