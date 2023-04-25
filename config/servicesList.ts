import { texts } from './texts';
const imgPath = 'images/services/';
export const servicesList = [
    {
        title: texts.seaFreight,
        icon: imgPath + 'sea_freight.svg',
        to: `/services/morskie-gruzoperevozki`,
    },
    {
        title: texts.trainFreight,
        icon: imgPath + 'train_freight.svg',
        to: `/services/zheleznodorozhnye-perevozki`,
    },
    {
        title: texts.carFreight,
        icon: imgPath + 'car_freight.svg',
        to: `/services/avtomobilnye-perevozki`,
    },
    {
        title: texts.airFreight,
        icon: imgPath + 'air_freight.svg',
        to: `/services/aviaperevozki`,
    },
    {
        title: texts.projectLogistics,
        icon: imgPath + 'project_logistics.svg',
        to: '/services/project-logistics',
    },
    {
        title: texts.customsDeclarations,
        icon: imgPath + 'customs_declarations.svg',
        to: `services/tamozhennoe-oformlenie`,
    },
    {
        title: texts.storage,
        icon: imgPath + 'storage.svg',
        to: `services/otvetstvennoe-khranenie`,
    },
    {
        title: texts.cargoForwarding,
        icon: imgPath + 'cargo_forwarding.svg',
        to: `services/ekspedirovanie-gruzov`,
    },
    {
        title: texts.cargoInsurance,
        icon: imgPath + 'cargo_insurance.svg',
        to: `services/strakhovanie-gruzov`,
    },
    {
        title: texts.productsCertifying,
        icon: imgPath + 'products_certifying.svg',
        to: `services/sertifikaciya-produkcii`,
    },
];
