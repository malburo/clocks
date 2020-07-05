import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import NewClockForm from '../NewClockForm';
import styles from './style.module.scss';
AddNewClock.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
function AddNewClock(props) {
  const { onSubmit } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const handleSubmit = (values, actions) => {
    onSubmit(values);
    setModal(!modal);
  };
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1>World clocks</h1>
          <Button color="primary" onClick={toggle} className={styles.button}>
            Add new Clock
          </Button>
        </div>

        <div className={styles.des}>
          <span className={styles['clock-name']}>Clock name</span>
          <span className={styles['time-zone']}>Time zone</span>
          <span className={styles['dmy']}>Day/Month/Year</span>
          <span className={styles['time']}>Time</span>
        </div>
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Tạo đồng hồ mới</ModalHeader>
        <ModalBody>
          <NewClockForm toggle={toggle} onSubmit={handleSubmit} />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default AddNewClock;
