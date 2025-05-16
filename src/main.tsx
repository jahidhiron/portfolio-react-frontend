import '@/i18n/config';
import { HistoryRouter } from '@/store/services';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import { Loader } from './components/helpers/Loader';
import AuthProvider from './contexts/AuthContext';
import './index.css';
import { persistor, store } from './store';

const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <HelmetProvider>
        <Provider store={store}>
          <PersistGate loading={<Loader />} persistor={persistor}>
            <Router>
              <HistoryRouter />
              <AuthProvider>
                <App />
              </AuthProvider>
            </Router>
          </PersistGate>
        </Provider>
      </HelmetProvider>
    </StrictMode>
  );
}
