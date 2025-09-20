'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AppShellProps {
  children: ReactNode;
  variant?: 'default' | 'glass';
  className?: string;
}

export function AppShell({ children, variant = 'default', className }: AppShellProps) {
  return (
    <div className={cn(
      'min-h-screen',
      variant === 'glass' && 'glass-effect',
      className
    )}>
      <div className="container-fluid py-6">
        {children}
      </div>
    </div>
  );
}
