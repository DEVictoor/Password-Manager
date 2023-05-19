import './App.css';
import { ConfirmPasswordPage } from './pages/ConfirmPasswordPage';
import { PasswordPage } from './pages/PasswordPage';
import { FullNamePage } from './pages/FullNamePage';
import { LoginPage } from './pages/LoginPage';
import { EmailPage } from './pages/EmailPage';
import { OPTCodePage } from './pages/OPTCodePage';

const App = () => {
  return (
    <div className="App">
      {/* <LoginPage /> */}
      {/* <EmailPage /> */}
      {/* {/* <FullNamePage /> */}
      {/* <PasswordPage /> */}
      {/* <ConfirmPasswordPage /> */}
      <OPTCodePage />
    </div>
  );
};

export { App };
