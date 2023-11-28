import type { Meta, StoryObj } from '@storybook/react';

import { Button, ThemeButton } from './Button';
import 'app/styles/index.scss';
import 'app/styles/indexCopy.css';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    theme: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;
export const Primary: Story = {
  args: {
    children: 'Sample Btn',
  },
};

export const Clear: Story = {
  args: {
    theme: ThemeButton.CLEAR,
    children: 'Sample Clear Btn',
  },
};

export const Outlined: Story = {
  args: {
    theme: ThemeButton.OUTLINE,
    children: 'Sample Outlined Btn',
  },
};
