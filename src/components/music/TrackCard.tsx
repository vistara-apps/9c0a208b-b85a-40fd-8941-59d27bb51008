'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Play,
  Pause,
  Heart,
  Share2,
  MoreHorizontal,
  Clock,
  Music
} from 'lucide-react';
import { TrackCardProps } from '@/types';
import { formatDuration } from '@/lib/utils';
import { useAudioPlayer } from '@/lib/audio-player';

export const TrackCard: React.FC<TrackCardProps> = ({
  track,
  artist,
  showPlayButton = true,
  showSupportButton = true,
  onPlay,
  onSupport,
  onShare,
  className = '',
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isPlaying, togglePlayPause, loadTrack } = useAudioPlayer();

  const handlePlay = () => {
    if (onPlay) {
      onPlay();
    } else {
      loadTrack(track.audioUrl);
      togglePlayPause();
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleShare = () => {
    if (onShare) {
      onShare();
    } else {
      // Default share functionality
      if (navigator.share) {
        navigator.share({
          title: `${track.title} by ${artist.name}`,
          text: `Check out "${track.title}" by ${artist.name} on SoundSync!`,
          url: window.location.href,
        });
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      className={`bg-surface rounded-xl border border-border p-4 hover:shadow-card transition-all duration-200 ${className}`}
    >
      <div className="flex items-center space-x-4">
        {/* Album Art */}
        <div className="relative flex-shrink-0">
          <img
            src={track.coverArtUrl || '/default-album-art.png'}
            alt={`${track.title} cover`}
            className="w-16 h-16 rounded-lg object-cover"
          />
          {showPlayButton && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg opacity-0 hover:opacity-100 transition-opacity"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-white" />
              ) : (
                <Play className="w-6 h-6 text-white ml-1" />
              )}
            </motion.button>
          )}
        </div>

        {/* Track Info */}
        <div className="flex-1 min-w-0">
          <h3 className="text-foreground font-semibold truncate">{track.title}</h3>
          <p className="text-muted text-sm truncate">{artist.name}</p>
          <div className="flex items-center space-x-4 mt-1">
            <div className="flex items-center space-x-1 text-xs text-muted">
              <Clock className="w-3 h-3" />
              <span>{formatDuration(track.duration || 0)}</span>
            </div>
            <div className="flex items-center space-x-1 text-xs text-muted">
              <Music className="w-3 h-3" />
              <span>{track.genre}</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          {/* Like Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleLike}
            className={`p-2 rounded-lg transition-colors ${
              isLiked
                ? 'text-destructive bg-destructive/10'
                : 'text-muted hover:text-destructive hover:bg-destructive/10'
            }`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
          </motion.button>

          {/* Share Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleShare}
            className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-muted/50 transition-colors"
          >
            <Share2 className="w-4 h-4" />
          </motion.button>

          {/* Support Button */}
          {showSupportButton && onSupport && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSupport && onSupport()}
              className="px-4 py-2 bg-accent text-surface rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors"
            >
              Support
            </motion.button>
          )}

          {/* Menu Button */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-muted/50 transition-colors"
            >
              <MoreHorizontal className="w-4 h-4" />
            </motion.button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute right-0 top-full mt-2 w-48 bg-surface border border-border rounded-lg shadow-modal py-2 z-10"
              >
                <button className="w-full text-left px-4 py-2 text-sm hover:bg-muted/50 transition-colors">
                  Add to playlist
                </button>
                <button className="w-full text-left px-4 py-2 text-sm hover:bg-muted/50 transition-colors">
                  View artist
                </button>
                <button className="w-full text-left px-4 py-2 text-sm hover:bg-muted/50 transition-colors">
                  Copy link
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Tags */}
      {track.tags && track.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {track.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-muted/50 text-xs text-muted rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};
