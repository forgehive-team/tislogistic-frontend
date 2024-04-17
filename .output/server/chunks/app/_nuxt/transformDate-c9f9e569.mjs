import dayjs from 'dayjs';

function transformDate(initialDate) {
  dayjs.locale("en");
  const parsedDate = dayjs(initialDate, "YYYY-MM-DD HH:mm:ss");
  const outputFormat = "DD MMMM YYYY";
  const formattedDate = parsedDate.format(outputFormat);
  return formattedDate;
}

export { transformDate as t };
//# sourceMappingURL=transformDate-c9f9e569.mjs.map
