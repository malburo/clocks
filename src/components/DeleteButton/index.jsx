import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const DeleteButton = props => {
  const { buttonLabel, handleDeleteClock, item, clockName } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const onDelete = item => {
    handleDeleteClock(item);
    setModal(!modal);
  };
  return (
    <div>
      <Button color="danger" onClick={toggle} outline>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Delete {clockName}</ModalHeader>
        <ModalBody>Are you sure you want to delete this clock?</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => onDelete(item)}>
            Yes
          </Button>
          <Button color="secondary" onClick={toggle}>
            No
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default DeleteButton;
