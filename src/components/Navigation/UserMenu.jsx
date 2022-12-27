import authSelectors from 'redux/auth/authSelectors';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/authOperations';
import * as React from 'react';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import Typography from '@mui/material/Typography';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const name = useSelector(authSelectors.getUserName);
  const [value, setValue] = React.useState('contacts');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab
            component={Link}
            to="/contacts"
            label="Contacts"
            active="true"
            value="contacts"
          />
          <Tab
            onClick={() => dispatch(authOperations.logOut())}
            value="logout"
            icon={<LogoutIcon fontSize="small" />}
            aria-label="logout"
          />
        </Tabs>
      </Box>
      <Typography align="center" variant="h5" margin={3} fontWeight="700">
        Welcome in your phonebook, {name}!
      </Typography>
    </>
  );
};
