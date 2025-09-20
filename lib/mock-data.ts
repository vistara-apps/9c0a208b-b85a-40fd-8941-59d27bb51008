import { Artist, Release, User, ListeningEvent, Support } from './types';

// Mock users
export const mockUsers: User[] = [
  {
    userId: '1',
    username: 'musiclover',
    profilePicUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    walletAddress: '0x1234567890123456789012345678901234567890',
    listeningHistory: [],
    followedArtists: ['1', '2'],
    followers: ['2', '3'],
    following: ['2', '3', '4'],
  },
];

// Mock artists
export const mockArtists: Artist[] = [
  {
    artistId: '1',
    userId: '2',
    name: 'Luna Eclipse',
    bio: 'Indie electronic artist creating dreamy soundscapes and ethereal vocals. Based in Portland, crafting music that bridges the gap between electronic and organic.',
    profilePicUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=150&h=150&fit=crop&crop=face',
    bannerUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=300&fit=crop',
    socialLinks: {
      twitter: 'lunaeclipse',
      instagram: 'lunaeclipse_music',
      website: 'https://lunaeclipse.com',
    },
    musicCatalog: [],
    followerCount: 1247,
    totalSupport: 892,
  },
  {
    artistId: '2',
    userId: '3',
    name: 'The Midnight Collective',
    bio: 'Alternative rock band from Austin, Texas. We blend classic rock influences with modern indie sensibilities to create anthemic songs for late-night drives.',
    profilePicUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=150&fit=crop&crop=face',
    bannerUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=300&fit=crop',
    socialLinks: {
      twitter: 'midnightcollective',
      instagram: 'midnight_collective_band',
    },
    musicCatalog: [],
    followerCount: 2156,
    totalSupport: 1543,
  },
  {
    artistId: '3',
    userId: '4',
    name: 'Zara Moon',
    bio: 'R&B singer-songwriter with jazz influences. Creating soulful music that speaks to the heart and moves the body.',
    profilePicUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
    bannerUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=300&fit=crop',
    socialLinks: {
      instagram: 'zaramoon_music',
      website: 'https://zaramoon.com',
    },
    musicCatalog: [],
    followerCount: 3421,
    totalSupport: 2187,
  },
];

// Mock releases
export const mockReleases: Release[] = [
  {
    releaseId: '1',
    artistId: '1',
    title: 'Neon Dreams',
    genre: 'Electronic',
    audioUrl: 'https://example.com/audio/neon-dreams.mp3',
    coverArtUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    releaseDate: '2024-01-15',
    tags: ['electronic', 'dreamy', 'indie'],
    playCount: 15420,
    likeCount: 892,
  },
  {
    releaseId: '2',
    artistId: '1',
    title: 'Midnight Glow',
    genre: 'Electronic',
    audioUrl: 'https://example.com/audio/midnight-glow.mp3',
    coverArtUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
    releaseDate: '2024-01-08',
    tags: ['ambient', 'electronic', 'chill'],
    playCount: 8934,
    likeCount: 567,
  },
  {
    releaseId: '3',
    artistId: '2',
    title: 'Highway Ghosts',
    genre: 'Alternative',
    audioUrl: 'https://example.com/audio/highway-ghosts.mp3',
    coverArtUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop',
    releaseDate: '2024-01-12',
    tags: ['alternative', 'rock', 'indie'],
    playCount: 12567,
    likeCount: 743,
  },
  {
    releaseId: '4',
    artistId: '3',
    title: 'Golden Hour',
    genre: 'R&B',
    audioUrl: 'https://example.com/audio/golden-hour.mp3',
    coverArtUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop',
    releaseDate: '2024-01-10',
    tags: ['r&b', 'soul', 'jazz'],
    playCount: 18923,
    likeCount: 1234,
  },
  {
    releaseId: '5',
    artistId: '2',
    title: 'City Lights',
    genre: 'Alternative',
    audioUrl: 'https://example.com/audio/city-lights.mp3',
    coverArtUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    releaseDate: '2024-01-05',
    tags: ['alternative', 'urban', 'indie'],
    playCount: 9876,
    likeCount: 654,
  },
];

// Mock listening events
export const mockListeningEvents: ListeningEvent[] = [
  {
    eventId: '1',
    userId: '1',
    releaseId: '1',
    timestamp: '2024-01-20T10:30:00Z',
    duration: 180,
  },
  {
    eventId: '2',
    userId: '1',
    releaseId: '3',
    timestamp: '2024-01-20T11:15:00Z',
    duration: 210,
  },
];

// Mock support transactions
export const mockSupports: Support[] = [
  {
    supportId: '1',
    supporterId: '1',
    artistId: '1',
    amount: 5,
    type: 'one-time',
    timestamp: '2024-01-19T14:20:00Z',
  },
  {
    supportId: '2',
    supporterId: '1',
    artistId: '2',
    amount: 3,
    type: 'subscription',
    timestamp: '2024-01-18T09:45:00Z',
    tier: 'Fan',
  },
];

// Helper function to get artist by ID
export function getArtistById(artistId: string): Artist | undefined {
  return mockArtists.find(artist => artist.artistId === artistId);
}

// Helper function to get releases by artist ID
export function getReleasesByArtistId(artistId: string): Release[] {
  return mockReleases.filter(release => release.artistId === artistId);
}

// Helper function to get trending releases
export function getTrendingReleases(): Release[] {
  return mockReleases
    .sort((a, b) => b.playCount - a.playCount)
    .slice(0, 10);
}

// Helper function to get recent releases
export function getRecentReleases(): Release[] {
  return mockReleases
    .sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime())
    .slice(0, 10);
}
