<template>
    <div
        class="blur_shown calculator-blur visibility-animate"
        @click="closeFromBoundaries"
        :class="{ visible: isVisible }"
    >
        <div class="calc-popup">
            <button class="calc-popup__close" @click="$emit('close')">
                <IconsClosePopup :alt="$texts.close" />
            </button>
            <div class="calculator">
                <h2 class="calculator__title mb-2">
                    {{ $texts.confirmSending }}
                </h2>

                <div class="intent__body">
                    <h3 class="warning-title">{{ $texts.attention }}</h3>
                    <p>
                        {{ $texts.weDontShip }}
                    </p>
                    <div class="btns-container">
                        <button
                            class="calculator__button calculator__button_white"
                            @click="$emit('close')"
                        >
                            {{ $texts.cancel }}
                        </button>

                        <button
                            class="calculator__button animate-red"
                            @click="$emit('confirm')"
                        >
                            {{ $texts.send }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, defineProps } from 'vue';

const props = defineProps(['isShown']);
const emit = defineEmits(['confirm', 'close']);

const closeFromBoundaries = (e) => {
    if (e.target === e.currentTarget) {
        emit('close');
    }
};

const isVisible = ref(false);

onMounted(() => {
    setTimeout(() => {
        isVisible.value = true;
    }, 10);
});
</script>

<style
    src="@/assets/scss/components/Shared/DeliveryCalculator.scss"
    lang="scss"
    scoped
></style>

<style lang="scss" scoped>
.blur_shown {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.intent__body {
    margin-top: 16px;
    padding: 24px;
    display: block;
    border-radius: 16px;
    background: white;
    h3 {
        text-align: center;
        font-weight: 500;
        font-size: 32px;
        color: $red-strong;
    }
    p {
        color: #1b1b1f;
        font-size: 20px;
        // text-align: center;
        margin-top: 16px;
    }
}
.calc-popup {
    max-width: 704px;
}
.btns-container {
    display: flex;
    margin-top: 16px;
    justify-content: flex-end;
    gap: 16px;
}

@media (max-width: $mobile-breakpoint) {
    .calculator__title {
        font-size: 20px;
    }
    .intent__body {
        h3 {
            font-size: 28px;
        }
    }
    .btns-container {
        flex-direction: column;
    }
}
</style>
