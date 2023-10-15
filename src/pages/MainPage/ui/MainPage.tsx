import { useTranslation } from 'react-i18next';
import ClasscompErrors from 'pages/TestPage/ClasscompErrors';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <>
      <div>{t('main page')}</div>
      <ClasscompErrors />
    </>
  );
};

export default MainPage;
