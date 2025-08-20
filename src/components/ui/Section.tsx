import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'dark' | 'light';
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = 'default', ...props }, ref) => (
    <section
      ref={ref}
      className={cn(
        'py-16 md:py-24',
        {
          'bg-white': variant === 'default',
          'bg-gray-900 text-white': variant === 'dark',
          'bg-gray-50': variant === 'light',
        },
        className
      )}
      {...props}
    />
  )
);

Section.displayName = 'Section';

export { Section };
