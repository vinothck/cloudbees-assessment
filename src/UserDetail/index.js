import * as React from 'react';

// material
import Box from '@mui/material/Box';

// core
import { useLocation } from 'react-router-dom';

// Custom
import UserAvatar from './UserAvatar';
import UserInfo from './UserInfo';

// Hooks
import { useFetch } from './../Hooks/UseFetch';

// css
import './style.css';

const App = () => {
  const location = useLocation();

  const user = useFetch(
    `https://api.github.com/users/${location.state.login}`) || {};

  const {
    name: altName,
    avatar_url: picture,
    name: userName,
    firstName,
    secondName,
    location: ulocation,
    company,
    followers_url: followersUrl,
  } = user;

  return (
    <React.Fragment>
      <Box className="flex-container">
        <Box className='avator'>
          <UserAvatar
            altName={altName}
            picture={picture}
          />
        </Box>
        <Box className='details'>
          <UserInfo
            userName={userName}
            firstName={firstName}
            secondName={secondName}
            location={ulocation}
            company={company}
            followersUrl={followersUrl}
          />
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default App;