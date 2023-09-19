import ADlg from '../ADlg.js';
import cancel from '../cancel.js';

describe('Тесты ADlg', ()=> {
  it('Правильный конструктор', ()=> {
    let fnOk = jest.fn();
    let widget = {};
    let adlg = new ADlg('typeDlg', 'title', widget, fnOk);
    expect(adlg.typeDlg).toBe('typeDlg');
    expect(adlg.widget).toBe(widget);
    expect(adlg._actions).toEqual({
      fnOk: fnOk,
      fnCancel: cancel
    });
  });

  it('Конструктор. Не определена fnOk', ()=> {
    let widget = {
    };
    let adlg = new ADlg('typeDlg', 'title', widget);
    expect(adlg.typeDlg).toBe('typeDlg');
    expect(adlg.widget).toBe(widget);
    expect(adlg._actions).toEqual({
      fnOk: cancel,
      fnCancel: cancel
    });
  });

  it('Проверка show', ()=> {

    let widget = {};
    let dispatch = jest.fn();
    let fnOk = function () {
      return () => {
      };
    };

    let adlg = new ADlg('typeDlg', 'title', widget, fnOk);
    adlg.show(dispatch, { testProp: 'testProp' });
    // console.log(adlg.actions);
    adlg.actions.fnOk();
    expect(adlg.actions.fnOk).toBeInstanceOf(Function);
    expect(adlg.actions.fnCancel).toBeInstanceOf(Function);
  });
});
