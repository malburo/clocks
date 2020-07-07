import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const DeleteButton = props => {
  const { buttonLabel, className, handleDeleteButton, item, clockName } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const onDelete = () => {
    setModal(!modal);
    handleDeleteButton(item);
  };
  return (
    <div>
      <Button color="danger" onClick={toggle} outline>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Delete {clockName}</ModalHeader>
        <ModalBody>Are you sure you want to delete this clock?</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onDelete}>
            Yes
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            No
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default DeleteButton;
