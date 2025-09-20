'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Home,
  Search,
  User,
  Music,
  Heart,
  Settings,
  Wallet
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigationItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/discover', label: 'Discover', icon: Search },
  { href: '/artists', label: 'Artists', icon: Music },
  { href: '/favorites', label: 'Favorites', icon: Heart },
  { href: '/profile', label: 'Profile', icon: User },
];

export const Navigation: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-border">
      <div className="max-w-screen-lg mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <Music className="w-5 h-5 text-surface" />
              </div>
            </motion.div>
            <span className="text-xl font-bold text-foreground">SoundSync</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors',
                    isActive
                      ? 'text-primary bg-primary/10'
                      : 'text-muted hover:text-foreground hover:bg-muted/50'
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Wallet & Settings */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-primary text-surface hover:bg-primary/90 transition-colors"
            >
              <Wallet className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-muted/50 transition-colors"
            >
              <Settings className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-4">
          <div className="flex items-center justify-around">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors',
                    isActive
                      ? 'text-primary'
                      : 'text-muted hover:text-foreground'
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-xs">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

