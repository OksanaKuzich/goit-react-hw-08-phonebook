import { useState } from 'react';
import { useDispatch } from 'react-redux';
import AuthOperations from 'redux/auth/authOperations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(AuthOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input name="name" value={name} type="text" onChange={handleChange} />
      </label>
      <label>
        Email
        <input
          name="email"
          value={email}
          type="email"
          onChange={handleChange}
        />
      </label>
      <label>
        Password
        <input
          name="password"
          value={password}
          type="password"
          onChange={handleChange}
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
