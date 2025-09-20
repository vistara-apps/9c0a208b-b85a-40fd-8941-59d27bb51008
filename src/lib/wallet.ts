import { createConfig, http } from 'wagmi';
import { base } from 'wagmi/chains';
import { coinbaseWallet } from 'wagmi/connectors';

// Base chain configuration
export const baseChain = {
  ...base,
  rpcUrls: {
    default: {
      http: ['https://mainnet.base.org'],
    },
    public: {
      http: ['https://mainnet.base.org'],
    },
  },
};

// Wagmi configuration
export const config = createConfig({
  chains: [baseChain],
  connectors: [
    coinbaseWallet({
      appName: 'SoundSync',
      appLogoUrl: '/logo.png',
    }),
  ],
  transports: {
    [baseChain.id]: http(),
  },
});

// Contract addresses (these would be deployed contracts)
export const CONTRACTS = {
  SUPPORT_TOKEN: '0x0000000000000000000000000000000000000000', // Replace with actual contract
  SUBSCRIPTION_MANAGER: '0x0000000000000000000000000000000000000000', // Replace with actual contract
} as const;

// ABI for support contract (simplified)
export const SUPPORT_CONTRACT_ABI = [
  {
    inputs: [
      { name: 'artistId', type: 'string' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'supportArtist',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { name: 'artistId', type: 'string' },
      { name: 'tier', type: 'string' },
    ],
    name: 'subscribeToArtist',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
] as const;

// Utility functions
export const formatAddress = (address: string): string => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const formatAmount = (amount: bigint, decimals: number = 18): string => {
  const formatted = Number(amount) / Math.pow(10, decimals);
  return formatted.toFixed(4);
};

export const parseAmount = (amount: string, decimals: number = 18): bigint => {
  return BigInt(Math.floor(Number(amount) * Math.pow(10, decimals)));
};

// Transaction utilities
export const estimateGas = async (to: string, value: string): Promise<bigint> => {
  // This would use wagmi's estimateGas function
  return BigInt(21000); // Basic gas estimate
};

export const getGasPrice = async (): Promise<bigint> => {
  // This would fetch current gas price
  return BigInt(20000000000); // 20 gwei
};

