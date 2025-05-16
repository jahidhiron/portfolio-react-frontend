import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { errorMessage, successMessage } from '@/components/helpers/notification';

const Home: React.FC = () => {
  const { t } = useTranslation('auth');

  useEffect(() => {
    successMessage('User created successfully');
    errorMessage('Invalid credentials');
  }, []);

  return (
    <div>
      <h1>{t('welcome')}</h1>
    </div>
  );
};

export default Home;
