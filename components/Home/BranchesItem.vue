<template>
    <div class="branch">
        <div class="info">
            <h5>{{ $texts.phone }}</h5>
            <a :href="phoneRef" class="animate-yellow">{{ phone }}</a>
        </div>
        <div class="info info_bottom">
            <h5>{{ $texts.address }}</h5>
            <p>{{ address }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        phone: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
    },
    computed: {
        phoneRef() {
            return `tel:${this.phone}`;
        },
    },
};
</script>
<style
    src="@/assets/scss/components/Home/BranchesItem.scss"
    lang="scss"
    scoped
></style>
