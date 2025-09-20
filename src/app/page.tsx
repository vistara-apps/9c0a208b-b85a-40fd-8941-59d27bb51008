'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AppShell } from '@/components/layout/AppShell';
import { TrackCard } from '@/components/music/TrackCard';
import { ArtistCard } from '@/components/music/ArtistCard';
import { SupportButton } from '@/components/ui/SupportButton';
import { mockReleases, mockArtists, getArtistById } from '@/lib/mock-data';
import { Music, Users, TrendingUp, Heart } from 'lucide-react';

export default function Home() {
  const featuredTracks = mockReleases.slice(0, 3);
  const featuredArtists = mockArtists.slice(0, 3);

  return (
    <AppShell>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-16 mb-12"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-foreground mb-6"
          >
            Discover Emerging
            <span className="block text-accent">Artists</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-muted mb-8 max-w-2xl mx-auto"
          >
            Connect with indie artists, support their music, and discover your next favorite track through social listening.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-accent text-surface rounded-xl font-semibold text-lg hover:bg-accent/90 transition-colors">
              Start Listening
            </button>
            <button className="px-8 py-4 border border-border rounded-xl font-semibold text-lg hover:bg-muted/50 transition-colors">
              For Artists
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
      >
        <div className="text-center">
          <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mx-auto mb-2">
            <Music className="w-6 h-6 text-accent" />
          </div>
          <div className="text-2xl font-bold text-foreground">10K+</div>
          <div className="text-sm text-muted">Tracks</div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-2">
            <Users className="w-6 h-6 text-primary" />
          </div>
          <div className="text-2xl font-bold text-foreground">5K+</div>
          <div className="text-sm text-muted">Artists</div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mx-auto mb-2">
            <TrendingUp className="w-6 h-6 text-accent" />
          </div>
          <div className="text-2xl font-bold text-foreground">50K+</div>
          <div className="text-sm text-muted">Streams</div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-2">
            <Heart className="w-6 h-6 text-primary" />
          </div>
          <div className="text-2xl font-bold text-foreground">$25K+</div>
          <div className="text-sm text-muted">Supported</div>
        </div>
      </motion.section>

      {/* Featured Tracks */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="mb-16"
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-foreground">Trending Now</h2>
          <button className="text-accent hover:text-accent/80 transition-colors font-medium">
            View All →
          </button>
        </div>

        <div className="grid gap-6">
          {featuredTracks.map((track, index) => {
            const artist = getArtistById(track.artistId);
            if (!artist) return null;

            return (
              <motion.div
                key={track.releaseId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              >
                <TrackCard
                  track={track}
                  artist={artist}
                  onSupport={() => console.log('Support artist:', track.artistId)}
                />
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Featured Artists */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="mb-16"
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-foreground">Featured Artists</h2>
          <button className="text-accent hover:text-accent/80 transition-colors font-medium">
            View All →
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArtists.map((artist, index) => (
            <motion.div
              key={artist.artistId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
            >
              <ArtistCard
                artist={artist}
                variant="detailed"
                onViewProfile={() => console.log('View artist profile:', artist.artistId)}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="text-center py-16 bg-gradient-to-r from-accent/5 to-primary/5 rounded-3xl border border-border"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ready to Support Your Favorite Artists?
          </h2>
          <p className="text-lg text-muted mb-8">
            Join thousands of music fans who are directly supporting indie artists and getting exclusive access to their music.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SupportButton
              artistId="demo-artist"
              onSupport={(amount, type) => console.log('Demo support:', amount, type)}
            />
            <button className="px-8 py-4 border border-border rounded-xl font-semibold hover:bg-muted/50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </motion.section>
    </AppShell>
  );
}
