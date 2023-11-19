/* eslint-disable import/no-named-as-default-member */
import dayjs from 'dayjs';
import 'dayjs/locale/en';

export default function transformDate(initialDate: string) {
    dayjs.locale('en');
    const parsedDate = dayjs(initialDate, 'YYYY-MM-DD HH:mm:ss');
    const outputFormat = 'DD MMMM YYYY';
    const formattedDate = parsedDate.format(outputFormat);
    return formattedDate;
}
