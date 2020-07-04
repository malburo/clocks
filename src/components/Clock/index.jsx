import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';
import day from '../../assets/images/day.jpg';
Clock.propTypes = {};

function Clock(props) {
  return (
    <div className={styles['clock-card']}>
      <div className={styles['clock-card__name']}>
        <p>Viet nam</p>
      </div>
      <div className={styles['clock-card__day']}>
        <p>Thứ 3, ngày 6 tháng 6 năm 2000</p>
      </div>
      <div className={styles['clock-card__time']}>
        <p>10:00 AM</p>
      </div>
    </div>
  );
}

export default Clock;
