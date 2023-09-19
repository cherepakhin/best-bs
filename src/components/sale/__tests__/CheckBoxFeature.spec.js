import React from 'react';
import CheckBoxFeature from '../CheckBoxFeature.js';
import { shallow, mount } from 'enzyme';

let props = {};

beforeEach(()=> {
  props = {
    handleCheck: jest.fn(),
    feature: {
      name: 'featureName',
      vals: []
    },
    checked: []
  };
});

describe('CheckBoxFeature', ()=> {
  describe('Проверка работы toggleCheckbox.', ()=> {
    it('Поставить крыжик', ()=> {
      let checkBox = new CheckBoxFeature(props);

      checkBox.toggleCheckbox('val1');
      expect(props.handleCheck.mock.calls.length).toEqual(1);
      expect(props.handleCheck.mock.calls[0][0]).toEqual({ name: 'featureName', vals: ['val1'] });
    });

    it('При повторном щелчке, убрать крыжик', ()=> {
      let checkBox = new CheckBoxFeature(props);

      // Поставить крыжик
      checkBox.toggleCheckbox('val1');
      expect(props.handleCheck.mock.calls.length).toEqual(1);
      expect(props.handleCheck.mock.calls[0][0]).toEqual({ name: 'featureName', vals: ['val1'] });

      // При повторном щелчке, убрать крыжик
      checkBox.toggleCheckbox('val1');
      expect(props.handleCheck.mock.calls.length).toEqual(2);
      expect(props.handleCheck.mock.calls[1][0]).toEqual({ name: 'featureName', vals: [] });
    });

    it('Добавить две хар-ки', ()=> {
      let checkBox = new CheckBoxFeature(props);

      checkBox.toggleCheckbox('val1');
      expect(props.handleCheck.mock.calls.length).toEqual(1);
      expect(props.handleCheck.mock.calls[0][0]).toEqual({ name: 'featureName', vals: ['val1'] });

      checkBox.toggleCheckbox('val2');
      expect(props.handleCheck.mock.calls.length).toEqual(2);
      expect(props.handleCheck.mock.calls[1][0]).toEqual({ name: 'featureName', vals: ['val1', 'val2'] });
    });

  });

  describe('Внешний вид', ()=> {
    it('Текстовые метки', ()=> {
      props = {
        handleCheck: jest.fn(),
        feature: {
          name: 'featureName',
          vals: [
            { name: 'val1' },
            { name: 'val2' }
          ]
        },
        checked: []
      };
      let checkBox = shallow(<CheckBoxFeature {...props}/>);
      let wrapper = checkBox.find('.form-group label strong');
      expect(wrapper.text()).toBe('featureName');

      wrapper = checkBox.find('.checkbox label');

      expect(wrapper.nodes[0].props.children[1]).toEqual('val1');
      expect(wrapper.nodes[1].props.children[1]).toEqual('val2');
    });

  });
});
