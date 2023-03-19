import axios from 'axios';
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const DeleteModal = ({ id, handleClose, show }) => {

    const notify = () => {
        toast("Deleted Successfully....")
    }

    const deleteSuccess = () => {
        axios.delete(`http://localhost:5000/peoples/delete/${id}`)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        // window.location.reload(false);
        handleClose();
        notify();
    }
    
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body><h5 style={{ marginLeft: "30px" }}>Are you sure, you want to delete ?</h5></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        No, Never.
                    </Button>
                    <Button variant="primary" onClick={deleteSuccess}>
                        Yes, Im sure.
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer />
        </>
    );
}

