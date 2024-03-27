import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const UserBox = ({
    userId,
    login,
    avatarUrl,
    selectedUser,
    onUserClick,
}) => {
    return (
        <ListItemButton
            onClick={(event) => onUserClick(event, userId)}
        >
            <ListItemAvatar>
                <Avatar alt={login} src={avatarUrl} />
            </ListItemAvatar>
            <ListItemText primary={login} />
        </ListItemButton>
    )
}

export default UserBox;