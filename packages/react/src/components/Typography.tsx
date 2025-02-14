import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import { cn } from '../lib/utils'

const typographyVariants = cva(
  '',
  {
    variants: {
      variant: {
        display1: 'text-[64px] leading-[72px] font-black',
        display2: 'text-[48px] leading-[56px] font-black',
        headline1: 'text-[32px] leading-[40px] font-extrabold',
        headline2: 'text-[24px] leading-[32px] font-extrabold',
        headline3: 'text-[16px] leading-[24px] font-extrabold',
        title1: 'text-[24px] leading-[32px] font-extrabold',
        title2: 'text-[18px] leading-[22px] font-extrabold',
        subtitle1: 'text-[20px] leading-[28px] font-bold',
        subtitle2: 'text-[18px] leading-[26px] font-extrabold',
        paragraph1: 'text-[16px] leading-[24px]',
        paragraph1b: 'text-[16px] leading-[24px] font-bold',
        paragraph2: 'text-[14px] leading-[22px]',
        paragraph2b: 'text-[14px] leading-[22px] font-bold',
        paragraph3: 'text-[12px] leading-[20px]',
        paragraph3b: 'text-[12px] leading-[20px] font-bold',
        caption1: 'text-[10px] leading-[13px] tracking-[2%] font-semibold',
      },
    },
    defaultVariants: {
      variant: 'paragraph1',
    },
  },
)

export type TypographyVariantsProps = VariantProps<typeof typographyVariants>

export interface TypographyProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
  VariantProps<typeof typographyVariants> {
  asChild?: boolean
  ref?: React.Ref<HTMLParagraphElement>
}

function Typography({ asChild, className, variant, ref, ...props }: TypographyProps) {
  const Comp = asChild
    ? Slot
    : 'p'
  return (
    <Comp
      className={cn(typographyVariants({ variant }), className)}
      ref={ref}
      {...props}
    />
  )
}

export { Typography, typographyVariants }
