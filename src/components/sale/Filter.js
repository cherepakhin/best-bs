import React from 'react';
import CheckBoxFeature from './CheckBoxFeature';
import { findIndex } from 'lodash';
import { Accordion, Panel } from 'react-bootstrap';

class Filter extends React.Component{
  constructor(props) {
    super(props);
    this.onCheckFeature = ::this.onCheckFeature;
  }

  /**
   * Отметка значений хар-к
   * @param  {object} feature {name: 'nameFeature', vals:['val1','val2']}
   *                          name - название хар-ки
   *                          vals - отмеченные значения
   * @return {[type]}         [description]
   */
  onCheckFeature (feature) {
    let selectedFeatures = this.props.queryFeature;

    let idx = findIndex(selectedFeatures, { name: feature.name });
    if (idx >= 0) {
      selectedFeatures.splice(idx, 1);
    }

    if (feature.vals.length > 0) {
      selectedFeatures.push(feature);
    }

    this.props.actions.getByFilter(this.props.groupT, selectedFeatures, this.props.onRest);
  }

  getChecked(feature) {
    let ret = this.props.queryFeature.filter((f)=> (feature.name == f.name));
    if (ret.length > 0) {
      return ret[0].vals;
    }

    return [];
  }

  getFeaturesPanel() {
    let content = <div></div>;
    if (this.props.groupT != undefined && this.props.groupT.featureTempls != undefined && this.props.groupT.featureTempls.length > 0) {
      content =
        <div className='panel-body'>
          <form>
            {this.props.groupT.featureTempls.map((feature, index)=>(
            <CheckBoxFeature
              feature={feature}
              key={index}
              handleCheck={this.onCheckFeature}
              checked={this.getChecked(feature)}/>
            ))}
          </form>
        </div>;
    }

    return content;
  }

  render () {
    return (
      <div className='col-md-2'>
      <Accordion>
        <Panel header={this.props.groupT.name}>
          {this.getFeaturesPanel()}
        </Panel>
      </Accordion>
      </div>
    );
  }
}

Filter.propTypes = {
  actions: React.PropTypes.shape({
    getByFilter: React.PropTypes.func.isRequired
  }).isRequired,
  groupT: React.PropTypes.shape({
    n: React.PropTypes.number,
    name: React.PropTypes.string,
    featureTempls: React.PropTypes.array
  }),
  onRest: React.PropTypes.bool.isRequired,
  queryFeature: React.PropTypes.array.isRequired
};

export default Filter;

