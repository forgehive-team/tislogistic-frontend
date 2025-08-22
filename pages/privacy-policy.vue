<template>
    <div>
        <section>
            <div class="bg white-theme-only gradient-bg"></div>
            <div>
                <SharedBreadCrumbs class="breadcrumbs" />

                <br />
                <br />
                <br />
                <br />
                <a
                    class="download"
                    href="/personal_data_processing_policy_EN.pdf"
                    download="Personal_Data_Processing_Policy_TIS_Logistic_EN.pdf"
                    target="_blank"
                    >Personal Data Processing Policy EN.pdf</a
                >

                <br />
                <br />
                <a
                    class="download"
                    href="/order_approving_the_PND.pdf"
                    download="Order_approving_the_PND_Processing_Policy_and_the_PND_Processing.pdf"
                    target="_blank"
                    >Order approving the PND Processing Policy and the PND
                    Processing.pdf</a
                >
            </div>
        </section>
    </div>
</template>

<script setup>
definePageMeta({
    breadcrumbTitle: 'Personal Data Processing Policy',
});
useServerSeoMeta({
    title: 'Personal Data Processing Policy',
    description: '',
});
</script>

<style src="@/assets/scss/pages/LegalPage.scss" lang="scss" scoped></style>
