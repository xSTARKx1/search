import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';

import { CreateUpdateForm } from '../../components';
import { selectUserById, update, usersAsync } from '../../features/users/usersSlice';

const UpdateUser = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => selectUserById(state, params.id));

    const onClickSave = async (
        canSave,
        setAddRequestStatus,
        name,
        lastName,
        description,
        setName,
        setLastName,
        setDescription
    ) => {
        if (canSave) {
            try {
                setAddRequestStatus('pending');
                await dispatch(update({
                    id: params.id,
                    name,
                    surname: lastName,
                    desc: description
                })).unwrap()
                setName('');
                setLastName('');
                setDescription('');
            } catch (err) {
                console.error('Failed to update User: ', err)
            } finally {
                dispatch(usersAsync());
                setAddRequestStatus('idle');
                navigate('/');
            }
        }
    }

    return (
        <>
            <div className='create-button'>
                <Button variant='contained' color='primary'>
                    <Link to={'/'} className='link'>GO BACK</Link>
                </Button>
            </div>
            <h1 className='title'>Update User</h1>
            <div>
                <CreateUpdateForm user={user} onClickSave={onClickSave}/>
            </div>
        </>
    )
}

export default UpdateUser;
