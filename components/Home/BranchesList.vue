<template>
    <div class="branches">
        <h2 class="branches__title">{{ $texts.branchesTitle }}</h2>
        <div class="branches__wrapper">
            <div class="branches__container branches__container_left">
                <HomeBranchesItem
                    v-for="item in branchList1"
                    :key="item.city"
                    :city="item.city"
                    :phone="item.phone"
                    :email="item.email"
                />
            </div>
            <div class="branches__container branches__container_right">
                <HomeBranchesItem
                    v-for="item in branchList2"
                    :key="item.city"
                    :city="item.city"
                    :phone="item.phone"
                    :email="item.email"
                />
            </div>
        </div>
        <div class="branches__background mobile-tablet-only"></div>
    </div>
</template>

<script>
export default {
    computed: {
        branchList1() {
            const { $texts } = useNuxtApp();
            return [
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
            ];
        },
        branchList2() {
            const { $texts } = useNuxtApp();
            return [
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
        },
    },
};
</script>

<style
    src="@/assets/scss/components/Home/BracnhesList.scss"
    lang="scss"
    scoped
></style>
