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
    return TIMEZONE_OPTIONS;
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
    // Add new timezone to localStorage
    data.push(values);
    setTimezones(data);
    localStorage.timezones = JSON.stringify(data);
  };
  const handleDeleteButton = itemDelete => {
    let data = [...timezones];
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
      <ClockList
        timezones={timezones}
        handleDeleteButton={handleDeleteButton}
      />
    </div>
  );
}

export default ClockPage;
