import * as React from 'react';
import { useNavigate } from 'react-router-dom';

// custom
import UserInfoItem from './../UserInfoItem';
import UserList from '../../Users/UserList';

// Hooks
import { useFetch } from './../../Hooks/UseFetch';

const App = ({ followersUrl }) => {
    const navigate = useNavigate()

    const followers = useFetch(followersUrl) || [];
    

    const onUserClick = (_event, userId) => {
        const user = followers.find(obj => obj.id === userId);
        navigate(`/user/${user.login}`, { state: { login: user.login } });
    }
    return (
        <React.Fragment>
            <UserInfoItem
                label={'Followers'}
                value={<UserList
                    userList={followers}
                    onUserClick={onUserClick}
                />}
            />
        </React.Fragment>
    );
}

export default App;