import React from 'react';
import { shallow } from 'enzyme';
import Filter from '../Filter.js';
import CheckBoxFeature from '../CheckBoxFeature.js';
import { Panel } from 'react-bootstrap';

let props;

beforeEach(() => {
  props = {
    actions: {
      getByFilter: jest.fn()
    },
    groupT: {
      n: 1,
      name: 'Группа1',
      featureTempls: []
    },
    onRest: true,
    queryFeature: []
  };
  return props;
});

describe('Filter', ()=> {
  it('Содержимое панели , при отсутствии хар-к', ()=> {
    let filter = shallow(<Filter {...props}/>);
    expect(filter.find(Panel).props().header).toBe(props.groupT.name);
  });

  it('Проверка передачи параметров, у группы есть хар-ки', ()=> {
    props.groupT.featureTempls = [
    {
      name: 'Feature1',
      vals: ['Val1 for Feature1', 'Val2 for Feature1']
    }, {
      name: 'Feature2',
      vals: ['Val1 for Feature2', 'Val2 for Feature2', 'Val3 for Feature2']
    }
    ];
    let filter = shallow(<Filter {...props}/>);
    expect(filter.find(CheckBoxFeature).length).toBe(2);
    expect(filter.find(CheckBoxFeature).at(0).props().feature).toEqual(props.groupT.featureTempls[0]);
    expect(filter.find(CheckBoxFeature).at(0).props().handleCheck).toEqual(filter.instance().onCheckFeature);
    expect(filter.find(CheckBoxFeature).at(1).props().feature).toEqual(props.groupT.featureTempls[1]);
    expect(filter.find(CheckBoxFeature).at(1).props().handleCheck).toEqual(filter.instance().onCheckFeature);
  });

  it('Проверка функции отметки хар-к.Пришла хар-ка с пустыми отметками', ()=> {
    // Для этого теста не имеет значения
    props.groupT.featureTempls = [];
    let filter = new Filter(props);

    let selectedEmptyFeature = { name: 'Feature1', vals: [] };
    filter.onCheckFeature(selectedEmptyFeature);
    expect(props.actions.getByFilter.mock.calls[0][0]).toEqual(props.groupT);
    expect(props.actions.getByFilter.mock.calls[0][1]).toEqual([]);
  });

  it('Проверка функции отметки хар-к.Пришла хар-ка с не пустыми отметками', ()=> {
    props.actions.getByFilter.mockClear();

    // Для этого теста не имеет значения
    props.groupT.featureTempls = [];
    let filter = new Filter(props);

    let selectedFeature = { name: 'Feature1', vals: ['val1'] };
    filter.onCheckFeature(selectedFeature);
    expect(props.actions.getByFilter.mock.calls[0][0]).toEqual(props.groupT);
    expect(props.actions.getByFilter.mock.calls[0][1]).toEqual([selectedFeature]);
  });

  it('Проверка функции отметки хар-к.Сделали отметку и удалили', ()=> {
    props.actions.getByFilter.mockClear();

    // Для этого теста не имеет значения
    props.groupT.featureTempls = [];
    let filter = new Filter(props);

    let selectedFeature = { name: 'Feature1', vals: ['val1'] };
    filter.onCheckFeature(selectedFeature);
    selectedFeature = { name: 'Feature1', vals: [] };
    filter.onCheckFeature(selectedFeature);
    expect(props.actions.getByFilter.mock.calls[0][0]).toEqual(props.groupT);
    expect(props.actions.getByFilter.mock.calls[0][1]).toEqual([]);
  });

  it('Проверка функции отметки хар-к.Сделали отметку и дополнили другим значением в этой же хар-ке', ()=> {
    props.actions.getByFilter.mockClear();

    // Для этого теста не имеет значения
    props.groupT.featureTempls = [];
    let filter = new Filter(props);

    let selectedFeature = { name: 'Feature1', vals: ['val1'] };
    filter.onCheckFeature(selectedFeature);
    selectedFeature = { name: 'Feature1', vals: ['val1', 'val2'] };
    filter.onCheckFeature(selectedFeature);
    expect(props.actions.getByFilter.mock.calls[0][0]).toEqual(props.groupT);
    expect(props.actions.getByFilter.mock.calls[0][1]).toEqual([selectedFeature]);
  });

  it('Проверка функции отметки хар-к.Сделали отметку и дополнили другой хар-кой', ()=> {
    props.actions.getByFilter.mockClear();

    // Для этого теста не имеет значения
    props.groupT.featureTempls = [];
    let filter = new Filter(props);

    let selectedFeature1 = { name: 'Feature1', vals: ['val1'] };
    filter.onCheckFeature(selectedFeature1);
    let selectedFeature2 = { name: 'Feature2', vals: ['val1', 'val2'] };
    filter.onCheckFeature(selectedFeature2);
    expect(props.actions.getByFilter.mock.calls[0][0]).toEqual(props.groupT);
    // console.log(props.actions.getByFilter.mock.calls[0][1]);
    expect(props.actions.getByFilter.mock.calls[0][1]).toEqual([selectedFeature1, selectedFeature2]);
  });

});

