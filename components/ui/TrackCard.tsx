'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play, Heart, Share2, DollarSign } from 'lucide-react';
import { TrackCardProps } from '@/lib/types';
import { formatNumber, formatTimeAgo } from '@/lib/utils';
import { cn } from '@/lib/utils';

export function TrackCard({ 
  release, 
  artist, 
  variant = 'withPlayButton',
  onPlay,
  onSupport,
  onShare 
}: TrackCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
    onPlay?.(release.releaseId);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleShare = () => {
    onShare?.(release.releaseId);
  };

  const handleSupport = () => {
    onSupport?.(artist.artistId);
  };

  return (
    <div className="card group hover:shadow-modal transition-all duration-200">
      <div className="relative">
        <Image
          src={release.coverArtUrl}
          alt={`${release.title} cover art`}
          width={300}
          height={300}
          className="w-full aspect-square object-cover"
        />
        
        {/* Play overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
          <button
            onClick={handlePlay}
            className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
          >
            {isPlaying ? (
              <div className="w-6 h-6 flex items-center justify-center">
                <div className="w-1 h-4 bg-primary mr-1"></div>
                <div className="w-1 h-4 bg-primary"></div>
              </div>
            ) : (
              <Play className="w-6 h-6 text-primary ml-1" fill="currentColor" />
            )}
          </button>
        </div>

        {/* Genre tag */}
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-black/60 text-white text-xs rounded-md backdrop-blur-sm">
            {release.genre}
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 truncate">
              {release.title}
            </h3>
            <p className="text-sm text-muted truncate">
              {artist.name}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-muted mb-3">
          <span>{formatNumber(release.playCount)} plays</span>
          <span>{formatTimeAgo(release.releaseDate)}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {release.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded-sm"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={handleLike}
              className={cn(
                "flex items-center space-x-1 text-sm transition-colors duration-200",
                isLiked ? "text-red-500" : "text-muted hover:text-red-500"
              )}
            >
              <Heart className={cn("w-4 h-4", isLiked && "fill-current")} />
              <span>{formatNumber(release.likeCount + (isLiked ? 1 : 0))}</span>
            </button>
            
            <button
              onClick={handleShare}
              className="flex items-center space-x-1 text-sm text-muted hover:text-primary transition-colors duration-200"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>

          {variant === 'withSupportButton' && (
            <button
              onClick={handleSupport}
              className="flex items-center space-x-1 px-3 py-1 bg-accent text-white text-sm rounded-md hover:opacity-90 transition-opacity duration-200"
            >
              <DollarSign className="w-3 h-3" />
              <span>Support</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
