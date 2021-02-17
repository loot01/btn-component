import React from 'react';
import Button from '../Button.jsx';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['none', 'outline', 'text'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['default', 'primary', 'secondary', 'danger'],
      },
    },
    disableShadow: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: 'Primary',
  color: 'primary',
  variant: 'default',
  size: 'md',
  disabled: false,
  disableShadow: false,
};

export const Secondary = Template.bind({});

Secondary.args = {
  text: 'Secondary',
  color: 'secondary',
  variant: 'default',
  size: 'md',
  disabled: false,
  disableShadow: false,
};

export const Danger = Template.bind({});

Danger.args = {
  text: 'Danger',
  color: 'danger',
  variant: 'default',
  size: 'md',
  disabled: false,
  disableShadow: false,
};

export const Outline = Template.bind({});
Outline.args = {
  text: 'Outline',
  color: 'secondary',
  variant: 'outline',
  size: 'md',
  disabled: false,
  disableShadow: true,
};

export const Text = Template.bind({});
Text.args = {
  text: 'Danger',
  color: 'danger',
  variant: 'text',
  size: 'md',
  disabled: false,
  disableShadow: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled',
  color: 'default',
  variant: 'default',
  size: 'md',
  disabled: true,
  disableShadow: true,
};

export const startIcon = Template.bind({});
startIcon.args = {
  text: 'Default',
  color: 'primary',
  variant: 'default',
  size: 'md',
  disabled: false,
  disableShadow: false,
  startIcon: 'local_grocery_store',
};

export const endIcon = Template.bind({});
endIcon.args = {
  text: 'Default',
  color: 'primary',
  variant: 'default',
  size: 'md',
  disabled: false,
  disableShadow: false,
  endIcon: 'local_grocery_store',
};
