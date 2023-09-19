import React from 'react';
import DocItem from './DocItem.js';
import PropTypes from 'prop-types';

/**
 * Содержимое документа
 */
class DocBody extends React.Component {
  constructor(props) {
    super(props);
    this.sumByCena = 0;
    this.sumByPrice = 0;
  }

  getDocItems() {
    this.sumByCena = 0;
    this.sumByPrice = 0;
    let docItems = this.props.doc.docItems.map((docItem) => {
      this.sumByCena = this.sumByCena + (docItem.cenaOut * docItem.qty);
      this.sumByPrice = this.sumByPrice + (docItem.price * docItem.qty);
      return <DocItem docItem={docItem}
          key={docItem.product.n}
          actions={this.props.actions}
        />;
    });
    return docItems;
  }

  render() {
    return (
       <div className='panel-body' style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className='row' style={{ overflow: 'hidden' }}>
          <table className='table table-condensed ' style={{ marginBottom: 0 }}>
            <thead>
            <tr>
              <th className='col-md-1 text-right'>Н.Номер</th>
              <th className='col-md-5'>Товар</th>
              <th className='col-md-1 text-right'>Прайс</th>
              <th className='col-md-1 text-right'>К-во</th>
              <th className='col-md-1 text-right'>Скидка</th>
              <th className='col-md-1 text-right'>Сумма</th>
              <th style={{ width: '1%' }}></th>
            </tr>
            </thead>
            <tbody>
            {this.getDocItems()}
            <tr>
              <td className='col-md-1 text-right'></td>
              <td className='col-md-5'></td>
              <td className='col-md-1 text-right'></td>
              <td className='col-md-1 text-right'><strong>Итого:</strong></td>
              <td id='sumDiscount' className='col-md-1 text-right'><strong>{this.sumByCena - this.sumByPrice}</strong></td>
              <td id='sumByCena' className='col-md-1 text-right'><strong>{this.sumByCena}</strong></td>
              <td style={{ width: '1%' }}></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

DocBody.propTypes = {
  actions: PropTypes.shape({
    deleteDocItem: PropTypes.func.isRequired
  }),
  doc: PropTypes.shape({
    docItems: PropTypes.array.isRequired
  })
};

export default DocBody;
