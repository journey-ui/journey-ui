import type { StoryObj, Meta } from '@storybook/react'
import { Typography, TypographyVariantsProps } from '@journey-ui/react'

export default {
  title: 'Components/Typography',
  component: Typography,
  args: {
    children: 'Journey UI',
    variant: 'paragraph1',
  },
  argTypes: {
    variant: {
      options: ['display1', 'display2', 'headline1', 'headline2', 'headline3', 'title1', 'title2', 'subtitle1', 'subtitle2', 'paragraph1', 'paragraph1b', 'paragraph2', 'paragraph2b', 'paragraph3', 'paragraph3b', 'caption1'],
      control: 'inline-radio'
    }
  }
} as Meta<TypographyVariantsProps>

export const Display1: StoryObj<TypographyVariantsProps> = {
  args: {
    variant: 'display1',
  },
}

export const Display2: StoryObj<TypographyVariantsProps> = {
  args: {
    variant: 'display2',
  },
}

export const Headline1: StoryObj<TypographyVariantsProps> = {
  args: {
    variant: 'headline1',
  },
}

export const Headline2: StoryObj<TypographyVariantsProps> = {
  args: {
    variant: 'headline2',
  },
}

export const Headline3: StoryObj<TypographyVariantsProps> = {
  args: {
    variant: 'headline3',
  },
}

export const Title1: StoryObj<TypographyVariantsProps> = {
  args: {
    variant: 'title1',
  },
}

export const Title2: StoryObj<TypographyVariantsProps> = {
  args: {
    variant: 'title2',
  },
}

export const Subtitle1: StoryObj<TypographyVariantsProps> = {
  args: {
    variant: 'subtitle1',
  },
}

export const Subtitle2: StoryObj<TypographyVariantsProps> = {
  args: {
    variant: 'subtitle2',
  },
}

export const Paragraph1: StoryObj<TypographyVariantsProps> = {
  args: {
    variant: 'paragraph1',
  },
}

export const Paragraph1b: StoryObj<TypographyVariantsProps> = {
  name: 'Paragraph1 (bold)',
  args: {
    variant: 'paragraph1b',
  },
}

export const Paragraph2: StoryObj<TypographyVariantsProps> = {
  args: {
    variant: 'paragraph2',
  },
}

export const Paragraph2b: StoryObj<TypographyVariantsProps> = {
  name: 'Paragraph2 (bold)',
  args: {
    variant: 'paragraph2b',
  },
}

export const Paragraph3: StoryObj<TypographyVariantsProps> = {
  args: {
    variant: 'paragraph3',
  },
}

export const Paragraph3b: StoryObj<TypographyVariantsProps> = {
  name: 'Paragraph3 (bold)',
  args: {
    variant: 'paragraph3b',
  },
}

export const Caption1: StoryObj<TypographyVariantsProps> = {
  args: {
    variant: 'caption1',
  },
}
