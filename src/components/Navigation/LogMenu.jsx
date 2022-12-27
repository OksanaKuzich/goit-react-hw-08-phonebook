import { Link } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

export const LogMenu = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <nav>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab component={Link} to="/register" label="Register" />
          <Tab component={Link} to="/login" label="Log In" />
        </Tabs>
      </Box>
    </nav>
  );
};
