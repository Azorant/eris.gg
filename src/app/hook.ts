import { Presence, getPresence } from '@/app/info';
import { useState, useEffect } from 'react';

export function usePresence(): [Presence | null, () => Promise<void>] {
  const [presence, setPresence] = useState<Presence | null>(null);

  const loadData = async () => {
    const data = await getPresence();
    setPresence(data);
  };

  useEffect(() => {
    const timer = setInterval(loadData, 30000);
    loadData();

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return [presence, loadData];
}
