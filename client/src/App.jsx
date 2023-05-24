import './App.css';
import { ConfirmPasswordPage } from './pages/ConfirmPasswordPage';
import { PasswordPage } from './pages/PasswordPage';
import { FullNamePage } from './pages/FullNamePage';
import { LoginPage } from './pages/LoginPage';
import { EmailPage } from './pages/EmailPage';
import { OPTCodePage } from './pages/OPTCodePage';
import { PurchaseMessagePage } from './pages/PurchaseMessagePage';
import { ChooseProfilePage } from './pages/ChooseProfilePage';
import { MainMenuPage } from './pages/MainMenuPage';
import { NewVaultPage } from './pages/NewVaultPage';
import { AccountPage } from './pages/AccountPage';
import { AccountPasswordPage } from './pages/AccountPasswordPage';
import { ApplicationPage } from './pages/ApplicationPage';

const App = () => {
  return (
    <div className="App">
      {/* <LoginPage /> */}
      {/* <EmailPage /> */}
      {/* {/* <FullNamePage /> */}
      {/* <PasswordPage /> */}
      {/* <ConfirmPasswordPage /> */}
      {/* <OPTCodePage /> */}
      {/* <PurchaseMessagePage /> */}
      {/* <ChooseProfilePage /> */}
      {/* <MainMenuPage /> */}
      {/* <NewVaultPage /> */}
      {/* <AccountPage />*/}
      {/* <AccountPasswordPage /> */}
      <ApplicationPage />
    </div>
  );
};

export { App };
