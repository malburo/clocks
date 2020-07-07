import React from 'react';
import Col from 'reactstrap/lib/Col';
import styles from './style.module.scss';
TitleBar.propTypes = {};

function TitleBar(props) {
  return (
    <div className={`${styles['title-bar']} d-none d-lg-inline-flex`}>
      <Col md="3">
        <span className={styles['clock-name']}>Clock name</span>
      </Col>
      <Col md="2">
        <span className={styles['time-zone']}>Time zone</span>
      </Col>
      <Col md="3">
        <span className={styles['dmy']}>Day/Month/Year</span>
      </Col>
      <Col md="2">
        <span className={styles['time']}>Time</span>
      </Col>
      <Col md="3">
        <span className={styles['action']}>Action</span>
      </Col>
    </div>
  );
}

export default TitleBar;
