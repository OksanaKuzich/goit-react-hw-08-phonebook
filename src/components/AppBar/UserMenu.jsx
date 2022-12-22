import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  return (
    <div>
      <p>Welcome, {name}!</p>
      <button type="button" onClick={() => dispatch()}>Logout</button>
    </div>
  );
};
