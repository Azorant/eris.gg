import Image from 'next/image';
import { Activity } from '@/app/info';
import { useEffect, useState } from 'react';

function FormatTime(seconds: number) {
  let time = new Date(seconds * 1000).toISOString().slice(11, 19);
  if (time.startsWith('00:')) time = time.slice(3);
  if (time.startsWith('0')) time = time.slice(1);
  return time;
}

function FormatImage(id: string | undefined, image: string) {
  if (image.startsWith('spotify:')) return `https://i.scdn.co/image/${image.replace('spotify:', '')}`;
  if (image.startsWith('http')) return image;
  if (image.startsWith('mp:')) return `https://media.discordapp.net/${image.replace('mp:', '')}`;
  return `https://cdn.discordapp.com/app-assets/${id}/${image}.png?size=160`;
}

export function ActivityCard({ activity, onClick, refetch }: { activity: Activity; onClick?: () => void; refetch?: () => Promise<void> }) {
  const isMusic = activity.type === 2;
  const [currentSeconds, setCurrentSeconds] = useState(activity.timestamps.start ? Math.abs(Math.round((activity.timestamps.start - Date.now()) / 1000)) : 0);

  useEffect(() => {
    if (!activity.timestamps.start) return;
    setCurrentSeconds(Math.abs(Math.round((activity.timestamps.start - Date.now()) / 1000)));
  }, [activity.timestamps.start]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!activity.timestamps.start) return;

    if (!activity.timestamps.end || Date.now() < activity.timestamps.end) {
      timer = setTimeout(() => {
        setCurrentSeconds(Math.abs(Math.round((activity.timestamps.start! - Date.now()) / 1000)));
      }, 1000);
    } else if (refetch) {
      refetch();
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [activity.timestamps.end, activity.timestamps.start, currentSeconds, refetch]);

  let details: string[] = [];

  if (isMusic) {
    details = [activity.details!, activity.assets!.large_text, activity.state!];
  } else {
    details.push(activity.name);
    if (activity.details) details.push(activity.details);
    if (activity.state) details.push(`${activity.state}${activity.party ? ` (${activity.party.size[0]} of ${activity.party.size[1]})` : ''}`);
  }

  const currentTime = currentSeconds ? FormatTime(currentSeconds) : null;
  const endTime = activity.timestamps.end ? FormatTime(Math.round((activity.timestamps.end - (activity.timestamps.start ?? 0)) / 1000)) : null;

  return (
    <div className="bg-neutral-700/30 mx-auto min-w-48 w-auto max-w-full border border-neutral-600 rounded-md shadow-md p-2 mt-4 backdrop-blur-md">
      <h6 className="text-sm text-neutral-200 pl-1 mb-2">{isMusic ? 'Listening to' : 'Playing'}</h6>

      <div className="flex">
        {/* Cover */}
        {!!activity.assets?.large_image ? (
          <div className="relative">
            <div className="w-24 h-24 relative rounded-lg shadow-lg overflow-hidden border border-neutral-600 hover:cursor-pointer" onClick={onClick}>
              <Image src={FormatImage(activity.application_id, activity.assets.large_image)} fill alt="large" />
            </div>
            {activity.assets.small_image ? (
              <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full shadow-lg overflow-hidden border border-neutral-600 ">
                <Image src={FormatImage(activity.application_id, activity.assets.small_image)} fill alt="small" />
              </div>
            ) : null}
          </div>
        ) : null}
        {/* Details */}
        <div className={`${!!activity.assets?.large_image ? 'pl-4' : ''} flex flex-col max-w-52`}>
          {details.map((text, index) => (
            <p className={`truncate ${index ? 'text-xs text-neutral-300' : ''}`} key={index}>
              {text}
            </p>
          ))}
          <p className="mt-auto">
            {!!currentSeconds ? currentTime : null}
            {!!endTime ? ` / ${endTime}` : null}
          </p>
        </div>
      </div>
    </div>
  );
}
