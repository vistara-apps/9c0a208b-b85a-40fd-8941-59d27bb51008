'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play, Heart, MessageCircle, Share2, Music } from 'lucide-react';
import { formatTimeAgo, formatNumber } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface SocialFeedItemProps {
  variant: 'listening' | 'post';
  user: {
    username: string;
    profilePicUrl?: string;
  };
  timestamp: string;
  content?: string;
  track?: {
    title: string;
    artist: string;
    coverArtUrl: string;
    duration?: number;
  };
  engagement?: {
    likes: number;
    comments: number;
    shares: number;
  };
  onPlay?: () => void;
  onLike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
}

export function SocialFeedItem({
  variant,
  user,
  timestamp,
  content,
  track,
  engagement = { likes: 0, comments: 0, shares: 0 },
  onPlay,
  onLike,
  onComment,
  onShare
}: SocialFeedItemProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike?.();
  };

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
    onPlay?.();
  };

  return (
    <div className="card hover:shadow-modal transition-all duration-200">
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-3">
          <Image
            src={user.profilePicUrl || '/default-avatar.png'}
            alt={`${user.username} profile`}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <span className="font-medium text-gray-900">{user.username}</span>
              {variant === 'listening' && (
                <div className="flex items-center space-x-1 text-accent">
                  <Music className="w-3 h-3" />
                  <span className="text-xs font-medium">is listening</span>
                </div>
              )}
            </div>
            <p className="text-xs text-muted">{formatTimeAgo(timestamp)}</p>
          </div>
        </div>

        {/* Content */}
        {content && (
          <p className="text-gray-900 mb-3 leading-relaxed">{content}</p>
        )}

        {/* Track info for listening posts */}
        {variant === 'listening' && track && (
          <div className="bg-gray-50 rounded-lg p-3 mb-3">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Image
                  src={track.coverArtUrl}
                  alt={`${track.title} cover`}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-md object-cover"
                />
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 bg-black/40 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-center justify-center"
                >
                  {isPlaying ? (
                    <div className="w-4 h-4 flex items-center justify-center">
                      <div className="w-0.5 h-3 bg-white mr-0.5"></div>
                      <div className="w-0.5 h-3 bg-white"></div>
                    </div>
                  ) : (
                    <Play className="w-4 h-4 text-white ml-0.5" fill="currentColor" />
                  )}
                </button>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900 truncate">{track.title}</p>
                <p className="text-sm text-muted truncate">{track.artist}</p>
              </div>
              {track.duration && (
                <span className="text-xs text-muted">
                  {Math.floor(track.duration / 60)}:{(track.duration % 60).toString().padStart(2, '0')}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Engagement */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex items-center space-x-6">
            <button
              onClick={handleLike}
              className={cn(
                "flex items-center space-x-1 text-sm transition-colors duration-200",
                isLiked ? "text-red-500" : "text-muted hover:text-red-500"
              )}
            >
              <Heart className={cn("w-4 h-4", isLiked && "fill-current")} />
              <span>{formatNumber(engagement.likes + (isLiked ? 1 : 0))}</span>
            </button>

            <button
              onClick={onComment}
              className="flex items-center space-x-1 text-sm text-muted hover:text-primary transition-colors duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{formatNumber(engagement.comments)}</span>
            </button>

            <button
              onClick={onShare}
              className="flex items-center space-x-1 text-sm text-muted hover:text-primary transition-colors duration-200"
            >
              <Share2 className="w-4 h-4" />
              <span>{formatNumber(engagement.shares)}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
