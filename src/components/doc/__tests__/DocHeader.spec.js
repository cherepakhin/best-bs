import React from 'react';
import { shallow } from 'enzyme';
import DocHeader from '../DocHeader.js';
import { formatDate } from '../../../constants.js';

let props = {
  doc: {
    n: 1,
    ddate: new Date().toISOString().slice(0, 10),
    bonus: 101
  }
};

describe('DocHeader', ()=> {
  it('Заголовок документа', ()=> {
    let docHeader = shallow(<DocHeader {...props}/>);
    expect(docHeader.find('#numdoc').text()).toBe('Выписка № ' + props.doc.n + ' от ' +
          formatDate(props.doc.ddate));
    expect(docHeader.find('#summaBonus').text()).toBe('Начислено бонусов: ' + props.doc.bonus);
  });
});
