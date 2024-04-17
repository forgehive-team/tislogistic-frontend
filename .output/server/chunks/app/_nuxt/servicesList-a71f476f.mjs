import { t as texts } from '../server.mjs';

const imgPath = "images/services/";
const servicesList = [
  {
    title: texts.multimodalFreight,
    icon: imgPath + "cargo_forwarding.svg",
    to: `/services/multimodalnye-perevozki`
  },
  {
    title: texts.seaFreight,
    icon: imgPath + "sea_freight.svg",
    to: `/services/morskie-gruzoperevozki`
  },
  {
    title: texts.trainFreight,
    icon: imgPath + "train_freight.svg",
    to: `/services/zheleznodorozhnye-perevozki`
  },
  {
    title: texts.carFreight,
    icon: imgPath + "car_freight.svg",
    to: `/services/avtomobilnye-perevozki`
  },
  {
    title: texts.airFreight,
    icon: imgPath + "air_freight.svg",
    to: `/services/aviaperevozki`
  },
  {
    title: texts.projectLogistics,
    icon: imgPath + "project_logistics.svg",
    to: "/services/project-logistics"
  },
  {
    title: texts.terminalServices,
    icon: imgPath + "rental_containers.svg",
    to: "/services/terminalnie-uslugi"
  },
  {
    title: texts.customsDeclarations,
    icon: imgPath + "customs_declarations.svg",
    to: `/services/tamozhennoe-oformlenie`
  },
  {
    title: texts.rentalContainersTitle,
    icon: imgPath + "rental_containers.svg",
    to: `/services/arenda-konteynerov`
  },
  {
    title: texts.foreignActivity,
    icon: imgPath + "foreign_activity.svg",
    to: `/services/vneshneekonomicheskaya-deyatelnost`
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
    icon: imgPath + "china_car_delivery.svg",
    to: `/`,
    disabled: true
  },
  {
    title: texts.chinaSearch,
    icon: imgPath + "china_search.svg",
    to: `/`,
    disabled: true
  },
  {
    title: texts.veterinarianControl,
    icon: imgPath + "veterinarian_control.svg",
    to: `/`,
    disabled: true
  }
];

export { servicesList as s };
//# sourceMappingURL=servicesList-a71f476f.mjs.map
