<template>
    <div>
        <section class="consolidated-cargo_main">
            <div
                :style="background"
                class="bg consolidated-cargo_bg"
                :title="seoAlt"
                :aria-label="seoAlt"
            ></div>
            <SharedServicesHeader
                buttonless
                class="_cargo yellow-inside underline-inside"
                :title="$texts.consolidatedCargoTitle"
                :subtitle="`${$texts.consolidatedCargoDescription}<br/><br/>${$texts.consolatatedCargoContactsHTML}`"
            />
        </section>
        <section class="consolidated-cargo_advantages">
            <SbornieGruzyAdvantages />
        </section>
        <section>
            <SharedTickTextList
                :items="targetClients"
                :title="$texts.targetClients"
            />
        </section>
        <section>
            <SbornieGruzyPossibilitesMap />
        </section>
        <section>
            <SbornieGruzyClientWork />
        </section>

        <section>
            <SharedTickTextList
                :items="throughoutTheWayTexts"
                :title="$texts.throughoutTheWay"
            />
        </section>

        <section>
            <SbornieGruzyContacts />
        </section>

        <section><SbornieGruzyFrequentQuestions /></section>

        <section>
            <SharedServicesLinks class="other" />
        </section>
    </div>
</template>

<script setup></script>

<script>
import {
    targetClients,
    throughoutTheWayTexts,
} from '~~/config/consolidatedCargoList';
export default {
    setup() {
        const { $texts } = useNuxtApp();
        definePageMeta({
            breadcrumbTitle: 'Consolidated cargo',
        });
        useServerSeoMeta({
            title: $texts.consolidatedCargo,
            ogTitle: $texts.consolidatedCargo,
            description: $texts.consolidatedCargoDescription,
            ogDescription: $texts.consolidatedCargoDescription,
            keywords:
                $texts.seoKeywordsBase +
                $texts.consolidatedCargoTitle +
                $texts.seoServicesKeywordsBase,
        });
        return {
            targetClients,
            throughoutTheWayTexts,
        };
    },
    computed: {
        seoAlt() {
            const { $texts } = useNuxtApp();
            return $texts.consolidatedCargoTitle + $texts.companyNameSeo;
        },
        background() {
            const $img = useImage();
            const imgUrl = $img('images/cargo_background.png', {
                format: 'webp',
                preload: true,
                sizes: 'md:768px lg:1024px xl:1280px xxl:1512px',
                quality: 100,
                alt: this.seoAlt,
            });
            return {
                backgroundImage: `url('${imgUrl}')`,
            };
        },
    },
};
</script>

<style
    src="@/assets/scss/pages/ConsolidatedCargo.scss"
    lang="scss"
    scoped
></style>
