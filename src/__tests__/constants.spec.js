import { formatDate, formatMoney } from '../constants.js';

describe('constatnts', ()=> {
  it('Форматирование даты formatDate', ()=> {
    // let date = new Date();
    /*    console.log(typeof (date));
        console.log(formatDate(date));

        console.log(formatDate('2012-01-26T13:51:50.417Z'));
    */
    expect(formatDate('2012-01-26')).toBe('26.01.2012');
  });

  it('Форматирование чисел', ()=> {
    expect(formatMoney(1000.00)).toBe('1 000');
  });
});
