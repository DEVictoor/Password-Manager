import { Route, Routes } from 'react-router';
import { LoginPage } from '../pages/LoginPage';
import { OPTCodePage } from '../pages/OPTCodePage';
import { ChooseProfilePage } from '../pages/ChooseProfilePage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="chooseprofile" element={<ChooseProfilePage />} />
      <Route path="otpcode" element={<OPTCodePage />} />
    </Routes>
  );
};

export { AppRouter };
