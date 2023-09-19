import React from 'react';
import { shallow } from 'enzyme';
import { Doc } from '../Doc.js';
import DocContent from '../../components/doc/DocContent.js';
import DocToolBar from '../../components/doc/DocToolBar.js';

let ddate = new Date().toISOString().slice(0, 10);

let props = {
  actions: {
    openDlg: jest.fn(),
    doc: {
      createDoc: jest.fn(),
      closeDoc: jest.fn(),
      printToPdf: jest.fn(),
      deleteDocItem: jest.fn()
    },
    payment: {
      create: jest.fn(),
      del: jest.fn()
    },
    discount: {
      del: jest.fn()
    }
  },
  doc: {
    n: 111,
    ddate: ddate,
    bonus: 0,
    docItems: [],
    payments: [],
    discounts: []
  },
  app: {
    reports: [],
    typePayments: []
  }
};

describe('Doc container', () => {
  it('Проверка DocToolBar', ()=> {
    let container = shallow(<Doc {...props}/>);
    let docToolBar = container.find(DocToolBar);
    expect(docToolBar).toBeDefined();
    expect(docToolBar.props().actions).toEqual(props.actions);
    expect(docToolBar.props().doc).toEqual(props.doc);
    expect(docToolBar.props().typePayments).toEqual(props.app.typePayments);
    expect(docToolBar.props().reports).toEqual(props.app.reports);
  });

  it('Проверка DocContent', ()=> {
    let container = shallow(<Doc {...props}/>);
    let docContent = container.find(DocContent);
    expect(docContent).toBeDefined();
    expect(docContent.props().actions).toEqual(props.actions);
    expect(docContent.props().doc).toEqual(props.doc);
  });
});
