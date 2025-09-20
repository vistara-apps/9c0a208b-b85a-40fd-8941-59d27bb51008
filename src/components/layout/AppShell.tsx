'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BaseComponentProps } from '@/types';
import { Navigation } from './Navigation';
import { AudioPlayer } from '../music/AudioPlayer';

interface AppShellProps extends BaseComponentProps {
  variant?: 'default' | 'glass';
}

export const AppShell: React.FC<AppShellProps> = ({
  children,
  className = '',
  variant = 'default',
}) => {
  const shellClasses = variant === 'glass'
    ? 'bg-surface/80 backdrop-blur-md border border-border/50'
    : 'bg-background';

  return (
    <div className={`min-h-screen ${shellClasses}`}>
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="max-w-screen-lg mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
          className={className}
        >
          {children}
        </motion.div>
      </main>

      {/* Audio Player */}
      <AudioPlayer />

      {/* Footer */}
      <footer className="border-t border-border bg-surface/50 backdrop-blur-sm">
        <div className="max-w-screen-lg mx-auto px-6 py-4">
          <div className="flex items-center justify-between text-sm text-muted">
            <p>&copy; 2024 SoundSync. Discover emerging artists.</p>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

