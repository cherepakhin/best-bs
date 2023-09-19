import React from 'react';
import { formatDate, formatMoney } from '../../constants';

class DocsContent extends React.Component{

  constructor(props) {
    super(props);
    this.handleSelectDoc = ::this.handleSelectDoc;
    this.summa = 0;
  }

  handleSelectDoc(doc) {
    this.props.actions.getDocByN(doc.n);
  }

  getRowsDoc() {
    this.summa = this.props.docs.reduce((sum, doc)=>sum + doc.summaOut, 0);
    let style = { cursor: 'pointer' };
    let items = this.props.docs.map((doc) => {
      return (
        <tr key={doc.n} id={doc.n} onClick={this.handleSelectDoc.bind(null, doc)}>
          <td className='col-md-1 text-right' style={style}>{doc.n}</td>
          <td className='col-md-1' style={style}>{formatDate(doc.ddate)}</td>
          <td className='col-md-1 text-right' style={style}>{formatMoney(doc.summaOut)}</td>
          <td className='col-md-9 text-right' style={style}></td>
        </tr>
      );
    });
    return items;
  }

  render() {
    return (
      <div className='row col-md-10 col-md-offset-1'>
        <div className='panel panel-default'>
          <div className='panel-body' style={{ paddingTop: 0, paddingBottom: 0 }}>
            <div className='row' style={{ overflow: 'hidden' }}>
              <table className='table table-condensed table-hover'
                    style={{ marginBottom: 0 }}>
                <thead>
                  <tr>
                    <th className='col-md-1 text-right' >Номер</th>
                    <th className='col-md-1' >Дата</th>
                    <th className='col-md-1 text-right' >Сумма</th>
                    <th className='col-md-9 text-right' ></th>
                  </tr>
                </thead>
                <tbody>
                  {this.getRowsDoc()}
                  <tr>
                    <td className='col-md-1'></td>
                    <td className='col-md-1 text-right'>Итого:</td>
                    <td className='col-md-1 text-right'>{formatMoney(this.summa)}</td>
                    <td className='col-md-9 text-right'></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DocsContent.propTypes = {
  actions: React.PropTypes.shape({
    getDocByN: React.PropTypes.func.isRequired
  }).isRequired,
  docs: React.PropTypes.array.isRequired
};

export default DocsContent;

