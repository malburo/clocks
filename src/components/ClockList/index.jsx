import React from 'react';
import PropTypes from 'prop-types';
import ClockCard from '../ClockCard';
import styles from './style.module.scss';
ClockList.propTypes = {};

function ClockList(props) {
  const { timezones } = props;
  const clockList = timezones.map(item => {
    return (
      <div className={styles.item}>
        <ClockCard timezone={item.timezone} name={item.clockName} />
      </div>
    );
  });
  return (
    <div>
      <div className={styles.item}>
        <ClockCard timezone="Asia/Ho_Chi_Minh" name="Việt Nam" />
      </div>
      {clockList}
    </div>
  );
}

export default ClockList;
