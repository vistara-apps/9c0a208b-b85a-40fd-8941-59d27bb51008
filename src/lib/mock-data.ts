import { User, Artist, Release, FeedItem, ListeningEvent, Support } from '@/types';

// Mock Users
export const mockUsers: User[] = [
  {
    userId: 'user-1',
    username: 'musicfan123',
    profilePicUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=musicfan123',
    walletAddress: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    listeningHistory: [],
    followedArtists: ['artist-1', 'artist-2'],
    followers: ['user-2', 'user-3'],
    following: ['user-2'],
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-09-20'),
  },
  {
    userId: 'user-2',
    username: 'indiehead',
    profilePicUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=indiehead',
    walletAddress: '0x8ba1f109551bD432803012645ac136ddd64DBA72',
    listeningHistory: [],
    followedArtists: ['artist-3'],
    followers: ['user-1'],
    following: ['user-1', 'user-3'],
    createdAt: new Date('2024-02-20'),
    updatedAt: new Date('2024-09-19'),
  },
];

// Mock Artists
export const mockArtists: Artist[] = [
  {
    artistId: 'artist-1',
    userId: 'user-3',
    name: 'Neon Dreams',
    bio: 'Electronic artist blending synthwave with modern indie sounds. Creating music for dreamers and night owls.',
    profilePicUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=neondreams',
    bannerUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=300&fit=crop',
    socialLinks: {
      farcaster: 'neondreams',
      twitter: 'neondreams',
      website: 'https://neondreams.com',
    },
    musicCatalog: [],
    followers: ['user-1', 'user-2'],
    totalSupports: 45,
    createdAt: new Date('2023-06-10'),
    updatedAt: new Date('2024-09-20'),
  },
  {
    artistId: 'artist-2',
    userId: 'user-4',
    name: 'Acoustic Soul',
    bio: 'Singer-songwriter crafting heartfelt acoustic music. Stories told through melody and verse.',
    profilePicUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=acousticsoul',
    bannerUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=300&fit=crop',
    socialLinks: {
      farcaster: 'acousticsoul',
      instagram: 'acousticsoul',
    },
    musicCatalog: [],
    followers: ['user-1'],
    totalSupports: 23,
    createdAt: new Date('2023-08-15'),
    updatedAt: new Date('2024-09-18'),
  },
  {
    artistId: 'artist-3',
    userId: 'user-5',
    name: 'Urban Pulse',
    bio: 'Hip-hop artist bringing fresh beats and conscious lyrics to the scene.',
    profilePicUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=urbanpulse',
    bannerUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=300&fit=crop',
    socialLinks: {
      farcaster: 'urbanpulse',
      twitter: 'urbanpulse',
    },
    musicCatalog: [],
    followers: ['user-2'],
    totalSupports: 67,
    createdAt: new Date('2023-04-20'),
    updatedAt: new Date('2024-09-20'),
  },
];

// Mock Releases
export const mockReleases: Release[] = [
  {
    releaseId: 'release-1',
    artistId: 'artist-1',
    title: 'Midnight Drive',
    genre: 'Synthwave',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav', // Placeholder
    coverArtUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    releaseDate: new Date('2024-08-15'),
    tags: ['electronic', 'synthwave', 'dreamy'],
    duration: 245,
    playCount: 1250,
    createdAt: new Date('2024-08-15'),
    updatedAt: new Date('2024-09-20'),
  },
  {
    releaseId: 'release-2',
    artistId: 'artist-1',
    title: 'Neon Lights',
    genre: 'Synthwave',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav', // Placeholder
    coverArtUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    releaseDate: new Date('2024-06-20'),
    tags: ['electronic', 'synthwave', 'vaporwave'],
    duration: 198,
    playCount: 890,
    createdAt: new Date('2024-06-20'),
    updatedAt: new Date('2024-09-19'),
  },
  {
    releaseId: 'release-3',
    artistId: 'artist-2',
    title: 'Whispers in the Rain',
    genre: 'Acoustic',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav', // Placeholder
    coverArtUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    releaseDate: new Date('2024-07-10'),
    tags: ['acoustic', 'folk', 'emotional'],
    duration: 312,
    playCount: 567,
    createdAt: new Date('2024-07-10'),
    updatedAt: new Date('2024-09-18'),
  },
  {
    releaseId: 'release-4',
    artistId: 'artist-3',
    title: 'City Lights',
    genre: 'Hip-Hop',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav', // Placeholder
    coverArtUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    releaseDate: new Date('2024-09-01'),
    tags: ['hip-hop', 'conscious', 'urban'],
    duration: 267,
    playCount: 2340,
    createdAt: new Date('2024-09-01'),
    updatedAt: new Date('2024-09-20'),
  },
];

// Mock Feed Items
export const mockFeedItems: FeedItem[] = [
  {
    id: 'feed-1',
    type: 'track',
    userId: 'user-1',
    username: 'musicfan123',
    profilePicUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=musicfan123',
    timestamp: new Date('2024-09-20T10:30:00Z'),
    content: {
      releaseId: 'release-1',
      title: 'Midnight Drive',
      artist: 'Neon Dreams',
      coverArtUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
      audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
      duration: 245,
      genre: 'Synthwave',
      tags: ['electronic', 'synthwave', 'dreamy'],
    },
  },
  {
    id: 'feed-2',
    type: 'listening',
    userId: 'user-2',
    username: 'indiehead',
    profilePicUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=indiehead',
    timestamp: new Date('2024-09-20T09:15:00Z'),
    content: {
      releaseId: 'release-3',
      title: 'Whispers in the Rain',
      artist: 'Acoustic Soul',
      coverArtUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
      userMessage: 'This track hits different! Perfect for a rainy day ☔️',
    },
  },
  {
    id: 'feed-3',
    type: 'artist',
    userId: 'user-1',
    username: 'musicfan123',
    profilePicUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=musicfan123',
    timestamp: new Date('2024-09-20T08:45:00Z'),
    content: {
      artistId: 'artist-3',
      name: 'Urban Pulse',
      bio: 'Hip-hop artist bringing fresh beats and conscious lyrics to the scene.',
      profilePicUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=urbanpulse',
      followerCount: 1247,
      recentRelease: mockReleases[3],
    },
  },
];

// Mock Listening Events
export const mockListeningEvents: ListeningEvent[] = [
  {
    eventId: 'event-1',
    userId: 'user-1',
    releaseId: 'release-1',
    timestamp: new Date('2024-09-20T10:25:00Z'),
    duration: 245,
    completed: true,
  },
  {
    eventId: 'event-2',
    userId: 'user-2',
    releaseId: 'release-3',
    timestamp: new Date('2024-09-20T09:10:00Z'),
    duration: 180,
    completed: false,
  },
];

// Mock Supports
export const mockSupports: Support[] = [
  {
    supportId: 'support-1',
    supporterId: 'user-1',
    artistId: 'artist-1',
    amount: 1000000000000000000, // 1 ETH in wei
    type: 'one-time',
    timestamp: new Date('2024-09-19T14:30:00Z'),
    transactionHash: '0x1234567890abcdef',
    status: 'completed',
  },
  {
    supportId: 'support-2',
    supporterId: 'user-2',
    artistId: 'artist-3',
    amount: 500000000000000000, // 0.5 ETH in wei
    type: 'subscription',
    timestamp: new Date('2024-09-18T16:45:00Z'),
    tier: 'premium',
    transactionHash: '0xabcdef1234567890',
    status: 'completed',
  },
];

// Helper functions
export const getArtistById = (artistId: string): Artist | undefined => {
  return mockArtists.find(artist => artist.artistId === artistId);
};

export const getReleaseById = (releaseId: string): Release | undefined => {
  return mockReleases.find(release => release.releaseId === releaseId);
};

export const getUserById = (userId: string): User | undefined => {
  return mockUsers.find(user => user.userId === userId);
};

export const getReleasesByArtist = (artistId: string): Release[] => {
  return mockReleases.filter(release => release.artistId === artistId);
};

export const getFeedItemsByUser = (userId: string): FeedItem[] => {
  return mockFeedItems.filter(item => item.userId === userId);
};

