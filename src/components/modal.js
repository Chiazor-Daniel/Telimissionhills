import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import StepperComp from './Stepper';

function ModalForm({showForm, handleToggle}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
   showForm ? setShow(true) : setShow(false)
  }, [showForm])

  return (
    <>
      <Modal show={show} onHide={handleClose} size='lg' centered>
        <Modal.Header closeButton onClick={()=>handleToggle(false)}>
          {/* <Modal.Title>Free Consultant</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <StepperComp />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalForm;
