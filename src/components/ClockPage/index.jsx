import React, { useState } from 'react';
import AddNewClock from '../AddNewClock';
import ClockList from '../ClockList';
import styles from './style.module.scss';
import { TIMEZONE_OPTIONS } from '../../constants/global';
ClockPage.propTypes = {};

function ClockPage(props) {
  const [timezones, setTimezones] = useState(() => {
    const dataString = localStorage.timezones;
    let timezones;
    if (dataString) {
      timezones = JSON.parse(localStorage.timezones);
    } else {
      timezones = [];
    }
    return timezones;
  });
  const [timezonesOption, setTimezonesOption] = useState(() => {
    const dataString = localStorage.timezonesOption;
    let options;
    if (dataString) {
      options = JSON.parse(localStorage.timezonesOption);
    } else {
      options = TIMEZONE_OPTIONS;
    }
    return options;
  });
  const handleAddNewClock = values => {
    let data = [...timezones];
    let options = [...timezonesOption];
    // Delete the selected option
    const indexOption = options.findIndex(option => {
      return option.value === values.timezone;
    });
    options.splice(indexOption, 1);
    setTimezonesOption(options);
    localStorage.timezonesOption = JSON.stringify(options);
    // Add new timezone to localStorage
    data.push(values);
    setTimezones(data);
    localStorage.timezones = JSON.stringify(data);
  };
  const handleDeleteClock = itemDelete => {
    let data = [...timezones];
    let options = JSON.parse(localStorage.timezonesOption);
    let addOption = { value: itemDelete.timezone, label: itemDelete.timezone };
    options.push(addOption);
    options.sort((a, b) => {
      if (a.value < b.value) {
        return -1;
      }
      if (a.value > b.value) {
        return 1;
      }
      return 0;
    });
    setTimezonesOption(options);
    localStorage.timezonesOption = JSON.stringify(options);
    const index = data.findIndex(item => item.timezone === itemDelete.timezone);
    data.splice(index, 1);
    setTimezones(data);
    localStorage.timezones = JSON.stringify(data);
  };
  return (
    <div className={styles['clock-page']}>
      <AddNewClock
        onSubmit={handleAddNewClock}
        timezonesOption={timezonesOption}
      />
      <ClockList timezones={timezones} handleDeleteClock={handleDeleteClock} />
    </div>
  );
}

export default ClockPage;
