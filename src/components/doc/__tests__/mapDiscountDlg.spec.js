import mapDiscountDlg from '../mapDiscountDlg.js';

describe('mapDiscountDlg', () => {
  it('map to array', ()=> {
    let discounts = [];
    mapDiscountDlg.forEach((value, key) => {
      discounts.push(`<MenuItem key=${key} title=${value} />`);
    });
    expect(discounts[0]).toEqual('<MenuItem key=DLG_DISCOUNT_PERCENT title=Процентная скидка на выписку />');
    expect(discounts[1]).toEqual('<MenuItem key=DLG_DISCOUNT_PERCENT_ON_PRODUCT title=Процентная скидка на товар />');
    expect(discounts[2]).toEqual('<MenuItem key=DLG_DISCOUNT_BY_GROUPT title=Скидка по группе товаров />');
    expect(discounts[3]).toEqual('<MenuItem key=DLG_DISCOUNT_SUMMA title=Скидка на сумму />');
    expect(discounts[4]).toEqual('<MenuItem key=DLG_PAY_BONUSCARD title=Скидка по бонусной карте />');
  });
});
