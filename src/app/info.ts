'use server';

export async function getPresence(): Promise<Presence | null> {
  try {
    const res = await fetch(`https://api.statusbadges.me/presence/160168328520794112`);
    if (res.ok) return res.json();
    return null;
  } catch (error) {
    console.error({
      message: 'Unable to get presence',
      error: (error as Error).message,
    });
    return null;
  }
}

export interface Presence {
  status: string;
  guild_id: string;
  client_status: Status;
  activities: Activity[];
}

export interface Activity {
  type: number;
  timestamps: Timestamps;
  name: string;
  id: string;
  created_at: number;
  application_id?: string;
  state?: string;
  details?: string;
  assets?: Assets;
  sync_id?: string;
  session_id?: string;
  party?: Party;
  flags?: number;
}

interface Party {
  id?: string;
  size: [number, number]
}

interface Assets {
  small_text?: string;
  small_image?: string;
  large_text: string;
  large_image: string;
}

interface Timestamps {
  start?: number;
  end?: number;
}

interface Status {
  desktop: string;
}
