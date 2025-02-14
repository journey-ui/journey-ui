import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import { cn } from '../lib/utils'

const buttonVariants = cva(
  'flex items-center justify-center gap-2 font-extrabold rounded-full cursor-pointer disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'text-white bg-primary hover:bg-primary-3 disabled:bg-grey-3',
        secondary: 'text-primary border border-primary hover:text-primary-3 hover:border-primary-3 disabled:text-grey-3 disabled:border-grey-3',
        tertiary: 'text-primary hover:text-primary-3 disabled:text-grey-3',
      },
      size: {
        regular: "h-14 px-8 py-4 text-[16px] leading-[24px]",
        sm: 'h-[46px] px-6 py-3 text-[14px] leading-[22px]',
        xsm: 'h-[36px] px-4 py-2 text-[12px] leading-[20px]',
        'icon-regular': "h-[72px] w-[72px]",
        'icon-sm': 'h-[46px] w-[46px]',
        'icon-xsm': 'h-[36px] w-[36px]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'regular',
    },
  },
)

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
  ref?: React.Ref<HTMLButtonElement>
}

function Button({ asChild, className, variant, size, ref, ...props }: ButtonProps) {
  const Comp = asChild
    ? Slot
    : 'button'
    
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      ref={ref}
      {...props}
    />
  )
}

export { Button, buttonVariants }
