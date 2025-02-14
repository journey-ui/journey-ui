import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps, Icon } from '@journey-ui/react'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'BUTTON',
    variant: 'primary',
    size: 'regular',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: 'inline-radio'
    },
    size: {
      options: ['regular', 'sm', 'xsm', 'icon-regular', 'icon-sm', 'icon-xsm'],
      control: 'inline-radio'
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    }
  }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary'
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary'
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary'
  },
}

export const ButtonIcon: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary',
    size: 'icon-regular',
    children: (
      <>
        <Icon icon='account-user' size={24} />
      </>
    )
  },
}

export const WithLeftIcon: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary',
    children: (
      <>
        <Icon icon='account-user' />
        Próximo passo
      </>
    )
  },
}

export const WithRightIcon: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary',
    children: (
      <>
        Próximo passo
        <Icon icon='chevron-down' />
      </>
    )
  },
}

export const WithDoubleIcon: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary',
    children: (
      <>
        <Icon icon='account-user' />
        Próximo passo
        <Icon icon='chevron-down' />
      </>
    )
  },
}
