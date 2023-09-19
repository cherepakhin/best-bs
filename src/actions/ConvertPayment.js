import { strToDecimal, strToDate } from '../constants.js';

/**
 * Замена строковых чисел на настоящие числа
 * @param  {[type]} payment - Платеж
 * @return {[type]}       [description]
 */
export const convertPaymentToJS = function (payment) {
  payment.summa = payment.summa ? strToDecimal(payment.summa) : 0;
  payment.ddate = strToDate(payment.ddate);
  return payment;
};
