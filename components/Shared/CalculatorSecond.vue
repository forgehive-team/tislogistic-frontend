<template>
    <div class="calculator__input-container">
        <input class="calculator__input" :placeholder="$texts.phone" />
        <label class="calculator__input-label">{{ $texts.phone }}</label>
    </div>
    <div class="calculator__input-container">
        <input class="calculator__input" :placeholder="$texts.email" />
        <label class="calculator__input-label">{{ $texts.email }}</label>
    </div>

    <p class="calculator__email-note">
        {{ $texts.calculatorEmailNote }}
    </p>

    <div class="calculator__bottom calculator__bottom_no-margin">
        <button class="calculator__button calculator__button_white">
            <span class="calculator__arrow-left"> {{ $texts.back }} </span>
        </button>
        <div class="calculator__send-container">
            <button class="calculator__button animate_red">
                <span class="calculator__arrow-right"> {{ $texts.next }}</span>
            </button>
            <div class="calculator__confidentiality">
                {{ $texts.calculatorConfidentiality }}
            </div>
        </div>
    </div>
</template>

<style
    lang="scss"
    src="@/assets/scss/components/Shared/DeliveryCalculator.scss"
    scoped
></style>
