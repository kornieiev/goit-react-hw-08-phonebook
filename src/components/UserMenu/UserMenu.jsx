import { useAuth } from 'components/hooks';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { UserMenuWrap } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuWrap>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </UserMenuWrap>
  );
};
