import { useAuth } from 'components/hooks';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import {
  UserMenuLogOutButton,
  UserMenuP,
  UserMenuWrap,
} from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuWrap>
      <UserMenuP>
        Welcome, <b>{user.name}</b>
      </UserMenuP>
      <UserMenuLogOutButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </UserMenuLogOutButton>
    </UserMenuWrap>
  );
};
