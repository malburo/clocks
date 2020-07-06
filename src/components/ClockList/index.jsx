import React from 'react';
import PropTypes from 'prop-types';
import ClockCard from '../ClockCard';
import styles from './style.module.scss';
ClockList.propTypes = {
  timezones: PropTypes.array.isRequired,
  handleDeleteButton: PropTypes.func.isRequired,
};

function ClockList(props) {
  const { timezones, handleDeleteButton } = props;
  const clockList = timezones.map(item => {
    return (
      <div className={styles.item} key={item.timezone}>
        <ClockCard
          timezone={item.timezone}
          name={item.clockName}
          handleDeleteButton={handleDeleteButton}
          item={item}
        />
      </div>
    );
  });
  return (
    <div className={styles.wrapper}>
      {clockList.length && (
        <div className={styles.des}>
          <span className={styles['clock-name']}>Clock name</span>
          <span className={styles['time-zone']}>Time zone</span>
          <span className={styles['dmy']}>Day/Month/Year</span>
          <span className={styles['time']}>Time</span>
          <span className={styles['action']}>Action</span>
        </div>
      )}

      {clockList}
    </div>
  );
}

export default ClockList;
