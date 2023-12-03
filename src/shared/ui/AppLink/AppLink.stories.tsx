import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    theme: { control: 'text' },
  },
  args: {
    to: '/',
  },
};

export default meta;
type Story = StoryObj<typeof AppLink>;
export const StandartLight: Story = {
  args: {
    children: 'Sample link',
  },
};

export const StandartDark: Story = {
  args: {
    children: 'Sample link',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const PrimaryLight: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
    children: 'Sample Primary link',
  },
};

export const PrimaryDark: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
    children: 'Sample Primary link',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SecondaryLight: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
    children: 'Sample Secondary link',
  },
};

export const SecondaryDark: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
    children: 'Sample Secondary link',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const InvertedLight: Story = {
  args: {
    theme: AppLinkTheme.INVERTED,
    children: 'Sample Inverted link',
  },
};

export const InvertedDark: Story = {
  args: {
    theme: AppLinkTheme.INVERTED,
    children: 'Sample Inverted link',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
