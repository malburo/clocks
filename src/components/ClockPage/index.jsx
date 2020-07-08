import React, { useState, useEffect } from 'react';
import Header from '../Header';
import ClockList from '../ClockList';
import styles from './style.module.scss';
import Container from 'reactstrap/lib/Container';
import Col from 'reactstrap/lib/Col';
import { initOptions, initClocks } from '../utils/utils';
ClockPage.propTypes = {};

function ClockPage(props) {
  const [clocks, setClocks] = useState(() => initClocks());
  const [timezonesOption, setTimezonesOption] = useState(() => initOptions());

  useEffect(() => {
    localStorage.clocks = JSON.stringify(clocks);
  }, [clocks]);
  useEffect(() => {
    localStorage.timezonesOption = JSON.stringify(timezonesOption);
  }, [timezonesOption]);

  const handleAddNewClock = values => {
    // Add new clock
    let data = [...clocks];
    data.push(values);
    setClocks(data);

    // Delete the selected option
    let options = [...timezonesOption];
    const indexOption = options.findIndex(option => {
      return option.value === values.timezone;
    });
    options.splice(indexOption, 1);
    setTimezonesOption(options);
  };

  const handleDeleteClock = itemDelete => {
    // Delete clock
    let data = [...clocks];
    const index = data.findIndex(item => item.timezone === itemDelete.timezone);
    data.splice(index, 1);
    setClocks(data);

    // Add option when delete clock
    let options = [...timezonesOption];
    let currentOption = {
      value: itemDelete.timezone,
      label: itemDelete.timezone,
    };
    options.push(currentOption);
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
  };
  return (
    <Container>
      <div className={styles['clock-page']}>
        <Col>
          <div className="d-flex flex-column justify-content-center">
            <Header
              onSubmit={handleAddNewClock}
              timezonesOption={timezonesOption}
            />
          </div>
        </Col>
        <Col>
          <div className="d-flex flex-column justify-content-center">
            <ClockList clocks={clocks} handleDeleteClock={handleDeleteClock} />
          </div>
        </Col>
      </div>
    </Container>
  );
}

export default ClockPage;
