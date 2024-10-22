'use server';

export async function getSongInfo(): Promise<SongInfo | null> {
  try {
    const res = await fetch(`http://${process.env.YOUTUBE_HOST}/api/v1/song-info`, {
      headers: {
        Authorization: `Bearer ${process.env.YOUTUBE_TOKEN}`,
      },
    });
    return res.json();
  } catch (error) {
    console.error({
      message: 'Unable to contact youtube music',
      error: (error as Error).cause ?? (error as Error).message,
    });
    return null;
  }
}

export interface SongInfo {
  title: string;
  artist: string;
  views: number;
  uploadDate: string;
  imageSrc: string;
  isPaused: boolean;
  songDuration: number;
  elapsedSeconds: number;
  url: string;
  album: string;
  videoId: string;
  playlistId: string;
  mediaType: string;
}
