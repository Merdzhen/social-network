import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/SideBar';
import { Button } from 'shared/ui/Button/Button';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './PageError.module.scss';
import 'app/styles/index.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [theme, className])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <div className={cls.error}>
          <p>{t('page-error')}</p>
          <Button onClick={reloadPage}>
            {t('reload-page')}
          </Button>
        </div>
      </div>
    </div>
  );
};
