'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Heart,
  Repeat,
  Shuffle
} from 'lucide-react';
import { useAudioPlayer } from '@/lib/audio-player';
import { formatDuration } from '@/lib/utils';

export const AudioPlayer: React.FC = () => {
  const {
    isPlaying,
    currentTime,
    duration,
    volume,
    isLoading,
    play,
    pause,
    seek,
    setVolume,
    togglePlayPause,
  } = useAudioPlayer();

  const [isExpanded, setIsExpanded] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [isRepeated, setIsRepeated] = useState(false);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newProgress = (clickX / rect.width) * 100;
    const newTime = (newProgress / 100) * duration;
    seek(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value) / 100;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    if (isMuted) {
      setVolume(0.7);
      setIsMuted(false);
    } else {
      setVolume(0);
      setIsMuted(true);
    }
  };

  if (!isPlaying && !isExpanded) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        exit={{ y: 100 }}
        className="fixed bottom-0 left-0 right-0 bg-surface/95 backdrop-blur-md border-t border-border z-50"
      >
        <div className="max-w-screen-lg mx-auto px-6">
          {/* Progress Bar */}
          <div
            className="h-1 bg-muted cursor-pointer relative"
            onClick={handleProgressClick}
          >
            <motion.div
              className="h-full bg-accent"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          <div className="py-4">
            <div className="flex items-center justify-between">
              {/* Track Info */}
              <div className="flex items-center space-x-3 flex-1 min-w-0">
                <img
                  src="/default-album-art.png"
                  alt="Current track"
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="min-w-0 flex-1">
                  <h4 className="text-foreground font-medium truncate">Current Track Title</h4>
                  <p className="text-muted text-sm truncate">Artist Name</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsLiked(!isLiked)}
                  className={`p-2 rounded-lg transition-colors ${
                    isLiked
                      ? 'text-destructive'
                      : 'text-muted hover:text-destructive'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                </motion.button>
              </div>

              {/* Controls */}
              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsShuffled(!isShuffled)}
                  className={`p-2 rounded-lg transition-colors ${
                    isShuffled
                      ? 'text-accent'
                      : 'text-muted hover:text-foreground'
                  }`}
                >
                  <Shuffle className="w-4 h-4" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg text-muted hover:text-foreground transition-colors"
                >
                  <SkipBack className="w-5 h-5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={togglePlayPause}
                  disabled={isLoading}
                  className="p-3 bg-accent text-surface rounded-full hover:bg-accent/90 transition-colors disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-surface border-t-transparent rounded-full animate-spin" />
                  ) : isPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5 ml-0.5" />
                  )}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg text-muted hover:text-foreground transition-colors"
                >
                  <SkipForward className="w-5 h-5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsRepeated(!isRepeated)}
                  className={`p-2 rounded-lg transition-colors ${
                    isRepeated
                      ? 'text-accent'
                      : 'text-muted hover:text-foreground'
                  }`}
                >
                  <Repeat className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Volume & Time */}
              <div className="flex items-center space-x-4 flex-1 justify-end">
                <span className="text-xs text-muted font-mono">
                  {formatDuration(currentTime)} / {formatDuration(duration)}
                </span>

                <div className="flex items-center space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleMute}
                    className="p-1 rounded text-muted hover:text-foreground transition-colors"
                  >
                    {isMuted || volume === 0 ? (
                      <VolumeX className="w-4 h-4" />
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                  </motion.button>

                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={isMuted ? 0 : volume * 100}
                    onChange={handleVolumeChange}
                    className="w-20 h-1 bg-muted rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

