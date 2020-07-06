import PropTypes from 'prop-types';
import React from 'react';
import Clock from 'react-live-clock';
import styles from './style.module.scss';
import Button from 'reactstrap/lib/Button';
ClockCard.propTypes = {
  timezone: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

function ClockCard(props) {
  const { timezone, name, handleDeleteButton, item } = props;
  return (
    <div className={styles['clock-card']}>
      <div className={styles['clock-card__name']}>
        <p>{name}</p>
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
        <Button
          color="danger"
          onClick={() => handleDeleteButton(item)}
          className={styles.button}
          outline>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ClockCard;
