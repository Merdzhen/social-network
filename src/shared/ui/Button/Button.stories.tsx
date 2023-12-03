import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    theme: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;
export const PrimaryLight: Story = {
  args: {
    children: 'Sample Btn',
  },
};

export const PrimaryDark: Story = {
  args: {
    children: 'Sample Btn',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const ClearLight: Story = {
  args: {
    theme: ThemeButton.CLEAR,
    children: 'Sample Clear Btn',
  },
};

export const ClearDark: Story = {
  args: {
    theme: ThemeButton.CLEAR,
    children: 'Sample Clear Btn',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OutlinedLight: Story = {
  args: {
    theme: ThemeButton.OUTLINE,
    children: 'Sample Outlined Btn',
  },
};

export const OutlinedDark: Story = {
  args: {
    theme: ThemeButton.OUTLINE,
    children: 'Sample Outlined Btn',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
