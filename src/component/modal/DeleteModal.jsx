import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export const DeleteModal = ({ id, handleClose, show }) => {
    const deleteSuccess = () => {
        axios.delete(`http://localhost:5000/delete/${id}`);
        window.location.reload(false);
        handleClose();
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body><h5 style={{marginLeft:"30px"}}>Are you sure, you want to delete ?</h5></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                       No, Never.
                    </Button>
                    <Button variant="primary" onClick={deleteSuccess}>
                        Yes, Im sure.
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

