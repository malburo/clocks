import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Clock from 'react-live-clock';
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import NewClockForm from '../NewClockForm';
import styles from './style.module.scss';
AddNewClock.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  timezonesOption: PropTypes.array.isRequired,
};
function AddNewClock(props) {
  const { onSubmit, timezonesOption } = props;

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
      </div>
      <div className={styles.time}>
        <p>The present time: </p>
        <Clock format={'dddd, MMMM D, YYYY, h:mm:ss A'} ticking={true} />
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add new clock</ModalHeader>
        <ModalBody>
          <NewClockForm
            toggle={toggle}
            onSubmit={handleSubmit}
            timezonesOption={timezonesOption}
          />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default AddNewClock;
