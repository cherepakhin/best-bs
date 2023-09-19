import { CONST_ACTION } from '../../constants.js';

let mapDiscount = new Map();
mapDiscount.set(CONST_ACTION.DLG_DISCOUNT_PERCENT, 'Процентная скидка на выписку');
mapDiscount.set(CONST_ACTION.DLG_DISCOUNT_PERCENT_ON_PRODUCT, 'Процентная скидка на товар');
mapDiscount.set(CONST_ACTION.DLG_DISCOUNT_BY_GROUPT, 'Скидка по группе товаров');
mapDiscount.set(CONST_ACTION.DLG_DISCOUNT_SUMMA, 'Скидка на сумму');
mapDiscount.set(CONST_ACTION.DLG_PAY_BONUSCARD, 'Скидка по бонусной карте');

export default mapDiscount;
