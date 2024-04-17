import { texts } from './texts';
const imgPath = 'images/services/';
export const servicesList = [
    {
        title: texts.multimodalFreight,
        icon: imgPath + 'cargo_forwarding.svg',
        to: `/services/multimodal-transportation`,
    },
    {
        title: texts.seaFreight,
        icon: imgPath + 'sea_freight.svg',
        to: `/services/sea-freight`,
    },
    {
        title: texts.trainFreight,
        icon: imgPath + 'train_freight.svg',
        to: `/services/railway-freight`,
    },
    {
        title: texts.carFreight,
        icon: imgPath + 'car_freight.svg',
        to: `/services/automobile-transportation`,
    },
    {
        title: texts.airFreight,
        icon: imgPath + 'air_freight.svg',
        to: `/services/air-freight`,
    },
    {
        title: texts.projectLogistics,
        icon: imgPath + 'project_logistics.svg',
        to: '/services/project-logistics',
    },
    {
        title: texts.terminalServices,
        icon: imgPath + 'rental_containers.svg',
        to: '/services/terminalnie-uslugi',
    },
    {
        title: texts.customsDeclarations,
        icon: imgPath + 'customs_declarations.svg',
        to: `/services/customs-clearance`,
    },
    {
        title: texts.rentalContainersTitle,
        icon: imgPath + 'rental_containers.svg',
        to: `/services/rental-containers`,
    },
    {
        title: texts.foreignActivity,
        icon: imgPath + 'foreign_activity.svg',
        to: `/services/foreign-economic-activity`,
    },
    // {
    //     title: texts.storage,
    //     icon: imgPath + 'storage.svg',
    //     to: `/services/otvetstvennoe-khranenie`,
    // },
    // {
    //     title: texts.cargoInsurance,
    //     icon: imgPath + 'cargo_insurance.svg',
    //     to: `/services/strakhovanie-gruzov`,
    // },
    // {
    //     title: texts.productsCertifying,
    //     icon: imgPath + 'products_certifying.svg',
    //     to: `/services/sertifikaciya-produkcii`,
    // },
    {
        title: texts.chinaCarDelivery,
        icon: imgPath + 'china_car_delivery.svg',
        to: `/`,
        disabled: true,
    },
    {
        title: texts.chinaSearch,
        icon: imgPath + 'china_search.svg',
        to: `/`,
        disabled: true,
    },
    {
        title: texts.veterinarianControl,
        icon: imgPath + 'veterinarian_control.svg',
        to: `/`,
        disabled: true,
    },
];
