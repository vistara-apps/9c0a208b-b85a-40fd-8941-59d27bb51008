# SoundSync 🎵

A web3-native platform for music fans to discover emerging artists through social listening and directly support creators.

## 🌟 Features

### Core Features
- **Personalized Music Feed**: Dynamic feed showcasing new tracks and trending releases
- **Artist Social Hub**: Dedicated space for artists to share updates and interact with fans
- **Social Listening Streams**: Share what you're currently listening to in real-time
- **Direct Fan Support**: Integrated mechanisms for fans to support artists via payments or subscriptions

### Technical Features
- **Base Mini App**: Optimized for Farcaster frames and Base ecosystem
- **Web3 Integration**: Wallet connectivity and on-chain transactions
- **Decentralized Storage**: IPFS/Arweave integration for content permanence
- **Real-time Updates**: Live social listening and notifications
- **Responsive Design**: Mobile-first design with modern UI/UX

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Base wallet (Coinbase Wallet, MetaMask, etc.)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd soundsync
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🏗️ Architecture

### Tech Stack
- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Web3**: Wagmi, Viem, Coinbase Wallet SDK
- **Frame Integration**: Farcaster Frame SDK
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Project Structure
```
src/
├── app/                    # Next.js app router
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── music/            # Music-related components
│   ├── social/           # Social features
│   └── ui/               # Reusable UI components
├── lib/                  # Utility functions
│   ├── wallet.ts         # Web3 wallet utilities
│   ├── audio-player.ts   # Audio player logic
│   ├── mock-data.ts      # Mock data for development
│   └── utils.ts          # General utilities
└── types/                # TypeScript type definitions
```

## 🎨 Design System

### Colors
- **Background**: `hsl(210 40% 96.1%)`
- **Foreground**: `hsl(220 46.9% 44.9%)`
- **Accent**: `hsl(262.1 83.3% 54.9%)`
- **Primary**: `hsl(220 89.9% 51.2%)`
- **Surface**: `hsl(0 0% 100%)`

### Typography
- **Display**: 4xl font-bold
- **Heading**: 2xl font-semibold
- **Body**: base font-normal
- **Caption**: sm font-medium

### Components
- `AppShell`: Main layout wrapper
- `TrackCard`: Music track display
- `ArtistCard`: Artist profile display
- `SupportButton`: Fan support interface
- `AudioPlayer`: Global music player

## 🔧 API Endpoints

### Frame Integration
- `POST /api/frame` - Handle Farcaster frame actions
- `GET /api/og` - Dynamic Open Graph images

### Data APIs
- `GET /api/tracks` - Fetch music tracks
- `POST /api/tracks` - Create new tracks
- `GET /api/artists` - Fetch artists
- `POST /api/artists` - Create/update artist profiles
- `POST /api/support` - Handle fan support transactions
- `GET /api/support` - Get support history

## 🌐 Web3 Integration

### Supported Networks
- **Base Mainnet**: Primary network for transactions
- **Base Testnet**: For development and testing

### Smart Contracts
- **Support Token**: ERC-20 for fan support
- **Subscription Manager**: For recurring artist support
- **Artist Registry**: Decentralized artist profiles

## 📱 Base Mini App Features

### Frame Actions
1. **View Artist Profile**: Open detailed artist page
2. **Support Artist**: Initiate support transaction
3. **Share Listen**: Cast current track to Farcaster

### Notification Moments
1. New exclusive content from followed artists
2. Successful support transaction confirmation
3. Social engagement on shared listens

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm start
```

### Environment Variables
```env
NEXT_PUBLIC_APP_URL=https://your-domain.com
NEXT_PUBLIC_BASE_RPC_URL=https://mainnet.base.org
NEXT_PUBLIC_FARCASTER_CLIENT_ID=your-client-id
NEXT_PUBLIC_IPFS_GATEWAY=https://gateway.pinata.cloud/ipfs/
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built for the Base ecosystem
- Inspired by music discovery platforms
- Powered by Farcaster for social features

---

**Made with ❤️ for music lovers and indie artists**

