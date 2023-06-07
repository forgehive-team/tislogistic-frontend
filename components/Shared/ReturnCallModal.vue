<template>
    <div
        class="blur_shown return-bg visibility-animate"
        @click="closeFromBoundaries"
    >
        <SharedReturnCallForm
            :title="$texts.returnCall"
            :modal="true"
            :rental-containers="false"
            :sumbit-btn-text="$texts.send"
        />
    </div>
</template>

<script>
export default {
    setup() {
        const returnCallShown = useReturnCallModal();
        return {
            returnCallShown,
        };
    },
    methods: {
        closeFromBoundaries(e) {
            if (e.target === e.currentTarget) {
                this.returnCallShown = false;
            }
        },
    },
};
</script>

<style
    src="@/assets/scss/components/Shared/ReturnCallModal.scss"
    lang="scss"
    scoped
></style>
