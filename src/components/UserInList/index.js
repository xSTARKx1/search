import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import { TableCell, TableRow, IconButton } from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { ModalDelete } from '../index';

import './index.css'

const User = ({user}) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <ModalDelete
                user={user}
                isOpen={isOpen}
                handleClose={handleClose}
            />
            <TableRow key={user.id}>
                <TableCell component='th' scope='row' size='medium'>
                    {user.name}
                </TableCell>
                <TableCell size='medium'>
                    {user.surname}
                </TableCell>
                <TableCell size='medium'>
                    {user.desc}
                </TableCell>
                <TableCell align='center'>
                    <div className='icons-wrapper'>
                        <IconButton aria-label='delete' size='small'>
                            <Link to={`/search/update/${user._id}`} className='icons-link'><EditIcon /></Link>
                        </IconButton>
                        <IconButton aria-label="delete" size='small' >
                            <DeleteIcon className='icons-link' onClick={handleClose}/>
                        </IconButton>
                    </div>
                </TableCell>
            </TableRow>
        </>
    )
}

export default User;
