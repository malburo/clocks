import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import NewClockForm from '../NewClockForm';

const AddNewClock = props => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const handleSubmit = (values, actions) => {
    console.log(values);
    setModal(!modal);
  };
  return (
    <div>
      <Button color="danger" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Add New Clock</ModalHeader>
        <ModalBody>
          <NewClockForm toggle={toggle} onSubmit={handleSubmit} />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default AddNewClock;
