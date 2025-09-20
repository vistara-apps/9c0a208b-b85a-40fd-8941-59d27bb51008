'use client';

import { AppShell } from '@/components/ui/AppShell';
import { Header } from '@/components/features/Header';
import { MusicFeed } from '@/components/features/MusicFeed';
import { TrendingSection } from '@/components/features/TrendingSection';
import { Sparkles, Music, Users, Heart } from 'lucide-react';

export default function HomePage() {
  return (
    <AppShell variant="glass">
      <Header />
      
      <main className="space-y-12">
        {/* Hero Section */}
        <section className="text-center py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center shadow-lg">
                <Music className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Flow to Listen for
              <br />
              <span className="gradient-text">Current Music</span>
            </h1>
            
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover emerging artists, connect with creators, and fuel your music passion through social listening and direct support.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="btn-primary text-lg px-8 py-4">
                <Sparkles className="w-5 h-5 mr-2" />
                Start Discovering
              </button>
              <button className="btn-secondary text-lg px-8 py-4 bg-white/10 text-white border-white/30 hover:bg-white/20">
                <Users className="w-5 h-5 mr-2" />
                Browse Artists
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Music className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">10K+</h3>
              <p className="text-white/70">Indie Tracks</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">2K+</h3>
              <p className="text-white/70">Artists</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">$50K+</h3>
              <p className="text-white/70">Artist Support</p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 space-y-12">
            {/* Community Forming Section */}
            <section>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Community Forming</h2>
                <p className="text-muted max-w-2xl mx-auto">
                  Connect with fellow music lovers and discover your next favorite artist through our vibrant community.
                </p>
              </div>
              
              <MusicFeed />
            </section>

            {/* Trending Section */}
            <TrendingSection />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-white/60">
        <p>&copy; 2024 SoundSync. Built with ❤️ for indie music lovers.</p>
      </footer>
    </AppShell>
  );
}
