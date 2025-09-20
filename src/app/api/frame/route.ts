import { NextRequest, NextResponse } from 'next/server';

// Frame action handlers
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { untrustedData } = body;

    if (!untrustedData) {
      return NextResponse.json({ error: 'Invalid frame data' }, { status: 400 });
    }

    const { buttonIndex, inputText, fid, castId } = untrustedData;

    // Handle different frame actions
    switch (buttonIndex) {
      case 1: // Start Listening
        return NextResponse.json({
          type: 'frame',
          frameUrl: `${process.env.NEXT_PUBLIC_APP_URL}/frame/listening`,
          title: 'SoundSync - Start Listening',
          description: 'Discover new music and support artists',
          image: `${process.env.NEXT_PUBLIC_APP_URL}/api/og?type=listening`,
          buttons: [
            {
              label: '🎵 Play Random Track',
              action: 'post',
            },
            {
              label: '🎨 Browse Artists',
              action: 'post',
            },
            {
              label: '❤️ Support Artist',
              action: 'post',
            },
          ],
        });

      case 2: // For Artists
        return NextResponse.json({
          type: 'frame',
          frameUrl: `${process.env.NEXT_PUBLIC_APP_URL}/frame/artist-onboarding`,
          title: 'SoundSync - For Artists',
          description: 'Join our platform and connect with fans',
          image: `${process.env.NEXT_PUBLIC_APP_URL}/api/og?type=artist`,
          buttons: [
            {
              label: '🚀 Get Started',
              action: 'post',
            },
            {
              label: '📊 View Stats',
              action: 'post',
            },
          ],
        });

      default:
        return NextResponse.json({
          type: 'frame',
          frameUrl: `${process.env.NEXT_PUBLIC_APP_URL}/frame`,
          title: 'SoundSync',
          description: 'Discover emerging artists and support their music',
          image: `${process.env.NEXT_PUBLIC_APP_URL}/api/og?type=home`,
          buttons: [
            {
              label: '🎵 Start Listening',
              action: 'post',
            },
            {
              label: '🎨 For Artists',
              action: 'post',
            },
          ],
        });
    }
  } catch (error) {
    console.error('Frame API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// GET handler for initial frame load
export async function GET() {
  return NextResponse.json({
    type: 'frame',
    frameUrl: `${process.env.NEXT_PUBLIC_APP_URL}/frame`,
    title: 'SoundSync',
    description: 'Discover emerging artists and support their music',
    image: `${process.env.NEXT_PUBLIC_APP_URL}/api/og?type=home`,
    buttons: [
      {
        label: '🎵 Start Listening',
        action: 'post',
      },
      {
        label: '🎨 For Artists',
        action: 'post',
      },
    ],
  });
}

