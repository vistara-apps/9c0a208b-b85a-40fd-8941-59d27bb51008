'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, DollarSign, Crown } from 'lucide-react';
import { SupportButtonProps } from '@/types';

export const SupportButton: React.FC<SupportButtonProps> = ({
  artistId,
  variant = 'oneTime',
  amount,
  onSupport,
  className = '',
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const handleSupport = async (supportAmount: number, type: 'one-time' | 'subscription') => {
    setIsLoading(true);
    try {
      if (onSupport) {
        await onSupport(supportAmount, type);
      }
      setShowOptions(false);
    } catch (error) {
      console.error('Support transaction failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const supportOptions = [
    { amount: 1, label: '$1', type: 'one-time' as const },
    { amount: 3, label: '$3', type: 'one-time' as const },
    { amount: 5, label: '$5', type: 'one-time' as const },
    { amount: 3, label: '$3/mo', type: 'subscription' as const },
    { amount: 5, label: '$5/mo', type: 'subscription' as const },
  ];

  if (variant === 'oneTime') {
    return (
      <div className={`relative ${className}`}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowOptions(!showOptions)}
          disabled={isLoading}
          className="flex items-center space-x-2 px-6 py-3 bg-accent text-surface rounded-lg font-medium hover:bg-accent/90 transition-colors disabled:opacity-50"
        >
          {isLoading ? (
            <div className="w-4 h-4 border-2 border-surface border-t-transparent rounded-full animate-spin" />
          ) : (
            <Heart className="w-4 h-4" />
          )}
          <span>Support Artist</span>
        </motion.button>

        {/* Support Options Dropdown */}
        {showOptions && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="absolute bottom-full left-0 mb-2 w-64 bg-surface border border-border rounded-lg shadow-modal p-4 z-10"
          >
            <h4 className="text-sm font-medium text-foreground mb-3">Support this artist</h4>
            <div className="grid grid-cols-2 gap-2">
              {supportOptions.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleSupport(option.amount, option.type)}
                  className="flex items-center justify-center space-x-1 p-3 bg-muted/50 hover:bg-muted rounded-lg text-sm font-medium transition-colors"
                >
                  {option.type === 'subscription' ? (
                    <Crown className="w-3 h-3" />
                  ) : (
                    <DollarSign className="w-3 h-3" />
                  )}
                  <span>{option.label}</span>
                </motion.button>
              ))}
            </div>
            <p className="text-xs text-muted mt-3">
              Your support helps artists create more music and goes directly to them.
            </p>
          </motion.div>
        )}
      </div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => handleSupport(amount || 1, 'subscription')}
      disabled={isLoading}
      className="flex items-center space-x-2 px-6 py-3 bg-primary text-surface rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
    >
      {isLoading ? (
        <div className="w-4 h-4 border-2 border-surface border-t-transparent rounded-full animate-spin" />
      ) : (
        <Crown className="w-4 h-4" />
      )}
      <span>Subscribe</span>
    </motion.button>
  );
};

