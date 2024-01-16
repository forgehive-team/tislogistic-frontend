import dayjs from 'file:///Users/nikitamakovei/repos/tislogistic-frontend/node_modules/dayjs/dayjs.min.js';

function transformDate(initialDate) {
  dayjs.locale("ru");
  const parsedDate = dayjs(initialDate, "YYYY-MM-DD HH:mm:ss");
  const outputFormat = "DD MMMM YYYY";
  const formattedDate = parsedDate.format(outputFormat);
  return formattedDate;
}

export { transformDate as t };
//# sourceMappingURL=transformDate-3029d144.mjs.map
