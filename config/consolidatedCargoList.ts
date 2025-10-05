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
        title: 'Какие данные необходимы для расчета стоимости доставки?',
        answer: Answer1,
    },
    {
        title: 'Что такое Trucking fee?',
        answer: Answer2,
    },
    {
        title: 'Что такое Local charges?',
        answer: Answer3,
    },
    {
        title: 'Что такое O/F (Ocean Freight)?',
        answer: Answer4,
    },
    {
        title: 'Какие транзитные сроки?',
        answer: Answer5,
    },
    {
        title: 'Как формируется стоимость перевозки?',
        answer: Answer6,
    },
];

const advatnagesImgPath = 'images/consolidated_cargo/advantages/';
export const consolidatedCargoAdvantages = [
    {
        title: 'Стоимость',
        text: 'Оплата только за объем контейнера, который занимает ваш груз в контейнере',
        img: advatnagesImgPath + 'price.svg',
        alt: '',
    },
    {
        title: 'Еженедельные выходы',
        text: 'Еженедельное формирование контейнера, согласно расписанию линий',
        img: advatnagesImgPath + 'time.svg',
        alt: '',
    },
    {
        title: 'Скорость доставки',
        text: 'Сроки доставки сборного контейнера равны срокам доставки целого контейнера',
        img: advatnagesImgPath + 'speed.svg',
        alt: '',
    },
    {
        title: 'Различные типы груза',
        text: 'Пользуйтесь сборным контейнером в независимости от типа груза',
        img: advatnagesImgPath + 'cargo.svg',
        alt: '',
    },
    {
        title: 'Вариативность',
        text: 'Сборные отправки груза любым видом транспорта',
        img: advatnagesImgPath + 'globe.svg',
        alt: '',
    },
];

export const targetClients = [
    {
        id: 1,
        text: 'Для экспедиторских компаний с отсутствием собственного сборного сервиса',
    },
    {
        id: 2,
        text: 'Для любых лиц, готовых покупать продукцию внутри Китая по более низким ценам',
    },
    {
        id: 3,
        text: 'Для любых компаний, ищущих решение по доставке малого опта',
    },
    {
        id: 4,
        text: 'Для любых компаний, ввозящих образцы товаров для сертификационного органа',
    },
    {
        id: 5,
        text: 'Для любых компаний, основные партии которых, не вместились в целый контейнер',
    },
];

export const possibilitiesTexts = [
    {
        id: 1,
        text: 'Формируем собственные контейнера с нашего склада консолидации в г. Шанхай.',
    },
    {
        id: 2,
        text: 'Основной упор сделан на морскую отправку по направлению Китай – Владивосток.',
    },
    {
        id: 3,
        text: 'Найдем решение по доставке любого типа товара любым видом транспорта из любой точки мира.',
    },
];

const clientImgPath = 'images/consolidated_cargo/steps/';

export const clientSteps = [
    {
        id: 1,
        text: 'Забираем груз со склада грузоотправителя',
        img: clientImgPath + 'step1.svg',
    },
    {
        id: 2,
        text: 'Доставляем его на склад нашего агента',
        img: clientImgPath + 'step2.svg',
    },
    {
        id: 3,
        text: 'Формируем и отправляем контейнер в Россию',
        img: clientImgPath + 'step3.svg',
    },
    {
        id: 4,
        text: 'Встречаем в России и бережно расформировываем ',
        img: clientImgPath + 'step4.svg',
    },
    {
        id: 5,
        text: 'Доставляем по России и передаем груз в ваши руки',
        img: clientImgPath + 'step5.svg',
    },
];

export const throughoutTheWayTexts = [
    {
        id: 1,
        text: 'Информируем о статусе движения груза',
    },
    {
        id: 2,
        text: 'Коммуницируем с вами \n24/7',
    },
    {
        id: 3,
        text: 'Прозрачно предоставляем информацию',
    },
    {
        id: 4,
        text: 'Решаем любую возникшую проблему на всем пути следования',
    },
    {
        id: 5,
        text: 'Предлагаем альтернативные и эффективные способы доставки и упаковки груза',
    },
    {
        id: 6,
        text: 'Консультируем по любым вопросам касаемо сборных грузов',
    },
];
