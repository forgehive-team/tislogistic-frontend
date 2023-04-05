<template>
    <div class="branch">
        <h5 class="branch__city">{{ city }}</h5>
        <div class="branch__info">
            <a :href="phoneRef" class="animate-yellow">{{ phone }}</a>
            <a :href="emailRef" class="animate-yellow">{{ email }}</a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        city: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
    },
    computed: {
        emailRef() {
            return `mailto:${this.email}`;
        },
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
