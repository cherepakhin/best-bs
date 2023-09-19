import React from 'react';
import DatePicker from 'react-bootstrap-date-picker';

class DatePickerRU extends React.Component {
  render() {
    let dayLabels = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    let monthLabels = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
    ];
    // console.log(this.props.ddate);
    // value={this.props.ddate.toISOString()}
    return <DatePicker
        id='datepicker'
        value={this.props.ddate}
        onChange={this.props.handleChange}
        dayLabels={dayLabels}
        monthLabels={monthLabels}
        showClearButton={false}
        weekStartsOnMonday={true}
        showTodayButton={true}
        todayButtonLabel='Сегодня'
        dateFormat='DD.MM.YYYY'
    />;
  }
}
DatePickerRU.propTypes = {
        handleChange: React.PropTypes.func.isRequired,
        ddate: React.PropTypes.string.isRequired
      };
export default DatePickerRU;
