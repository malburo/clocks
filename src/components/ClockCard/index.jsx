import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';
import day from '../../assets/images/day.jpg';
import Clock from 'react-live-clock';
ClockCard.propTypes = {};

function ClockCard(props) {
  const { timezone, name } = props;
  return (
    <div className={styles['clock-card']}>
      <div className={styles['clock-card__name']}>
        <p>{name}</p>
      </div>
      <div className={styles['clock-card__date']}>
        <Clock
          format={'dddd, MMMM Mo, YYYY'}
          ticking={true}
          timezone={timezone}
        />
      </div>
      <div className={styles['clock-card__time']}>
        <Clock format={'h:mm:ss A'} ticking={true} timezone={timezone} />
      </div>
      <div>x</div>
    </div>
  );
}

export default ClockCard;
