import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';

import { CreateUpdateForm } from '../../components';
import { create, usersAsync } from '../../features/users/usersSlice';
import {Button} from "@material-ui/core";

const CreateUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
                await dispatch(create({
                    name,
                    surname: lastName,
                    desc: description
                })).unwrap()
                setName('');
                setLastName('');
                setDescription('');
            } catch (err) {
                console.error('Failed to save new User: ', err)
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
            <h1 className='title'>Create User</h1>
            <div>
                <CreateUpdateForm onClickSave={onClickSave}/>
            </div>
        </>
    )
}

export default memo(CreateUser);
