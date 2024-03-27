import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

const App = ({
    altName,
    picture
}) => {
    return (
        <Box component="section" sx={{ p: 5 }}>
            <Avatar
                alt={altName}
                src={picture}
                sx={{ width: 150, height: 150 }}
            />
        </Box>
    )
}

export default App;