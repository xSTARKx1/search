import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
    Table,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
    Button
} from '@material-ui/core';
import { TablePagination, TableFooter } from "@mui/material";

import { selectUsers } from '../../features/users/usersSlice';
import { User } from '../../components';

import './index.css';

const AllUsers = () => {
    const users = useSelector(selectUsers);
    const [page, setPage] = useState(0);
    const [rowsPerPage] = useState(5);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <>
            <h1 className='title'>Users</h1>
            <div className='create-button'>
                <Button variant='contained' color='primary'>
                    <Link to={'/create'} className='link'>ADD NEW USER</Link>
                </Button>
            </div>
            <Table>
                <TableHead style={{ zIndex: 1, boxShadow: '0px 2px 10px 1px rgba(0,0,0,0.1)' }}>
                    <TableRow>
                        <TableCell>
                            Name
                        </TableCell>
                        <TableCell>
                            Last Name
                        </TableCell>
                        <TableCell>
                            Description
                        </TableCell>
                        <TableCell size={"small"} align='center'>
                            Actions
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                            ? users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : users
                    ).map(user => <User key={user.id} user={user}/>)}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={false}
                            count={users.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: {
                                    'aria-label': 'rows per page',
                                },
                                native: true,
                            }}
                            onPageChange={handleChangePage}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </>
    )
}

export default memo(AllUsers);
