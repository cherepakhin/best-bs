import { strToDecimal, strToDate } from '../constants.js';

/**
 * Замена строковых чисел на настоящие числа
 * @param  {[type]} doc - Документ
 * @return {[type]}       [description]
 */
export const convertDocToJS = function (json) {
  json.summaIn = json.summaIn ? strToDecimal(json.summaIn) : 0;
  json.summaOut = json.summaOut ? strToDecimal(json.summaOut) : 0;
  json.ddate = strToDate(json.ddate);

  if (json.docItems != undefined) {
    json.docItems.forEach((item) => {
      item.qty = strToDecimal(item.qty);
      item.cenaIn = strToDecimal(item.cenaIn);
      item.cenaOut = strToDecimal(item.cenaOut);
      item.summaIn = strToDecimal(item.summaIn);
      item.summaOut = strToDecimal(item.summaOut);
      item.price = strToDecimal(item.price);
    });
  }

  if (json.payments != undefined) {
    json.payments.forEach((item) => {
      item.summa = strToDecimal(item.summa);
      item.ddate = item.ddate.slice(0, 10);
    });
  }

  return json;
};
