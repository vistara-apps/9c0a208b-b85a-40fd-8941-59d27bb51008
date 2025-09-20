'use client';

import { useState } from 'react';
import { DollarSign, Heart } from 'lucide-react';
import { SupportButtonProps } from '@/lib/types';
import { SUPPORT_TIERS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function SupportButton({ 
  artistId, 
  variant = 'oneTime',
  amount,
  onSupport 
}: SupportButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(amount || 3);

  const tiers = variant === 'oneTime' ? SUPPORT_TIERS.oneTime : SUPPORT_TIERS.subscription;

  const handleSupport = (supportAmount: number) => {
    onSupport?.(artistId, supportAmount, variant);
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-all duration-200",
          variant === 'oneTime'
            ? "bg-accent text-white hover:opacity-90"
            : "bg-primary text-white hover:opacity-90"
        )}
      >
        {variant === 'oneTime' ? (
          <DollarSign className="w-4 h-4" />
        ) : (
          <Heart className="w-4 h-4" />
        )}
        <span>
          {variant === 'oneTime' ? 'Support Artist' : 'Subscribe'}
        </span>
      </button>
    );
  }

  return (
    <div className="relative">
      <div className="absolute bottom-full left-0 mb-2 w-80 bg-white rounded-lg shadow-modal border border-border p-4 z-50">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900">
            {variant === 'oneTime' ? 'Support Artist' : 'Subscribe to Artist'}
          </h3>
          <button
            onClick={() => setIsOpen(false)}
            className="text-muted hover:text-gray-900 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-2 mb-4">
          {tiers.map((tier) => (
            <button
              key={tier.amount}
              onClick={() => setSelectedAmount(tier.amount)}
              className={cn(
                "w-full text-left p-3 rounded-md border transition-all duration-200",
                selectedAmount === tier.amount
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50"
              )}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-gray-900">{tier.label}</span>
                <div className={cn(
                  "w-4 h-4 rounded-full border-2 transition-colors duration-200",
                  selectedAmount === tier.amount
                    ? "border-primary bg-primary"
                    : "border-gray-300"
                )}>
                  {selectedAmount === tier.amount && (
                    <div className="w-full h-full rounded-full bg-white scale-50"></div>
                  )}
                </div>
              </div>
              <p className="text-sm text-muted">{tier.description}</p>
            </button>
          ))}
        </div>

        <button
          onClick={() => handleSupport(selectedAmount)}
          className="w-full bg-primary text-white py-3 rounded-md font-medium hover:opacity-90 transition-opacity duration-200"
        >
          {variant === 'oneTime' 
            ? `Support with $${selectedAmount}` 
            : `Subscribe for $${selectedAmount}/month`
          }
        </button>
      </div>

      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 z-40"
        onClick={() => setIsOpen(false)}
      />
    </div>
  );
}
