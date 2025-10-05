import {
    Answer1,
    Answer2,
    Answer3,
    Answer4,
    Answer5,
    Answer6,
} from '~~/components/SbornieGruzy/faq';
export const faqList = [
    {
        title: 'What data is required to calculate the delivery cost?',
        answer: Answer1,
    },
    {
        title: 'What is a Trucking fee?',
        answer: Answer2,
    },
    {
        title: 'What are Local charges?',
        answer: Answer3,
    },
    {
        title: 'What is O/F (Ocean Freight)?',
        answer: Answer4,
    },
    {
        title: 'What are the transit times?',
        answer: Answer5,
    },
    {
        title: 'How is the transportation cost formed?',
        answer: Answer6,
    },
];

const advatnagesImgPath = 'images/consolidated_cargo/advantages/';
export const consolidatedCargoAdvantages = [
    {
        title: 'Cost',
        text: 'Payment only for the container volume occupied by your cargo',
        img: advatnagesImgPath + 'price.svg',
        alt: '',
    },
    {
        title: 'Weekly departures',
        text: 'Weekly container formation according to shipping line schedules',
        img: advatnagesImgPath + 'time.svg',
        alt: '',
    },
    {
        title: 'Delivery speed',
        text: 'Transit times for consolidated containers are equal to those of full containers',
        img: advatnagesImgPath + 'speed.svg',
        alt: '',
    },
    {
        title: 'Various cargo types',
        text: 'Use consolidated containers regardless of the type of cargo',
        img: advatnagesImgPath + 'cargo.svg',
        alt: '',
    },
    {
        title: 'Versatility',
        text: 'Consolidated cargo shipments by any mode of transport',
        img: advatnagesImgPath + 'globe.svg',
        alt: '',
    },
];

export const targetClients = [
    {
        id: 1,
        text: 'For forwarding companies without their own consolidation service',
    },
    {
        id: 2,
        text: 'For anyone ready to purchase goods within China at lower prices',
    },
    {
        id: 3,
        text: 'For companies seeking solutions for small wholesale deliveries',
    },
    {
        id: 4,
        text: 'For companies importing product samples for certification authorities',
    },
    {
        id: 5,
        text: 'For companies whose main shipments do not fit into a full container',
    },
];

export const possibilitiesTexts = [
    {
        id: 1,
        text: 'We form our own containers from our consolidation warehouse in Shanghai.',
    },
    {
        id: 2,
        text: 'Our main focus is sea shipping along the China–Vladivostok route.',
    },
    {
        id: 3,
        text: 'We find solutions for delivering any type of cargo by any mode of transport from anywhere in the world.',
    },
];

const clientImgPath = 'images/consolidated_cargo/steps/';

export const clientSteps = [
    {
        id: 1,
        text: 'We pick up the cargo from the shipper’s warehouse',
        img: clientImgPath + 'step1.svg',
    },
    {
        id: 2,
        text: 'We deliver it to our agent’s warehouse',
        img: clientImgPath + 'step2.svg',
    },
    {
        id: 3,
        text: 'We consolidate and ship the container to Russia',
        img: clientImgPath + 'step3.svg',
    },
    {
        id: 4,
        text: 'We receive it in Russia and carefully deconsolidate it',
        img: clientImgPath + 'step4.svg',
    },
    {
        id: 5,
        text: 'We deliver across Russia and hand over the cargo to you',
        img: clientImgPath + 'step5.svg',
    },
];

export const throughoutTheWayTexts = [
    {
        id: 1,
        text: 'We inform you about the cargo movement status',
    },
    {
        id: 2,
        text: 'We communicate with you 24/7',
    },
    {
        id: 3,
        text: 'We provide information transparently',
    },
    {
        id: 4,
        text: 'We resolve any issues that arise along the entire route',
    },
    {
        id: 5,
        text: 'We offer alternative and efficient delivery and packaging solutions',
    },
    {
        id: 6,
        text: 'We provide consultations on all matters related to consolidated cargo',
    },
];
