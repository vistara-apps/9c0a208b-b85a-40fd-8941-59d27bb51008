import { NextRequest, NextResponse } from 'next/server';

// Mock support transaction handler
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { artistId, amount, type, supporterAddress } = body;

    if (!artistId || !amount || !type || !supporterAddress) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate amount
    if (amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid amount' },
        { status: 400 }
      );
    }

    // Mock transaction processing
    const transactionId = `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Simulate transaction delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock successful transaction
    const supportRecord = {
      supportId: `support_${Date.now()}`,
      supporterId: supporterAddress,
      artistId,
      amount: amount.toString(),
      type, // 'one-time' or 'subscription'
      timestamp: new Date().toISOString(),
      transactionHash: transactionId,
      status: 'completed',
    };

    return NextResponse.json({
      success: true,
      data: supportRecord,
      message: `Successfully ${type === 'subscription' ? 'subscribed to' : 'supported'} artist`,
    });

  } catch (error) {
    console.error('Support API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET support history for an artist
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const artistId = searchParams.get('artistId');

  if (!artistId) {
    return NextResponse.json(
      { error: 'Artist ID is required' },
      { status: 400 }
    );
  }

  // Mock support history data
  const mockSupportHistory = [
    {
      supportId: 'support_1',
      supporterId: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
      artistId,
      amount: '1.5',
      type: 'one-time',
      timestamp: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
      status: 'completed',
    },
    {
      supportId: 'support_2',
      supporterId: '0x8ba1f109551bD432803012645ac136ddd64DBA72',
      artistId,
      amount: '3.0',
      type: 'subscription',
      timestamp: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
      status: 'completed',
    },
  ];

  return NextResponse.json({
    success: true,
    data: mockSupportHistory,
  });
}

