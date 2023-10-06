const imgPath = 'images/services/';

// title is a key to get the string from proxy
// where the nuxt instance is available
export const servicesList = [
    {
        title: 'multimodalFreight',
        icon: imgPath + 'cargo_forwarding.svg',
        to: `/services/multimodalnye-perevozki`,
    },
    {
        title: 'seaFreight',
        icon: imgPath + 'sea_freight.svg',
        to: `/services/morskie-gruzoperevozki`,
    },
    {
        title: 'trainFreight',
        icon: imgPath + 'train_freight.svg',
        to: `/services/zheleznodorozhnye-perevozki`,
    },
    {
        title: 'carFreight',
        icon: imgPath + 'car_freight.svg',
        to: `/services/avtomobilnye-perevozki`,
    },
    {
        title: 'airFreight',
        icon: imgPath + 'air_freight.svg',
        to: `/services/aviaperevozki`,
    },

    {
        title: 'projectLogistics',
        icon: imgPath + 'project_logistics.svg',
        to: '/services/project-logistics',
    },
    {
        title: 'customsDeclarations',
        icon: imgPath + 'customs_declarations.svg',
        to: `/services/tamozhennoe-oformlenie`,
    },
    {
        title: 'rentalContainersTitle',
        icon: imgPath + 'rental_containers.svg',
        to: `/services/arenda-konteynerov`,
    },
    {
        title: 'foreignActivity',
        icon: imgPath + 'foreign_activity.svg',
        to: `/services/vneshneekonomicheskaya-deyatelnost`,
    },
    {
        title: 'chinaCarDelivery',
        icon: imgPath + 'china_car_delivery.svg',
        to: `/`,
        disabled: true,
    },
    {
        title: 'chinaSearch',
        icon: imgPath + 'china_search.svg',
        to: `/`,
        disabled: true,
    },
    {
        title: 'veterinarianControl',
        icon: imgPath + 'veterinarian_control.svg',
        to: `/`,
        disabled: true,
    },
];
