'use client';

import { useState, useEffect } from 'react';
import { ArtistCard } from '@/components/ui/ArtistCard';
import { TrackCard } from '@/components/ui/TrackCard';
import { mockArtists, mockReleases, getArtistById, getTrendingReleases } from '@/lib/mock-data';
import { Artist, Release } from '@/lib/types';
import { TrendingUp, Music, Users } from 'lucide-react';

export function TrendingSection() {
  const [trendingReleases, setTrendingReleases] = useState<Release[]>([]);
  const [trendingArtists, setTrendingArtists] = useState<Artist[]>([]);
  const [activeSection, setActiveSection] = useState<'tracks' | 'artists'>('tracks');

  useEffect(() => {
    // Get trending content
    const trending = getTrendingReleases().slice(0, 6);
    const topArtists = [...mockArtists]
      .sort((a, b) => b.followerCount - a.followerCount)
      .slice(0, 6);

    setTrendingReleases(trending);
    setTrendingArtists(topArtists);
  }, []);

  const handlePlay = (releaseId: string) => {
    console.log('Playing track:', releaseId);
  };

  const handleSupport = (artistId: string) => {
    console.log('Supporting artist:', artistId);
  };

  const handleFollow = (artistId: string) => {
    console.log('Following artist:', artistId);
  };

  const handleShare = (releaseId: string) => {
    console.log('Sharing track:', releaseId);
  };

  return (
    <section className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Trending Now</h2>
            <p className="text-muted">Discover what's hot in the indie scene</p>
          </div>
        </div>

        {/* Toggle buttons */}
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setActiveSection('tracks')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              activeSection === 'tracks'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-muted hover:text-gray-900'
            }`}
          >
            <Music className="w-4 h-4" />
            <span>Tracks</span>
          </button>
          <button
            onClick={() => setActiveSection('artists')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              activeSection === 'artists'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-muted hover:text-gray-900'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Artists</span>
          </button>
        </div>
      </div>

      {/* Content */}
      {activeSection === 'tracks' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingReleases.map((release) => {
            const artist = getArtistById(release.artistId);
            if (!artist) return null;

            return (
              <TrackCard
                key={release.releaseId}
                release={release}
                artist={artist}
                variant="withSupportButton"
                onPlay={handlePlay}
                onSupport={handleSupport}
                onShare={handleShare}
              />
            );
          })}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trendingArtists.map((artist) => (
            <ArtistCard
              key={artist.artistId}
              artist={artist}
              variant="detailed"
              onFollow={handleFollow}
              onSupport={handleSupport}
            />
          ))}
        </div>
      )}

      {/* View More Button */}
      <div className="text-center">
        <button className="btn-secondary">
          View More {activeSection === 'tracks' ? 'Trending Tracks' : 'Popular Artists'}
        </button>
      </div>
    </section>
  );
}
