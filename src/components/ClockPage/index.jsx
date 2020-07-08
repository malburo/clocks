import React, { useEffect, useState } from 'react';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import ClockList from '../ClockList';
import Header from '../Header';
import { initClocks, initOptions } from '../utils/utils';
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
      <Row className="justify-content-center">
        <Col>
          <Header
            onSubmit={handleAddNewClock}
            timezonesOption={timezonesOption}
          />
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col>
          <ClockList clocks={clocks} handleDeleteClock={handleDeleteClock} />
        </Col>
      </Row>
    </Container>
  );
}

export default ClockPage;
