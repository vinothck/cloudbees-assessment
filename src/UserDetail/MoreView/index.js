import * as React from 'react';

// material
import Link from '@mui/joy/Link';
import Box from '@mui/material/Box';

const App = ({
    text,
    onMore,
    isEnabled,
}) => {
    return (
        <React.Fragment>
            <Box><Link
                component="button"
                onClick={onMore}>
                {text}</Link>
                </Box>

        </React.Fragment>
    );
}

export default App;