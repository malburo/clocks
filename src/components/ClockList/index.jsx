import PropTypes from 'prop-types';
import React from 'react';
import ClockCard from '../ClockCard';
import styles from './style.module.scss';
ClockList.propTypes = {
  clocks: PropTypes.array.isRequired,
  handleDeleteClock: PropTypes.func.isRequired,
};

function ClockList(props) {
  const { clocks, handleDeleteClock } = props;
  return (
    <div className={styles.wrapper}>
      {clocks.map(item => {
        const { timezone, clockName } = item;
        return (
          <ClockCard
            timezone={timezone}
            clockName={clockName}
            handleDeleteClock={handleDeleteClock}
            item={item}
            key={timezone}
          />
        );
      })}
    </div>
  );
}

export default ClockList;
