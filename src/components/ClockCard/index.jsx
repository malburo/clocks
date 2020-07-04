import PropTypes from 'prop-types';
import React from 'react';
import Clock from 'react-live-clock';
import Delete from '../../assets/images/delete.png';
import styles from './style.module.scss';
ClockCard.propTypes = {
  timezone: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

function ClockCard(props) {
  const { timezone, name, handleDeleteButton, item, currentTime } = props;
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
      <div
        className={`${styles['clock-card__time']} ${
          currentTime && styles.currentTime
        }`}>
        <Clock format={'h:mm:ss A'} ticking={true} timezone={timezone} />
      </div>

      <div className={`${styles['delete-icon']} ${currentTime && styles.none}`}>
        <img src={Delete} alt="" onClick={() => handleDeleteButton(item)} />
      </div>
    </div>
  );
}

export default ClockCard;
