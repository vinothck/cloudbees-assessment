import * as React from 'react';
import List from '@mui/material/List';

// Component
import UserInfoItem from './UserInfoItem';
import MoreView  from './MoreView';
import Followers from './MoreView/Followers';

const App = ({
    userName,
    firstName,
    secondName,
    location,
    company,
    followersUrl,
}) => {
    const [isMore, setMore] = React.useState(false);
    const userInfo = [
        { key: 'User Name', value: userName },
        { key: 'First Name', value: firstName },
        { key: 'Second Name', value: secondName },
        { key: 'Location', value: location },
        { key: 'Company', value: company },
    ];

    const onMore = () => {
      setMore(!isMore);
    }

    return (
        <List sx={{ width: '100%' }}>
            {
                userInfo.map((info) => {
                    if (info.value) {
                        return (
                            <UserInfoItem
                                key={info.key}
                                label={info.key}
                                value={info.value}
                            />
                        )
                    } else {
                        return null;
                    }
                })
            }

            {isMore && <Followers
                followersUrl={followersUrl}
            />}
            <UserInfoItem
                component={<MoreView
                    text={isMore ? 'less' : 'more'}
                    isEnabled={isMore}
                    onMore={onMore}
                />}
            />
        </List>
    )
}

export default App;