import React, { useState } from 'react';
import AddNewClock from '../AddNewClock';
import ClockList from '../ClockList';
import styles from './style.module.scss';
import { TIMEZONE_OPTIONS } from '../../constants/global';
import Container from 'reactstrap/lib/Container';
import Col from 'reactstrap/lib/Col';
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
    //add option when delete clock
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
    // delete clock
    const index = data.findIndex(item => item.timezone === itemDelete.timezone);
    data.splice(index, 1);
    setTimezones(data);
    localStorage.timezones = JSON.stringify(data);
  };
  return (
    <Container>
      <div className={styles['clock-page']}>
        <Col>
          <div className="d-flex flex-column justify-content-center">
            <AddNewClock
              onSubmit={handleAddNewClock}
              timezonesOption={timezonesOption}
            />
          </div>
        </Col>
        <Col>
          <div className="d-flex flex-column justify-content-center">
            <ClockList
              timezones={timezones}
              handleDeleteClock={handleDeleteClock}
            />
          </div>
        </Col>
      </div>
    </Container>
  );
}

export default ClockPage;
