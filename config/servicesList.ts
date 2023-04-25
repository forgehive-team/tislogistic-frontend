import { texts } from './texts';
const imgPath = 'images/services/';
const redirectPath = texts.oldDomain + '/services';

export const servicesList = [
    {
        title: texts.seaFreight,
        icon: imgPath + 'sea_freight.svg',
        to: `${redirectPath}/morskie-gruzoperevozki`,
    },
    {
        title: texts.trainFreight,
        icon: imgPath + 'train_freight.svg',
        to: `${redirectPath}/zheleznodorozhnye-perevozki`,
    },
    {
        title: texts.carFreight,
        icon: imgPath + 'car_freight.svg',
        to: `${redirectPath}/avtomobilnye-perevozki`,
    },
    {
        title: texts.airFreight,
        icon: imgPath + 'air_freight.svg',
        to: `${redirectPath}/aviaperevozki`,
    },
    {
        title: texts.projectLogistics,
        icon: imgPath + 'project_logistics.svg',
    },
    {
        title: texts.customsDeclarations,
        icon: imgPath + 'customs_declarations.svg',
        to: `${redirectPath}/tamozhennoe-oformlenie`,
    },
    {
        title: texts.storage,
        icon: imgPath + 'storage.svg',
        to: `${redirectPath}/otvetstvennoe-khranenie`,
    },
    {
        title: texts.cargoForwarding,
        icon: imgPath + 'cargo_forwarding.svg',
        to: `${redirectPath}/ekspedirovanie-gruzov`,
    },
    {
        title: texts.cargoInsurance,
        icon: imgPath + 'cargo_insurance.svg',
        to: `${redirectPath}/strakhovanie-gruzov`,
    },
    {
        title: texts.productsCertifying,
        icon: imgPath + 'products_certifying.svg',
        to: `${redirectPath}/sertifikaciya-produkcii`,
    },
];
