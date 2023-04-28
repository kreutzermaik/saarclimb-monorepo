import type { Meta, StoryObj } from '@storybook/react';
import "./button.css";
import { Button } from 'ui';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/SolidButton',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Primary SolidButton',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary SolidButton',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Large SolidButton',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small SolidButton',
  },
};
