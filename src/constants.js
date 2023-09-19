export const CONST_ACTION = {
  ROUTING: 'ROUTING',

  INIT_VAR: 'INIT_VAR',

  PROGRESS_SHOW: 'PROGRESS_SHOW',
  PROGRESS_HIDE: 'PROGRESS_HIDE',

  OPEN_DIALOG: 'OPEN_DIALOG',
  CLOSE_DIALOG: 'CLOSE_DIALOG',

  DLG_PAYMENT: 'DLG_PAYMENT',
  DLG_MESSAGE: 'DLG_MESSAGE',

  GET_GROUPT: 'GET_GROUPT',
  SELECT_GROUPT: 'SELECT_GROUPT',

  GET_PRICES: 'GET_PRICES',
  RESORT_PRICES: 'RESORT_PRICES',
  SET_ON_REST: 'SET_ON_REST',

  CREATE_DOC: 'CREATE_DOC',
  SET_DOC: 'SET_DOC',

  SELECT_DOC: 'SELECT_DOC',
  SELECT_DATE_DOC: 'SELECT_DATE_DOC',

  DELETE_PAYMENT: 'DELETE_PAYMENT',
  CREATE_PAYMENT: 'CREATE_PAYMENT',
  SELECT_DATE_PAYMENT: 'SELECT_DATE_PAYMENT',

  DLG_DISCOUNT_PERCENT: 'DLG_DISCOUNT_PERCENT',
  DLG_DISCOUNT_PERCENT_ON_PRODUCT: 'DLG_DISCOUNT_PERCENT_ON_PRODUCT',
  DLG_DISCOUNT_BY_GROUPT: 'DLG_DISCOUNT_BY_GROUPT',
  DLG_DISCOUNT_SUMMA: 'DLG_DISCOUNT_SUMMA',

  DLG_REGISTER_BONUSCARD: 'DLG_REGISTER_BONUSCARD',
  DLG_INCREASE_BONUSCARD: 'DLG_INCREASE_BONUSCARD',
  DLG_PAY_BONUSCARD: 'DLG_PAY_BONUSCARD'
};

let url = { URL_SERVER: 'http://127.0.0.1:8000/rshop' };
if (process.env.NODE_ENV === 'production') {
  url = { URL_SERVER: 'http://m.el59.ru/rshop' };
}

// let url = { URL_SERVER: 'http://m.el59.ru/rshop' };
export const INITVAR = url;

/**
 * Форматирование даты
 * @param  {Date} ddate [description]
 * @return {string}     дата в виде dd.mm.yyyy
 */
export let formatDate = function (ddate) {
  ddate = new Date(Date.parse(ddate));
  /*  if (typeof (ddate) == 'string') {
    }
  */
  var year = ddate.getFullYear();
  var month = (1 + ddate.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;
  var day = ddate.getDate().toString();
  day = day.length > 1 ? day : '0' + day;
  return day + '.' + month + '.' + year;
};

export let dateFormatter = new Intl.DateTimeFormat('ru');

export const getHeaderForJSON = function (json) {
  let body = '';
  if (json != '') {
    body = JSON.stringify(json);
  }

  return {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json; charset=UTF-8'
    },
    body: body
  };
};

export const formatMoney = function (num) {
  let c = 0;
  let d = '.';
  let t = ' ';
  let n = num;
  c = isNaN(c = Math.abs(c)) ? 2 : c;
  d = d == undefined ? '.' : d;
  t = t == undefined ? ',' : t;
  let s = n < 0 ? '-' : '';
  let i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c)));
  let j = (j = i.length) > 3 ? j % 3 : 0;
  return s + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t) +
    (c ? d + Math.abs(n - i).toFixed(c).slice(2) : '');
};

export const strToDecimal = function (str) {
  // return parseFloat(str).toFixed(2);
  let d = +str;
  return d;
};

export const strToDate = function (str) {
  let ret = new Date().toISOString().slice(0, 10);
  if (str != undefined) {
    ret = str.slice(0, 10);
  }

  return ret;
};
