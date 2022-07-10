import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { Modal, Box } from '@mui/material';

import { deleteUsersFromList } from '../../features/users/usersSlice';

import './index.css'

const ModalDelete = ({ user, isOpen, handleClose }) => {
    const dispatch = useDispatch();

    const deleteFunc = async (id) => {
        try {
            dispatch(deleteUsersFromList(id));
        } catch (err) {
            console.error('Failed to delete this User: ', err)
        } finally {
            handleClose();
        }
    }
    return (
        <>
            <Modal
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='modal-wrapper'>
                    <div className='modal-message'>Delete {user.name}?</div>
                    <div className='modal-wrapper_buttons'>
                        <Button variant='contained' color='primary' onClick={handleClose}>
                            CANCEL
                        </Button>
                        <Button variant='contained' color='primary' onClick={()=> deleteFunc(user._id)}>
                            DELETE
                        </Button>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default ModalDelete;
