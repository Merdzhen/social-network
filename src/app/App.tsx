import React, { Suspense } from 'react';
import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/SideBar';

function App() {
  const { theme } = useTheme();

  // имитация ошибки для тестирования ErrorBoundary
  // React.useEffect(() => {
  // if (Math.random() < 0.5) {
  // throw new Error();
  // }
  // }, []);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
