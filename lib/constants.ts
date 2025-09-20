// App configuration constants
export const APP_CONFIG = {
  name: 'SoundSync',
  tagline: 'Discover emerging artists, connect with creators, and fuel your music passion.',
  version: '1.0.0',
  supportEmail: 'support@soundsync.app',
} as const;

// Support tiers and pricing
export const SUPPORT_TIERS = {
  oneTime: [
    { amount: 1, label: '$1 - Coffee', description: 'Buy the artist a coffee' },
    { amount: 3, label: '$3 - Snack', description: 'Support their creative process' },
    { amount: 5, label: '$5 - Meal', description: 'Help fund their next release' },
    { amount: 10, label: '$10 - Studio Time', description: 'Contribute to studio costs' },
  ],
  subscription: [
    { amount: 3, label: '$3/month - Fan', description: 'Access to exclusive content' },
    { amount: 5, label: '$5/month - Supporter', description: 'Early access + behind-the-scenes' },
    { amount: 10, label: '$10/month - VIP', description: 'All perks + direct artist access' },
  ],
} as const;

// Music genres
export const GENRES = [
  'Alternative',
  'Electronic',
  'Hip-Hop',
  'Indie',
  'Jazz',
  'Pop',
  'R&B',
  'Rock',
  'Soul',
  'World',
] as const;

// Social platforms
export const SOCIAL_PLATFORMS = {
  twitter: { name: 'Twitter', baseUrl: 'https://twitter.com/' },
  instagram: { name: 'Instagram', baseUrl: 'https://instagram.com/' },
  website: { name: 'Website', baseUrl: '' },
} as const;

// Animation durations (in milliseconds)
export const ANIMATION_DURATION = {
  fast: 150,
  base: 200,
  slow: 400,
} as const;

// API endpoints (mock data for demo)
export const API_ENDPOINTS = {
  users: '/api/users',
  artists: '/api/artists',
  releases: '/api/releases',
  support: '/api/support',
  listening: '/api/listening',
} as const;

// Frame action types
export const FRAME_ACTIONS = {
  VIEW_ARTIST_PROFILE: 'view_artist_profile',
  SUPPORT_ARTIST: 'support_artist',
  SHARE_LISTEN: 'share_listen',
} as const;

// Default images
export const DEFAULT_IMAGES = {
  avatar: '/default-avatar.png',
  cover: '/default-cover.png',
  banner: '/default-banner.png',
} as const;
