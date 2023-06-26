/* eslint-disable import/no-named-as-default-member */
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

export default function transformDate(initialDate: string) {
    dayjs.locale('ru');
    const parsedDate = dayjs(initialDate, 'YYYY-MM-DD HH:mm:ss');
    const outputFormat = 'DD MMMM YYYY';
    const formattedDate = parsedDate.format(outputFormat);
    return formattedDate;
}
