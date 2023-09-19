import React from 'react';
import { shallow } from 'enzyme';
import { Docs } from '../Docs.js';
import DocsToolBar from '../../components/docs/DocsToolBar.js';
import DocsContent from '../../components/docs/DocsContent.js';

let today = new Date().toISOString().slice(0, 10);
let props = {
  actions: {
    getDocByN: jest.fn(),
    getByDate: jest.fn()
  },
  ddate: today,
  docs: []
};

describe('Docs container', () => {
  it('Проверка DocsToolBar', ()=> {
    let container = shallow(<Docs {...props}/>);
    let docsToolBar = container.find(DocsToolBar);
    expect(docsToolBar).toBeDefined();
    expect(docsToolBar.props().actions).toEqual(props.actions);
    expect(docsToolBar.props().ddate).toEqual(today);
  });

  it('Проверка DocsContent', ()=> {
    let container = shallow(<Docs {...props}/>);
    let docsToolBar = container.find(DocsContent);
    expect(docsToolBar).toBeDefined();
    expect(docsToolBar.props().actions).toEqual(props.actions);
    expect(docsToolBar.props().docs).toEqual(props.docs);
  });
});
