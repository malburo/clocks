import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import NewClockForm from '../NewClockForm';
import styles from './style.module.scss';
AddNewClock.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
function AddNewClock(props) {
  const { buttonLabel, className, onSubmit } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const handleSubmit = (values, actions) => {
    onSubmit(values);
    setModal(!modal);
  };
  return (
    <div>
      <div className={styles.wrapper}>
        <h1>World clocks</h1>
        <Button color="primary" onClick={toggle} className={styles.button}>
          Thêm đồng hồ mới
        </Button>
      </div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Add New Clock</ModalHeader>
        <ModalBody>
          <NewClockForm toggle={toggle} onSubmit={handleSubmit} />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default AddNewClock;
