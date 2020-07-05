import React, { useState } from 'react';
import AddNewClock from '../AddNewClock';
import ClockList from '../ClockList';
import styles from './style.module.scss';
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
  const handleDeleteButton = itemDelete => {
    let data = [...timezones];
    const index = data.findIndex(item => item.timezone === itemDelete.timezone);
    data.splice(index, 1);
    setTimezones(data);
    localStorage.timezones = JSON.stringify(data);
  };
  return (
    <div className={styles['clock-page']}>
      <AddNewClock onSubmit={handleSubmitNewClock} />
      <ClockList
        timezones={timezones}
        handleDeleteButton={handleDeleteButton}
      />
    </div>
  );
}

export default ClockPage;
