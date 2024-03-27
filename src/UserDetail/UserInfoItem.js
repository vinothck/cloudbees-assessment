import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import FormLabel from '@mui/joy/FormLabel';

const App = ({
    label,
    value,
    component,
}) => {
        return (component) ? <ListItem alignItems="flex-start" display="flex">
            {component}
        </ListItem> : (
        <ListItem alignItems="flex-start" display="flex">
            <FormLabel sx={{ width: '20%' }}>{label}</FormLabel>
            <FormLabel sx={{ width: '40%', color: '#545b64' }}>: {value}</FormLabel>
        </ListItem>
    );
}

export default App;