import axios from 'axios';

axios.defaults.baseURL = 'http://23.88.43.148';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const fetchUsers = () => {
    return axios.get('/users')
};

export const createUser = (userData) => {
    return axios.post('/users', userData)
};

export const deleteUser = (id) => {
    return axios.delete(`/user/${id}`)
};

export const updateUser = ({id, name, surname, desc}) => {
    return axios.put(`/user/${id}`, {
        name, surname, desc
    })
};
