import PropTypes from 'prop-types';
import React from 'react';
import Clock from 'react-live-clock';
import DeleteClock from '../DeleteButton';
import styles from './style.module.scss';
import Col from 'reactstrap/lib/Col';
ClockCard.propTypes = {
  timezone: PropTypes.string,
  clockName: PropTypes.string,
  onClick: PropTypes.func,
  item: PropTypes.object,
};

function ClockCard(props) {
  const { timezone, clockName, handleDeleteClock, item } = props;
  return (
    <div className={styles['clock-card']}>
      <Col xs="12" sm="5" lg="3">
        <p>{clockName}</p>
      </Col>
      <Col xs="12" sm="7" lg="2">
        <p>{timezone}</p>
      </Col>
      <Col xs="12" sm="5" lg="3">
        <Clock
          format={'dddd, MMMM D, YYYY'}
          ticking={true}
          timezone={timezone}
        />
      </Col>
      <Col xs="8" sm="4" lg="2">
        <Clock format={'h:mm:ss A '} interval={1} />
      </Col>
      <Col xs="4" sm="3" lg="2">
        <DeleteClock
          buttonLabel="Delete"
          handleDeleteClock={handleDeleteClock}
          item={item}
          clockName={clockName}
        />
      </Col>
    </div>
  );
}

export default ClockCard;
