import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { PersistGate } from 'redux-persist/es/integration/react';
import { MantineConfig } from '@components/core';
import i18n from '@config/i18n';
import { router } from '@config/routes';
import { persistor, store } from './services';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <MantineConfig>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <RouterProvider router={router} />
          </PersistGate>
        </Provider>
      </MantineConfig>
    </I18nextProvider>
  );
}

export default App;
