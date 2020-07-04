import React from 'react';
import PropTypes from 'prop-types';
import ClockList from '../ClockList';
import styles from './style.module.scss'
ClockPage.propTypes = {};

function ClockPage(props) {
  return (
    <div className={styles['clock-page']}>
      <ClockList />
    </div>
  );
}

export default ClockPage;
