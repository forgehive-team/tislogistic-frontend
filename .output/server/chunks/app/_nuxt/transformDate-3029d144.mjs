import dayjs from 'dayjs';

function transformDate(initialDate) {
  dayjs.locale("ru");
  const parsedDate = dayjs(initialDate, "YYYY-MM-DD HH:mm:ss");
  const outputFormat = "DD MMMM YYYY";
  const formattedDate = parsedDate.format(outputFormat);
  return formattedDate;
}

export { transformDate as t };
//# sourceMappingURL=transformDate-3029d144.mjs.map
