import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';

import UserBox from './UserBox';

const UserList = ({
    userList,
    onUserClick,
}) => {
    return userList.map((user) => {
        const { id, login, avatar_url } = user;
        return (
            <React.Fragment key={id}>
                <ListItem alignItems="flex-start">
                    <UserBox
                        userId={id}
                        login={login}
                        avatarUrl={avatar_url}
                        onUserClick={onUserClick}
                    />
                </ListItem>
                <Divider />
            </React.Fragment>
        )
    })
}

export default UserList;