import React from 'react';
import { shallow } from 'enzyme';
import DocContent from '../DocContent.js';
import DocHeader from '../DocHeader.js';
import DocBody from '../DocBody.js';
import PaymentPanel from '../PaymentPanel.js';

let props = {
  actions: {
    doc: {
      createDoc: jest.fn(),
      closeDoc: jest.fn(),
      deleteDocItem: jest.fn()
    },
    payment: {
      del: jest.fn()
    },
    discount: {
      del: jest.fn()
    }
  },
  doc: {
    n: 1,
    ddate: new Date().toISOString().slice(0, 10),
    bonus: 101,
    docItems: [],
    payments: [],
    discounts: []
  }
};

describe('DocContent', ()=> {
  it('Создание DocHeader', ()=> {
    let docContent = shallow(<DocContent {...props}/>);
    expect(docContent.find(DocHeader).props().doc).toEqual(props.doc);
  });

  it('Создание DocBody', ()=> {
    let docContent = shallow(<DocContent {...props}/>);
    expect(docContent.find(DocBody).props().doc).toEqual(props.doc);
  });

  it('Создание PaymentPanel', ()=> {
    let docContent = shallow(<DocContent {...props}/>);
    expect(docContent.find(PaymentPanel).props().payments).toEqual(props.doc.payments);
    expect(docContent.find(PaymentPanel).props().actions).toEqual(props.actions.payment);
  });
});
