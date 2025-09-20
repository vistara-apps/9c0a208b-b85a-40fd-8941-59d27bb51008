'use client';

import { useState, useEffect } from 'react';
import { TrackCard } from '@/components/ui/TrackCard';
import { SocialFeedItem } from '@/components/ui/SocialFeedItem';
import { mockReleases, mockArtists, getArtistById } from '@/lib/mock-data';
import { Release, Artist } from '@/lib/types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';

export function MusicFeed() {
  const [activeTab, setActiveTab] = useState<'discover' | 'social'>('discover');
  const [releases, setReleases] = useState<Release[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const loadFeed = async () => {
      setLoading(true);
      // Sort by recent and trending
      const sortedReleases = [...mockReleases].sort((a, b) => {
        const dateA = new Date(a.releaseDate).getTime();
        const dateB = new Date(b.releaseDate).getTime();
        return dateB - dateA;
      });
      
      setReleases(sortedReleases);
      setLoading(false);
    };

    loadFeed();
  }, []);

  const handlePlay = (releaseId: string) => {
    console.log('Playing track:', releaseId);
    // Implement play functionality
  };

  const handleSupport = (artistId: string) => {
    console.log('Supporting artist:', artistId);
    // Implement support functionality
  };

  const handleShare = (releaseId: string) => {
    console.log('Sharing track:', releaseId);
    // Implement share functionality
  };

  if (loading) {
    return (
      <div className="space-y-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="card animate-pulse">
            <div className="aspect-square bg-gray-200"></div>
            <div className="p-4 space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              <div className="flex space-x-2">
                <div className="h-6 bg-gray-200 rounded w-16"></div>
                <div className="h-6 bg-gray-200 rounded w-16"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'discover' | 'social')}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="discover">Discover</TabsTrigger>
          <TabsTrigger value="social">Social Feed</TabsTrigger>
        </TabsList>

        <TabsContent value="discover" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {releases.map((release) => {
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
        </TabsContent>

        <TabsContent value="social" className="space-y-4 mt-6">
          {/* Mock social feed items */}
          <SocialFeedItem
            variant="listening"
            user={{
              username: 'musiclover',
              profilePicUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
            }}
            timestamp="2024-01-20T10:30:00Z"
            content="This track is absolutely incredible! The production quality is amazing 🎵"
            track={{
              title: 'Neon Dreams',
              artist: 'Luna Eclipse',
              coverArtUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
              duration: 180
            }}
            engagement={{ likes: 24, comments: 8, shares: 3 }}
            onPlay={() => console.log('Play from social feed')}
            onLike={() => console.log('Like social post')}
            onComment={() => console.log('Comment on post')}
            onShare={() => console.log('Share social post')}
          />

          <SocialFeedItem
            variant="post"
            user={{
              username: 'indie_explorer',
              profilePicUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
            }}
            timestamp="2024-01-20T09:15:00Z"
            content="Just discovered this amazing artist through SoundSync! The indie scene is so vibrant right now. Who else should I check out? 🎶"
            engagement={{ likes: 12, comments: 5, shares: 2 }}
            onLike={() => console.log('Like social post')}
            onComment={() => console.log('Comment on post')}
            onShare={() => console.log('Share social post')}
          />

          <SocialFeedItem
            variant="listening"
            user={{
              username: 'beat_seeker',
              profilePicUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
            }}
            timestamp="2024-01-20T08:45:00Z"
            track={{
              title: 'Highway Ghosts',
              artist: 'The Midnight Collective',
              coverArtUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop',
              duration: 210
            }}
            engagement={{ likes: 18, comments: 3, shares: 7 }}
            onPlay={() => console.log('Play from social feed')}
            onLike={() => console.log('Like social post')}
            onComment={() => console.log('Comment on post')}
            onShare={() => console.log('Share social post')}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
