import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Clock from 'react-live-clock';
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import NewClockForm from '../NewClockForm';
import styles from './style.module.scss';
import Col from 'reactstrap/lib/Col';
import Row from 'reactstrap/lib/Row';
Header.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  timezonesOption: PropTypes.array.isRequired,
};
function Header(props) {
  const { onSubmit, timezonesOption } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const handleSubmit = (values, actions) => {
    onSubmit(values, actions);
    setModal(!modal);
  };
  return (
    <>
      <Row>
        <Col>
          <div className={styles.header}>
            <h1>World clocks</h1>
            <Button
              color="secondary"
              onClick={toggle}
              className={styles.button}>
              Add new clock
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={styles.time}>
            <p>The present time: </p>
            <Clock
              format={'dddd, MMMM D, YYYY, h:mm:ss A'}
              ticking={true}
              interval={1}
            />
          </div>
        </Col>
      </Row>
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
    </>
  );
}

export default Header;
