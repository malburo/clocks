import PropTypes from 'prop-types';
import React from 'react';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import ClockCard from '../ClockCard';
import TitleBar from '../TitleBar';
import styles from './style.module.scss';
ClockList.propTypes = {
  clocks: PropTypes.array.isRequired,
  handleDeleteClock: PropTypes.func.isRequired,
};

function ClockList(props) {
  const { clocks, handleDeleteClock } = props;
  return (
    <Container>
      <div className={styles.wrapper}>
        {clocks.length && (
          <Row>
            <TitleBar />
          </Row>
        )}
        {clocks.map(item => {
          const { timezone, clockName } = item;
          return (
            <Row key={timezone}>
              <ClockCard
                timezone={timezone}
                clockName={clockName}
                handleDeleteClock={handleDeleteClock}
                item={item}
                key={timezone}
              />
            </Row>
          );
        })}
      </div>
    </Container>
  );
}

export default ClockList;
