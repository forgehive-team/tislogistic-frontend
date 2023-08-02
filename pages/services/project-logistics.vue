<template>
    <main>
        <section class="project-logistics-main">
            <div
                :style="background"
                class="bg project-logistics-bg"
                :title="$texts.seoAltProjectLogistics"
            ></div>
            <ProjectLogisticsMainHeader />
        </section>
        <section class="project-logistics-complex-organization">
            <ProjectLogisticsComplexOrganization />
        </section>
        <section id="scroll-target" class="project-logistics-any-delivery">
            <ProjectLogisticsAnyDelivery />
        </section>
        <section class="project-logistics-stats">
            <SharedKeyIndicators
                :title="$texts.keyIndicators"
                :in-services="true"
            />
        </section>
        <section class="project-logistics-projects">
            <HomeCompanyProjects :in-services="true" />
        </section>
        <section class="project-logistics-calculator" :style="bottomBackground">
            <h2>
                {{ $texts.ourTask }}<span>{{ $texts.ourGoal }}</span>
            </h2>
            <div class="calculator__back-blur">
                <SharedDeliveryCalculator />
                <IconsCompanyLogo class="logo" />
            </div>
            <SharedServicesLinks class="other" />
        </section>
    </main>
</template>

<script>
export default {
    setup() {
        const { $texts } = useNuxtApp();
        definePageMeta({
            breadcrumbTitle: 'Проектная логистика',
        });
        useServerSeoMeta({
            title: $texts.projectLogistics,
            ogTitle: $texts.projectLogistics,
            description: $texts.seoProjectLogisticsDescription,
            ogDescription: $texts.seoProjectLogisticsDescription,
            keywords:
                $texts.seoKeywordsBase +
                $texts.seoProjectLogisticsKeywords +
                $texts.seoServicesKeywordsBase,
        });
        const isWhiteTheme = useTheme();
        return {
            isWhiteTheme,
        };
    },
    computed: {
        background() {
            const $img = useImage();
            const imgUrl = $img('images/project_logistics_background.png', {
                format: 'webp',
                preload: true,
                sizes: 'xxl:1512',
                quality: 100,
            });
            return {
                backgroundImage: `url('${imgUrl}')`,
            };
        },
        bottomBackground() {
            if (this.isWhiteTheme) return '';
            const $img = useImage();
            const imgUrl = $img('images/main_background.jpg', {
                format: 'webp',
            });
            return {
                backgroundImage: `linear-gradient(180deg, #1B1B1F 12.17%, rgba(20, 20, 23, 0.829382) 24.78%, rgba(0, 0, 0, 0.61) 45.5%), url('${imgUrl}')`,
            };
        },
    },
};
</script>

<style
    src="@/assets/scss/pages/ProjectLogistics.scss"
    lang="scss"
    scoped
></style>
