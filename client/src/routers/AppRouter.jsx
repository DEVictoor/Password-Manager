import { Route, Routes } from 'react-router';
import { LoginPage } from '../pages/LoginPage';
import { OPTCodePage } from '../pages/OPTCodePage';
import { ChooseProfilePage } from '../pages/ChooseProfilePage';
import { EmailPage } from '../pages/EmailPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="chooseprofile" element={<ChooseProfilePage />} />
      <Route path="otpcode" element={<OPTCodePage />} />
      <Route path="email" element={<EmailPage />} />
    </Routes>
  );
};

export { AppRouter };
