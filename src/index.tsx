import { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { PageError } from 'widgets/PageError';
import App from './app/App';

import './shared/config/i18n/i18n';

render(
  <BrowserRouter>
    <ThemeProvider>
      <ErrorBoundary
        fallback={
          <Suspense fallback=""><PageError className="app" /></Suspense>
        }
      >
        <App />
      </ErrorBoundary>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
