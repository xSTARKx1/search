import React, { useEffect, useState } from 'react';
import { FormControl, TextField, Button } from '@mui/material';

const CreateUpdateForm = ({ user, onClickSave }) => {
    const [name , setName] = useState('');
    const [lastName , setLastName] = useState('');
    const [description , setDescription] = useState('');
    const [addRequestStatus, setAddRequestStatus] = useState('idle');

    const canSave =
        [name, lastName, description].every(Boolean)
        && addRequestStatus === 'idle';

    useEffect(() => {
        if (user) {
            setName(user.name);
            setLastName(user.surname);
            setDescription(user.desc);
        }
    }, [user])

    return (
        <>
            <div>
                <FormControl
                    style={{
                        display:'flex',
                        width: '50%',
                        margin: '0 auto',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                    }}
                >
                    <TextField
                        fullWidth label="Name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Last Name"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Description"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        multiline
                        minRows={4}
                        margin="normal"
                    />
                    <Button
                        onClick={() => {
                            onClickSave(
                                canSave,
                                setAddRequestStatus,
                                name,
                                lastName,
                                description,
                                setName,
                                setLastName,
                                setDescription
                            );
                        }}
                        disabled={!canSave}
                        variant="outlined" type='submit'>
                        {user ? 'Update' : 'Create'}
                    </Button>
                </FormControl>
            </div>
        </>
    )
}

export default CreateUpdateForm;
