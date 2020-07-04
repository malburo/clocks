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
      <div className={styles.item}>
        <ClockCard
          timezone={item.timezone}
          name={item.clockName}
          handleDeleteButton={handleDeleteButton}
          key={item.timezone}
          item={item}
        />
      </div>
    );
  });
  return (
    <div>
      <div className={styles.item}>
        <ClockCard name="Thời gian hiện tại" currentTime={true} />
      </div>
      {clockList}
    </div>
  );
}

export default ClockList;
