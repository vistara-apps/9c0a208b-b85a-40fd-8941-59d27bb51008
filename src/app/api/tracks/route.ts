import { NextRequest, NextResponse } from 'next/server';
import { mockReleases, getArtistById } from '@/lib/mock-data';

// GET tracks with optional filtering
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const artistId = searchParams.get('artistId');
  const genre = searchParams.get('genre');
  const limit = parseInt(searchParams.get('limit') || '20');
  const offset = parseInt(searchParams.get('offset') || '0');

  try {
    let tracks = mockReleases;

    // Filter by artist
    if (artistId) {
      tracks = tracks.filter(track => track.artistId === artistId);
    }

    // Filter by genre
    if (genre) {
      tracks = tracks.filter(track =>
        track.genre.toLowerCase().includes(genre.toLowerCase())
      );
    }

    // Sort by release date (newest first)
    tracks.sort((a, b) =>
      new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
    );

    // Apply pagination
    const paginatedTracks = tracks.slice(offset, offset + limit);

    // Enrich with artist data
    const enrichedTracks = paginatedTracks.map(track => {
      const artist = getArtistById(track.artistId);
      return {
        ...track,
        artist: artist ? {
          name: artist.name,
          profilePicUrl: artist.profilePicUrl,
        } : null,
      };
    });

    return NextResponse.json({
      success: true,
      data: {
        tracks: enrichedTracks,
        total: tracks.length,
        limit,
        offset,
      },
    });

  } catch (error) {
    console.error('Tracks API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST to create a new track (for artists)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      artistId,
      title,
      genre,
      audioUrl,
      coverArtUrl,
      tags,
      duration
    } = body;

    if (!artistId || !title || !audioUrl) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Mock track creation
    const newTrack = {
      releaseId: `release_${Date.now()}`,
      artistId,
      title,
      genre: genre || 'Unknown',
      audioUrl,
      coverArtUrl: coverArtUrl || '/default-album-art.png',
      releaseDate: new Date(),
      tags: tags || [],
      duration: duration || 180, // 3 minutes default
      playCount: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return NextResponse.json({
      success: true,
      data: newTrack,
      message: 'Track created successfully',
    });

  } catch (error) {
    console.error('Create track API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

