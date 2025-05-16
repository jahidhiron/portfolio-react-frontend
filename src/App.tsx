import React from 'react';

import LanguageSwitcher from './components/helpers/LanguageSwitcher';
import { NotificationProvider } from './components/helpers/notification';
import Router from './routes';

const App: React.FC = () => {
  // const x: string = 123;

  return (
    <>
      <LanguageSwitcher />
      <NotificationProvider />
      <Router />
    </>
  );
};

export default App;
