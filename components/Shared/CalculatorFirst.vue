<template>
    <div class="calculator__destinations">
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
                <label class="calculator__input-label">{{ $texts.from }}</label>
            </div>
            <div class="calculator__suggestions">
                <span>{{ $texts.dest1 }}</span>
                <span>{{ $texts.dest2 }}</span>
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
                <label class="calculator__input-label">{{ $texts.to }}</label>
            </div>
            <div class="calculator__suggestions">
                <span>{{ $texts.dest1 }}</span>
                <span>{{ $texts.dest2 }}</span>
            </div>
        </div>
    </div>
    <div class="calculator__input-container">
        <img src="@/assets/icons/info.svg" class="calculator__info_icon" />
        <input
            class="calculator__input"
            :placeholder="$texts.parcelDescription"
        />
    </div>
    <div class="calculator__bottom">
        <!-- <div></div> -->
        <button class="calculator__button animate_red">
            {{ $texts.next }}
        </button>
    </div>
</template>

<style
    lang="scss"
    src="@/assets/scss/components/Shared/DeliveryCalculator.scss"
    scoped
></style>
