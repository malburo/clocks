import React from 'react';
import PropTypes from 'prop-types';
import ClockCard from '../ClockCard';
import styles from './style.module.scss';
ClockList.propTypes = {
  timezones: PropTypes.array.isRequired,
  handleDeleteClock: PropTypes.func.isRequired,
};

function ClockList(props) {
  const { timezones, handleDeleteClock } = props;
  return (
    <div className={styles.wrapper}>
      {timezones.length && (
        <div className={styles.des}>
          <span className={styles['clock-name']}>Clock name</span>
          <span className={styles['time-zone']}>Time zone</span>
          <span className={styles['dmy']}>Day/Month/Year</span>
          <span className={styles['time']}>Time</span>
          <span className={styles['action']}>Action</span>
        </div>
      )}

      {timezones.map(item => {
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
