import { Link } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useLocation } from 'react-router-dom';

export const LogMenu = () => {
  const location = useLocation();
  const pathLocation = location.pathname;
  const [value, setValue] = React.useState('/login');

  React.useEffect(() => {
    if (pathLocation === '/register') {
      setValue('/register');
    } else if (pathLocation === '/login') {
      setValue('/login');
    }
  }, [pathLocation]);

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
            value="/register"
          />
          <Tab component={Link} to="/login" label="Log In" value="/login" />
        </Tabs>
      </Box>
    </nav>
  );
};
