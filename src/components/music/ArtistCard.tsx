'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Music, Heart, Users } from 'lucide-react';
import { ArtistCardProps } from '@/types';
import { formatNumber } from '@/lib/utils';

export const ArtistCard: React.FC<ArtistCardProps> = ({
  artist,
  variant = 'minimal',
  showFollowButton = true,
  onFollow,
  onViewProfile,
  className = '',
}) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    if (onFollow) {
      onFollow();
    }
  };

  const handleViewProfile = () => {
    if (onViewProfile) {
      onViewProfile();
    }
  };

  if (variant === 'minimal') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.02 }}
        className={`bg-surface rounded-xl border border-border p-4 hover:shadow-card transition-all duration-200 cursor-pointer ${className}`}
        onClick={handleViewProfile}
      >
        <div className="flex items-center space-x-3">
          <img
            src={artist.profilePicUrl || '/default-avatar.png'}
            alt={artist.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-foreground font-semibold truncate">{artist.name}</h3>
            <p className="text-muted text-sm truncate">{artist.bio}</p>
          </div>
          {showFollowButton && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                handleFollow();
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isFollowing
                  ? 'bg-muted text-muted hover:bg-muted/80'
                  : 'bg-accent text-surface hover:bg-accent/90'
              }`}
            >
              {isFollowing ? 'Following' : 'Follow'}
            </motion.button>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      className={`bg-surface rounded-xl border border-border overflow-hidden hover:shadow-card transition-all duration-200 ${className}`}
    >
      {/* Banner */}
      {artist.bannerUrl && (
        <div className="h-32 bg-gradient-to-r from-accent to-primary relative">
          <img
            src={artist.bannerUrl}
            alt={`${artist.name} banner`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      )}

      <div className="p-6">
        {/* Profile Section */}
        <div className="flex items-start space-x-4 mb-4">
          <img
            src={artist.profilePicUrl || '/default-avatar.png'}
            alt={artist.name}
            className="w-20 h-20 rounded-full object-cover border-4 border-surface"
          />
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold text-foreground mb-1">{artist.name}</h2>
            <p className="text-muted mb-3">{artist.bio}</p>

            {/* Stats */}
            <div className="flex items-center space-x-4 text-sm text-muted">
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>{formatNumber(artist.followers.length)} followers</span>
              </div>
              <div className="flex items-center space-x-1">
                <Music className="w-4 h-4" />
                <span>{artist.musicCatalog.length} releases</span>
              </div>
              <div className="flex items-center space-x-1">
                <Heart className="w-4 h-4" />
                <span>{formatNumber(artist.totalSupports)} supports</span>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          {showFollowButton && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleFollow}
              className={`flex-1 px-6 py-3 rounded-lg font-medium transition-colors ${
                isFollowing
                  ? 'bg-muted text-muted hover:bg-muted/80'
                  : 'bg-accent text-surface hover:bg-accent/90'
              }`}
            >
              {isFollowing ? 'Following' : 'Follow'}
            </motion.button>
          )}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleViewProfile}
            className="px-6 py-3 bg-primary text-surface rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            View Profile
          </motion.button>
        </div>

        {/* Social Links */}
        {artist.socialLinks && (
          <div className="flex items-center space-x-3 mt-4 pt-4 border-t border-border">
            {artist.socialLinks.farcaster && (
              <a
                href={`https://warpcast.com/${artist.socialLinks.farcaster}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors"
              >
                Farcaster
              </a>
            )}
            {artist.socialLinks.twitter && (
              <a
                href={`https://twitter.com/${artist.socialLinks.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors"
              >
                Twitter
              </a>
            )}
            {artist.socialLinks.website && (
              <a
                href={artist.socialLinks.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors"
              >
                Website
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

