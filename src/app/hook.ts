import { Presence, getPresence } from '@/app/info';
import { useState, useEffect } from 'react';

export function usePresence() {
  const [presence, setPresence] = useState<Presence | null>(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await getPresence();
      setPresence(data);
    };

    const timer = setInterval(loadData, 30000);
    loadData();

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return presence;
}
