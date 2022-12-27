import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Container maxWidth="xs">
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} marginTop={5}>
          <TextField
            label="Email"
            name="email"
            value={email}
            type="email"
            onChange={handleChange}
            required
            variant="outlined"
            size="small"
          />
          <TextField
            label="Password"
            name="password"
            value={password}
            type="password"
            onChange={handleChange}
            required
            variant="outlined"
            size="small"
          />
          <Button variant="contained" type="submit">
            Login
          </Button>
        </Stack>
      </form>
    </Container>
  );
};
