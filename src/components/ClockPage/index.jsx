import React from 'react';
import PropTypes from 'prop-types';
import ClockList from '../ClockList';
import styles from './style.module.scss';
import SearchForm from '../NewClockForm';
import AddNewClock from '../AddNewClock';
ClockPage.propTypes = {};

function ClockPage(props) {
  return (
    <div className={styles['clock-page']}>
      <AddNewClock />
      <ClockList />
    </div>
  );
}

export default ClockPage;
