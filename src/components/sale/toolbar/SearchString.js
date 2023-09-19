import React from 'react';

class SearchString extends React.Component {

  constructor(props) {
    super(props);
    this.searchName = '';
    this.handlerChangeSearchName = ::this.handlerChangeSearchName;
    this.handlerSearchByName = ::this.handlerSearchByName;
    this.handlerKeyPress = ::this.handlerKeyPress;
  }

  componentDidMount() {
    // Стартовая загрузка
    this.searchName = '';
  }

  handlerChangeSearchName(event) {
    this.searchName = event.target.value;
  }

  handlerSearchByName () {
    if (this.searchName.length > 0) {
      this.props.actions.getByName(this.searchName, this.props.onRest);
    }
  }

  handlerKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.handlerSearchByName();
    }
  }

  render() {
    return (
      <form className='nav navbar-form col-md-10'>
        <div className='form-group'>
          <div className='input-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Поиск товара'
              onChange={this.handlerChangeSearchName}
              onKeyDown={this.handlerKeyPress}
            />

            <div className='input-group-addon'>
              <span
                className='glyphicon glyphicon-search'
                aria-hidden='true'
                onClick={this.handlerSearchByName}
              ></span>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

SearchString.propTypes = {
  actions: React.PropTypes.shape({
    getByName: React.PropTypes.func.isRequired
  }).isRequired,
  onRest: React.PropTypes.bool.isRequired
};

export default SearchString;
