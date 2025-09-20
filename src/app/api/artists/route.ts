import { NextRequest, NextResponse } from 'next/server';
import { mockArtists, getReleasesByArtist } from '@/lib/mock-data';

// GET artists with optional filtering
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const artistId = searchParams.get('id');
  const limit = parseInt(searchParams.get('limit') || '20');
  const offset = parseInt(searchParams.get('offset') || '0');

  try {
    // Get specific artist
    if (artistId) {
      const artist = mockArtists.find(a => a.artistId === artistId);

      if (!artist) {
        return NextResponse.json(
          { error: 'Artist not found' },
          { status: 404 }
        );
      }

      // Enrich with releases
      const releases = getReleasesByArtist(artistId);
      const enrichedArtist = {
        ...artist,
        releases,
        stats: {
          totalReleases: releases.length,
          totalPlays: releases.reduce((sum, release) => sum + release.playCount, 0),
          followersCount: artist.followers.length,
        },
      };

      return NextResponse.json({
        success: true,
        data: enrichedArtist,
      });
    }

    // Get all artists with pagination
    const paginatedArtists = mockArtists.slice(offset, offset + limit);

    // Enrich with basic stats
    const enrichedArtists = paginatedArtists.map(artist => {
      const releases = getReleasesByArtist(artist.artistId);
      return {
        ...artist,
        stats: {
          totalReleases: releases.length,
          totalPlays: releases.reduce((sum, release) => sum + release.playCount, 0),
          followersCount: artist.followers.length,
        },
      };
    });

    return NextResponse.json({
      success: true,
      data: {
        artists: enrichedArtists,
        total: mockArtists.length,
        limit,
        offset,
      },
    });

  } catch (error) {
    console.error('Artists API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST to create/update artist profile
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      userId,
      name,
      bio,
      profilePicUrl,
      bannerUrl,
      socialLinks,
    } = body;

    if (!userId || !name) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Mock artist creation/update
    const existingArtist = mockArtists.find(a => a.userId === userId);
    const artistId = existingArtist?.artistId || `artist_${Date.now()}`;

    const artist = {
      artistId,
      userId,
      name,
      bio: bio || '',
      profilePicUrl: profilePicUrl || '/default-avatar.png',
      bannerUrl: bannerUrl || '',
      socialLinks: socialLinks || {},
      musicCatalog: existingArtist?.musicCatalog || [],
      followers: existingArtist?.followers || [],
      totalSupports: existingArtist?.totalSupports || 0,
      createdAt: existingArtist?.createdAt || new Date(),
      updatedAt: new Date(),
    };

    return NextResponse.json({
      success: true,
      data: artist,
      message: existingArtist ? 'Artist profile updated' : 'Artist profile created',
    });

  } catch (error) {
    console.error('Create artist API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

