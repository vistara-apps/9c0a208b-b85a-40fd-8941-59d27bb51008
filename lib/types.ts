// Core data model types
export interface User {
  userId: string;
  username: string;
  profilePicUrl?: string;
  walletAddress?: string;
  listeningHistory: ListeningEvent[];
  followedArtists: string[];
  followers: string[];
  following: string[];
}

export interface Artist {
  artistId: string;
  userId: string;
  name: string;
  bio?: string;
  profilePicUrl?: string;
  bannerUrl?: string;
  socialLinks?: SocialLinks;
  musicCatalog: Release[];
  followerCount: number;
  totalSupport: number;
}

export interface Release {
  releaseId: string;
  artistId: string;
  title: string;
  genre: string;
  audioUrl: string;
  coverArtUrl: string;
  releaseDate: string;
  tags: string[];
  playCount: number;
  likeCount: number;
}

export interface ListeningEvent {
  eventId: string;
  userId: string;
  releaseId: string;
  timestamp: string;
  duration: number;
}

export interface Support {
  supportId: string;
  supporterId: string;
  artistId: string;
  amount: number;
  type: 'one-time' | 'subscription';
  timestamp: string;
  tier?: string;
}

export interface SocialLinks {
  twitter?: string;
  instagram?: string;
  website?: string;
}

// UI Component types
export interface TrackCardProps {
  release: Release;
  artist: Artist;
  variant?: 'withPlayButton' | 'withSupportButton';
  onPlay?: (releaseId: string) => void;
  onSupport?: (artistId: string) => void;
  onShare?: (releaseId: string) => void;
}

export interface ArtistCardProps {
  artist: Artist;
  variant?: 'minimal' | 'detailed';
  onFollow?: (artistId: string) => void;
  onSupport?: (artistId: string) => void;
}

export interface SupportButtonProps {
  artistId: string;
  variant?: 'one-time' | 'subscription';
  amount?: number;
  onSupport?: (artistId: string, amount: number, type: 'one-time' | 'subscription') => void;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

// MiniKit Frame Actions
export type FrameAction = 'view_artist_profile' | 'support_artist' | 'share_listen';

export interface FrameActionData {
  action: FrameAction;
  artistId?: string;
  releaseId?: string;
  amount?: number;
}
