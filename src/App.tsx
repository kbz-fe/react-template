import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { MantineConfig } from '@components/core';
import i18n from '@config/i18n';
import { router } from '@config/routes';
import { store } from './store';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <MantineConfig>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </MantineConfig>
    </I18nextProvider>
  );
}

export default App;
