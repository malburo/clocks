import PropTypes from 'prop-types';
import React from 'react';
import Clock from 'react-live-clock';
import DeleteButton from '../DeleteButton';
import styles from './style.module.scss';
ClockCard.propTypes = {
  timezone: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

function ClockCard(props) {
  const { timezone, clockName, handleDeleteButton, item } = props;
  return (
    <div className={styles['clock-card']}>
      <div className={styles['clock-card__name']}>
        <p>{clockName}</p>
      </div>
      <div className={styles['clock-card__timezone']}>
        <p>{timezone}</p>
      </div>
      <div className={styles['clock-card__date']}>
        <Clock
          format={'dddd, MMMM D, YYYY'}
          ticking={true}
          timezone={timezone}
        />
      </div>
      <div className={`${styles['clock-card__time']}`}>
        <Clock format={'h:mm:ss A'} ticking={true} timezone={timezone} />
      </div>

      <div className={`${styles.delete}`}>
        <DeleteButton
          buttonLabel="Delete"
          handleDeleteButton={handleDeleteButton}
          item={item}
          clockName={clockName}
        />
      </div>
    </div>
  );
}

export default ClockCard;
