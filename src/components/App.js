import { useDispatch } from 'react-redux';
import { MainWrap } from './App.styled';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import PhoneBookPage from './pages/PhoneBookPage';
import { useAuth } from './hooks';
import { refreshUser } from '../redux/auth/operations';

export default function App() {
  const dispatch = useDispatch();
  const { isRefresing } = useAuth();

  console.log('start');
  // console.log(isRefresing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <MainWrap>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<PhoneBookPage />} />
          </Route>
        </Routes>
      </MainWrap>
    </>
  );
}
