<template>
    <div class="calculator__body">
        <div class="calculator__desktop-layout-container">
            <div class="calculator__destinations">
                <button class="calculator__switch tablet-desktop-only">
                    <img src="@/assets/icons/switch-arrows.svg" />
                </button>
                <div class="calculator__destination">
                    <div class="calculator__input-container">
                        <img
                            src="@/assets/icons/search-red.svg"
                            class="calculator__search_icon"
                        />
                        <input
                            class="calculator__input calculator__input_icon-left"
                            :placeholder="$texts.from"
                        />
                        <label class="calculator__input-label">{{
                            $texts.from
                        }}</label>
                    </div>
                    <div class="calculator__suggestions">
                        <span>{{ $texts.dest1 }}</span>
                        <span>{{ $texts.dest2 }}</span>
                        <span class="tablet-desktop-only">{{
                            $texts.dest3
                        }}</span>
                    </div>
                </div>
                <div class="calculator__destination">
                    <div class="calculator__input-container">
                        <img
                            src="@/assets/icons/search-red.svg"
                            class="calculator__search_icon"
                        />
                        <input
                            class="calculator__input calculator__input_icon-left"
                            :placeholder="$texts.to"
                        />
                        <label class="calculator__input-label">{{
                            $texts.to
                        }}</label>
                    </div>
                    <div class="calculator__suggestions">
                        <span>{{ $texts.dest4 }}</span>
                        <span>{{ $texts.dest5 }}</span>
                        <span class="tablet-desktop-only">{{
                            $texts.dest6
                        }}</span>
                    </div>
                </div>
            </div>
            <div class="calculator__input-container">
                <img
                    src="@/assets/icons/info.svg"
                    class="calculator__info_icon"
                />
                <input
                    class="calculator__input"
                    :placeholder="$texts.parcelDescription"
                />
                <label class="calculator__input-label">{{
                    $texts.parcelDescription
                }}</label>
            </div>
        </div>
        <div class="calculator__bottom">
            <div class="tablet-desktop-only calculator__note">
                {{ $texts.calculatorNote }}
            </div>
            <button
                class="calculator__button animate_red"
                @click="goSecondStep"
            >
                <span class="calculator__arrow-right">
                    {{ $texts.next }}
                </span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        goSecondStep: {
            type: Function,
            required: true,
        },
    },
};
</script>

<style
    lang="scss"
    src="@/assets/scss/components/Shared/DeliveryCalculator.scss"
    scoped
></style>
