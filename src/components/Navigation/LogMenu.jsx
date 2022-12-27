import { Link } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

export const LogMenu = () => {
  const [value, setValue] = React.useState('login');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <nav>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs onChange={handleChange} value={value}>
          <Tab
            component={Link}
            to="/register"
            label="Register"
            value="register"
          />
          <Tab component={Link} to="/login" label="Log In" value="login" />
        </Tabs>
      </Box>
    </nav>
  );
};
