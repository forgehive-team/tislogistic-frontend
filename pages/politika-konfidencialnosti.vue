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
                <br />
                <!-- <a
                    class="download"
                    href="/politika-konfidencialnosti.pdf"
                    download="Политика_обработки_ПД_от_01.08.2023.pdf"
                    target="_blank"
                    >Политика_обработки_ПД_от_01_08_2023.pdf</a
                > -->

                <a
                    class="download"
                    href="/politika-konfidencialnosti.pdf"
                    download="Политика_обработки_ПД.pdf"
                    target="_blank"
                    >Политика обработки ПД.pdf</a
                >

                <br />
                <br />

                <a
                    class="download"
                    href="/polozhenie-ob-obrabotke-pd.pdf"
                    download="Положение об обработке ПД.pdf"
                    target="_blank"
                    >Положение_об_обработке_ПД.pdf</a
                >

                <br />
                <br />

                <a
                    class="download"
                    href="/prikaz-pd.pdf"
                    download="Приказ_об_утверждении_Политики_обработки_ПНД_и_Положения_об_обработке.pdf"
                    target="_blank"
                    >Приказ об утверждении Политики обработки ПНД и Положения об
                    обработке.pdf</a
                >
            </div>
        </section>
    </div>
</template>
<script setup>
definePageMeta({
    breadcrumbTitle: 'Политика конфиденциальности',
});
useServerSeoMeta({
    title: 'Политика конфиденциальности',
    description: '',
});
</script>

<style src="@/assets/scss/pages/LegalPage.scss" lang="scss" scoped></style>
