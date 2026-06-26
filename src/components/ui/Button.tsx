'use client'

import Link from 'next/link'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'emergency'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  className?: string
  children: React.ReactNode
}

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-blue text-white hover:bg-blue-dark shadow-premium-md hover:shadow-premium-lg',
  secondary: 'border-2 border-blue text-blue hover:bg-blue hover:text-white hover:shadow-premium-md',
  ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100',
  emergency: 'bg-orange-600 text-white hover:bg-orange-700',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', href, className, children, ...props }, ref) => {
    const classes = cn(
      'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 active:scale-[0.96]',
      variants[variant],
      sizes[size],
      className
    )

    if (href) {
      return (
        <Link href={href} ref={ref as React.Ref<HTMLAnchorElement>} className={classes} {...(props as any)}>
          {children}
        </Link>
      )
    }

    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} className={classes} {...(props as any)}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
