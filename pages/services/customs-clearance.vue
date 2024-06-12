<template>
    <div>
        <section>
            <div class="bg white-theme-only gradient-bg"></div>
            <div>
                <SharedBreadCrumbs class="breadcrumbs" />
                <div class="top">
                    <h1>Customs clearance</h1>
                    <p>
                        Explain the details of legislation and conduct foreign
                        economic activity. If necessary replace the logistics
                        and purchasing department for the business - we take to
                        outsource these functional responsibilities. Resolve any
                        issues and problems related to the organisation and
                        international freight transport.
                    </p>
                </div>

                <p class="text">
                    With our company you get a team of experienced specialists.
                    The staff has years of experience working with customs and
                    transport, certification and other permitting authorities.
                    We act as a licensing representative (broker) in many
                    transport hubs. In particular, Russian ports of St.
                    Petersburg, Vladivostok and Eastern, land border crossings
                    between the Russian Federation and the Сhina.
                </p>

                <h2>What services do we provide?</h2>
                <ul>
                    <li>
                        Advise on the application of relevant legislation and
                        calculation of duties.
                    </li>
                    <li>
                        Assistance with temporary export or import of goods.
                    </li>
                    <li>Compile foreign trade contracts.</li>
                    <li>Goods declaration.</li>
                    <li>Registration of transaction passports.</li>
                    <li>
                        Preparation and filing of the necessary package of
                        documents.
                    </li>
                    <li>
                        Accompanying or representing for the earliest and the
                        proper conduct of customs clearance procedures.
                    </li>
                    <li>
                        Acting as contract holder. Taking over activities
                        required at conclusion foreign economic transaction.
                        Signing a contract with by a foreign counterparty and
                        the importation of goods is carried out on our behalf,
                        but on behalf of the client. We buy products from abroad
                        ourselves, and then we're handing it over to you on
                        Russian territory. In doing so collect all required
                        documents, and pay for own account customs clearance,
                        VAT and import (import) duty. You eliminate the need to
                        even keep government interactions to a minimum bodies.
                        You don't have to register as of an economic activity,
                        to enter into a currency transaction and to transfer
                        money for goods to a foreign seller.
                    </li>
                </ul>
                <p>
                    You can always clarify the conditions and procedure of
                    customs clearance For this purpose, please contact TIS
                    LOGISTICS. To do this, contact our managers by phone 8 800
                    234-80-70.
                </p>
                <div class="bottom">
                    <SharedServicesLinks />
                </div>
                <SharedGoUp />
            </div>
        </section>
    </div>
</template>

<script setup>
const { $texts } = useNuxtApp();
definePageMeta({
    breadcrumbTitle: 'Customs Clearance',
});
useServerSeoMeta({
    title: 'Customs Clearance',
    description:
        'We can help you navigate the nuances of legislation and the specifics of foreign economic activity. We can serve as your outsourced procurement and logistics department, addressing all issues related to organizing international freight transportation.',
    keywords:
        $texts.seoKeywordsBase +
        ' customs clearance, customs clearance Moscow, cost of customs clearance, calculation of customs duties, customs broker services',
});
</script>
<style
    src="@/assets/scss/pages/TamozhennoeOformlenie.scss"
    lang="scss"
    scoped
></style>
