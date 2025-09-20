# SoundSync - Base Mini App

A web3-native platform for music fans to discover new artists through social listening and directly support creators.

## Features

- **Personalized Music Feed**: Dynamic feed showcasing new tracks and trending releases from indie artists
- **Artist Social Hub**: Dedicated spaces for artists to share updates and interact with fans
- **Social Listening Streams**: Real-time sharing of listening activities with followers
- **Direct Fan Support**: Integrated mechanisms for fans to support artists via micro-transactions

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base network integration via MiniKit
- **Wallet**: OnchainKit for wallet functionality
- **Styling**: Tailwind CSS with custom design system
- **TypeScript**: Full type safety throughout the application

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd soundsync
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your OnchainKit API key:
   ```
   NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Base Mini App Integration

This app is built as a Base Mini App with the following integrations:

- **MiniKitProvider**: Handles Base network connection and wallet integration
- **OnchainKit**: Provides wallet components and blockchain functionality
- **Frame Actions**: Supports view_artist_profile, support_artist, and share_listen actions
- **Social Integration**: Built for Farcaster ecosystem integration

## Project Structure

```
├── app/                    # Next.js App Router pages
├── components/
│   ├── ui/                # Reusable UI components
│   └── features/          # Feature-specific components
├── lib/
│   ├── types.ts          # TypeScript type definitions
│   ├── utils.ts          # Utility functions
│   ├── constants.ts      # App constants
│   └── mock-data.ts      # Mock data for development
└── public/               # Static assets
```

## Key Components

- **TrackCard**: Displays music tracks with play, like, and support functionality
- **ArtistCard**: Shows artist information with follow and support options
- **SupportButton**: Handles micro-transactions for artist support
- **MusicFeed**: Personalized feed of music content
- **SocialFeedItem**: Social listening and sharing functionality

## Development

The app uses mock data for development. In production, you would integrate with:

- **IPFS/Arweave**: For decentralized music and metadata storage
- **Base Smart Contracts**: For handling support transactions
- **Farcaster API**: For social features and identity

## Building for Production

```bash
npm run build
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details
