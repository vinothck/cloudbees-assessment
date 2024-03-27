import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import List from '@mui/material/List';

// components
import Userlist from './UserList';

// Hooks
import { useFetch } from './../Hooks/UseFetch';

const Users = () => {
    const navigate = useNavigate()

    const userList = useFetch('https://api.github.com/users') || []

    const onUserClick = (_event, userId) => {
        const user = userList.find(obj => obj.id === userId);
        navigate(`/user/${user.login}`, { state: { login: user.login }});
    };

    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Userlist
                userList={userList}
                onUserClick={onUserClick}
            />
        </List>
    );
}

export default Users;
