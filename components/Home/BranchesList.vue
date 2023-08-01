<template>
    <div class="branches">
        <h2 class="branches__title">{{ $texts.branchesTitle }}</h2>
        <div class="branches__wrapper">
            <HomeBranchesItem
                v-for="item in branchesList"
                :key="item.city"
                :city="item.city"
                :phone="item.phone"
                :email="item.email"
            />
        </div>
        <div class="branches__background">
            <IconsBranchesMap />
        </div>
    </div>
</template>

<script setup>
const { $texts } = useNuxtApp();
const branchesList = [
    {
        city: $texts.moscow,
        phone: $texts.moscowPhone,
        email: $texts.moscowEmail,
    },
    {
        city: $texts.spb,
        phone: $texts.spbPhone,
        email: $texts.spbEmail,
    },
    {
        city: $texts.khabarovsk,
        phone: $texts.khabarovskPhone,
        email: $texts.khabarovskEmail,
    },
    {
        city: $texts.nakhodka,
        phone: $texts.nakhodkaPhone,
        email: $texts.nakhodkaEmail,
    },
    {
        city: $texts.vladivostok,
        phone: $texts.vladivostokPhone,
        email: $texts.vladivostokEmail,
    },
    {
        city: $texts.novosibirsk,
        phone: $texts.novosibirskPhone,
        email: $texts.novosibirskEmail,
    },
    {
        city: $texts.ussuriysk,
        phone: $texts.ussuriyskPhone,
        email: $texts.ussuriyskEmail,
    },
];
</script>

<style
    src="@/assets/scss/components/Home/BracnhesList.scss"
    lang="scss"
    scoped
></style>
