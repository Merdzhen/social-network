import React from 'react';

// export const AboutPageAsync = React.lazy(() => import('./AboutPage'));

export const AboutPageAsync = React.lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // для возможности увидеть прелоадер, потом удалить
  setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
