import { sortPrices } from '../saleReducer.js';

let price1 = {
  product: {
    n: 1,
    name: 'Товар1'
  },
  cena: 2
};
let price2 = {
  product: {
    n: 2,
    name: 'Товар2'
  },
  cena: 1
};

describe('sortPrices', () => {
  it('Сортировка не указана -> Сортировать по названию', () => {
    let expectedPrices = [price1, price2];
    let actualPrices = sortPrices('', [price2, price1]);
    expect(actualPrices).toEqual(expectedPrices);
  });

  it('Сортировать по названию', () => {
    let expectedPrices = [price1, price2];
    let actualPrices = sortPrices('по названию', [price2, price1]);
    expect(actualPrices).toEqual(expectedPrices);
  });

  it('Сортировать по цене(по возрастанию)', () => {
    let expectedPrices = [price2, price1];
    let actualPrices = sortPrices('цене(по возрастанию)', [price1, price2]);
    expect(actualPrices).toEqual(expectedPrices);
  });

  it('Сортировать по цене(по убыванию)', () => {
    let expectedPrices = [price1, price2];
    let actualPrices = sortPrices('цене(по убыванию)', [price2, price1]);
    expect(actualPrices).toEqual(expectedPrices);
  });
});
