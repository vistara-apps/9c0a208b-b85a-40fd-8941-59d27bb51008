// Data Models for SoundSync

export interface User {
  userId: string;
  username: string;
  profilePicUrl?: string;
  walletAddress?: string;
  listeningHistory: ListeningEvent[];
  followedArtists: string[]; // artistIds
  followers: string[]; // userIds
  following: string[]; // userIds
  createdAt: Date;
  updatedAt: Date;
}

export interface Artist {
  artistId: string;
  userId: string;
  name: string;
  bio?: string;
  profilePicUrl?: string;
  bannerUrl?: string;
  socialLinks?: {
    farcaster?: string;
    twitter?: string;
    instagram?: string;
    website?: string;
  };
  musicCatalog: Release[];
  followers: string[]; // userIds
  totalSupports: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Release {
  releaseId: string;
  artistId: string;
  title: string;
  genre: string;
  audioUrl: string;
  coverArtUrl?: string;
  releaseDate: Date;
  tags: string[];
  duration?: number; // in seconds
  playCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ListeningEvent {
  eventId: string;
  userId: string;
  releaseId: string;
  timestamp: Date;
  duration: number; // seconds listened
  completed: boolean;
}

export interface Support {
  supportId: string;
  supporterId: string; // userId
  artistId: string;
  amount: number; // in wei for ETH/Base
  type: 'one-time' | 'subscription';
  timestamp: Date;
  tier?: string; // for subscription tiers
  transactionHash?: string;
  status: 'pending' | 'completed' | 'failed';
}

// UI State Types
export interface FeedItem {
  id: string;
  type: 'track' | 'artist' | 'listening' | 'post';
  userId: string;
  username: string;
  profilePicUrl?: string;
  timestamp: Date;
  content: TrackContent | ArtistContent | ListeningContent | PostContent;
}

export interface TrackContent {
  releaseId: string;
  title: string;
  artist: string;
  coverArtUrl?: string;
  audioUrl: string;
  duration: number;
  genre: string;
  tags: string[];
}

export interface ArtistContent {
  artistId: string;
  name: string;
  bio?: string;
  profilePicUrl?: string;
  followerCount: number;
  recentRelease?: Release;
}

export interface ListeningContent {
  releaseId: string;
  title: string;
  artist: string;
  coverArtUrl?: string;
  userMessage?: string;
}

export interface PostContent {
  text: string;
  attachments?: string[]; // URLs to images/videos
}

// Frame Action Types
export interface FrameAction {
  action: 'view_artist_profile' | 'support_artist' | 'share_listen' | 'play_next' | 'view_releases' | 'subscribe';
  data: Record<string, unknown>;
}

// Notification Types
export interface Notification {
  id: string;
  userId: string;
  type: 'new_content' | 'support_success' | 'social_engagement';
  title: string;
  message: string;
  data?: Record<string, unknown>;
  read: boolean;
  createdAt: Date;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Wallet Types
export interface WalletState {
  address?: string;
  chainId?: number;
  isConnected: boolean;
  isConnecting: boolean;
}

// Component Props Types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface TrackCardProps extends BaseComponentProps {
  track: Release;
  artist: Artist;
  showPlayButton?: boolean;
  showSupportButton?: boolean;
  onPlay?: () => void;
  onSupport?: () => void;
  onShare?: () => void;
}

export interface ArtistCardProps extends BaseComponentProps {
  artist: Artist;
  variant?: 'minimal' | 'detailed';
  showFollowButton?: boolean;
  onFollow?: () => void;
  onViewProfile?: () => void;
}

export interface SupportButtonProps extends BaseComponentProps {
  artistId: string;
  variant?: 'oneTime' | 'subscribe';
  amount?: number;
  onSupport?: (amount: number, type: 'one-time' | 'subscription') => void;
}

// Frame Context Types
export interface FrameContext {
  user?: {
    fid: number;
    username?: string;
    displayName?: string;
    pfpUrl?: string;
  };
  cast?: {
    hash: string;
    text: string;
  };
}

// Hook Types
export interface UseAudioPlayerReturn {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  play: () => void;
  pause: () => void;
  seek: (time: number) => void;
  setVolume: (volume: number) => void;
  loadTrack: (url: string) => void;
}

export interface UseWalletReturn {
  wallet: WalletState;
  connect: () => Promise<void>;
  disconnect: () => void;
  switchToBase: () => Promise<void>;
  sendTransaction: (to: string, value: string) => Promise<string>;
}
