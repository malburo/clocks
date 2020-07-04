import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ClockList from '../ClockList';
import styles from './style.module.scss';
import SearchForm from '../NewClockForm';
import AddNewClock from '../AddNewClock';
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
  const handleSubmitNewClock = values => {
    let data = [...timezones];
    data.push(values);
    setTimezones(data);
    localStorage.timezones = JSON.stringify(data);
  };
  return (
    <div className={styles['clock-page']}>
      <AddNewClock onSubmit={handleSubmitNewClock} />
      <ClockList timezones={timezones} />
    </div>
  );
}

export default ClockPage;
