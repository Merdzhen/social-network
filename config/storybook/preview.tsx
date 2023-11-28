import type { Preview } from '@storybook/react';
import 'app/styles/index.scss';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { ThemeDecorator } from '../../src/shared/config/ThemeDecorator/ThemeDecorator';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // decorators: [
  //   (Story) => (
  //     <div className={`app ${Theme.LIGHT}`}><Story /></div>
  //   ),
  // ],
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export default preview;
