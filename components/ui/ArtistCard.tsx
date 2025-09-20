'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Users, Heart, ExternalLink } from 'lucide-react';
import { ArtistCardProps } from '@/lib/types';
import { formatNumber } from '@/lib/utils';
import { cn } from '@/lib/utils';

export function ArtistCard({ 
  artist, 
  variant = 'minimal',
  onFollow,
  onSupport 
}: ArtistCardProps) {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    onFollow?.(artist.artistId);
  };

  const handleSupport = () => {
    onSupport?.(artist.artistId);
  };

  if (variant === 'minimal') {
    return (
      <div className="card group hover:shadow-modal transition-all duration-200">
        <div className="p-4">
          <div className="flex items-center space-x-3">
            <Image
              src={artist.profilePicUrl || '/default-avatar.png'}
              alt={`${artist.name} profile`}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 truncate">
                {artist.name}
              </h3>
              <p className="text-sm text-muted flex items-center">
                <Users className="w-3 h-3 mr-1" />
                {formatNumber(artist.followerCount)} followers
              </p>
            </div>
            <button
              onClick={handleFollow}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200",
                isFollowing
                  ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  : "bg-primary text-white hover:opacity-90"
              )}
            >
              {isFollowing ? 'Following' : 'Follow'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card group hover:shadow-modal transition-all duration-200 overflow-hidden">
      {/* Banner */}
      {artist.bannerUrl && (
        <div className="relative h-32">
          <Image
            src={artist.bannerUrl}
            alt={`${artist.name} banner`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      )}

      <div className="p-6">
        <div className="flex items-start space-x-4 mb-4">
          <Image
            src={artist.profilePicUrl || '/default-avatar.png'}
            alt={`${artist.name} profile`}
            width={80}
            height={80}
            className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-bold text-gray-900 mb-1">
              {artist.name}
            </h2>
            <div className="flex items-center space-x-4 text-sm text-muted mb-2">
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                {formatNumber(artist.followerCount)} followers
              </span>
              <span className="flex items-center">
                <Heart className="w-4 h-4 mr-1" />
                ${formatNumber(artist.totalSupport)} supported
              </span>
            </div>
          </div>
        </div>

        {artist.bio && (
          <p className="text-sm text-gray-600 mb-4 line-clamp-3">
            {artist.bio}
          </p>
        )}

        {/* Social links */}
        {artist.socialLinks && (
          <div className="flex items-center space-x-3 mb-4">
            {artist.socialLinks.website && (
              <a
                href={artist.socialLinks.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors duration-200"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {artist.socialLinks.twitter && (
              <a
                href={`https://twitter.com/${artist.socialLinks.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            )}
            {artist.socialLinks.instagram && (
              <a
                href={`https://instagram.com/${artist.socialLinks.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243 0-.49.122-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.315.315.49.753.49 1.243 0 .49-.175.928-.49 1.243-.369.315-.807.49-1.297.49z"/>
                </svg>
              </a>
            )}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex items-center space-x-3">
          <button
            onClick={handleFollow}
            className={cn(
              "flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors duration-200",
              isFollowing
                ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                : "bg-primary text-white hover:opacity-90"
            )}
          >
            {isFollowing ? 'Following' : 'Follow'}
          </button>
          <button
            onClick={handleSupport}
            className="flex-1 py-2 px-4 bg-accent text-white text-sm font-medium rounded-md hover:opacity-90 transition-opacity duration-200"
          >
            Support Artist
          </button>
        </div>
      </div>
    </div>
  );
}
