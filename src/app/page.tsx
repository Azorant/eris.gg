'use client';

import Image from 'next/image';
import avatar from '../../public/icon.gif';
import { Icon } from '@iconify/react';
import main_wave from '../../public/main_wave.svg';
import wave_one from '../../public/wave_one.svg';
import wave_two from '../../public/wave_two.svg';
import wave_three from '../../public/wave_three.svg';
import wave_four from '../../public/wave_four.svg';
import { usePresence } from '@/app/hook';

const links = [
  { link: 'https://github.com/Azorant', icon: 'mdi:github' },
  { link: 'https://discord.gg/ENchpszJYP', icon: 'ic:baseline-discord' },
  {
    link: 'https://twitter.com/Azorant',
    icon: 'pajamas:twitter',
  },
  {
    link: 'https://instagram.com/Korrdyn',
    icon: 'mdi:instagram',
  },
  {
    link: 'https://steamcommunity.com/profiles/76561198105044719',
    icon: 'mdi:steam',
  },
];

const projects = [
  {
    name: 'Moon Sentinels',
    description: "A group of friends playing games together. If you're looking for someone to game with, join us!",
    tag: 'Community',
    featureText: '',
    features: [],
    links: [
      {
        link: 'https://discord.gg/ENchpszJYP',
        icon: 'ic:baseline-discord',
        text: 'Join Server',
      },
    ],
    wave: wave_four.src,
  },
  {
    name: 'Rhea',
    description: 'A simple, no ads music bot.',
    tag: 'Project',
    featureText: 'Supports',
    features: ['Apple Music', 'Spotify', 'YouTube', 'Soundcloud', 'and more!'],
    links: [
      {
        link: 'https://discord.com/api/oauth2/authorize?client_id=894119619986620486&scope=bot%20applications.commands',
        icon: 'ic:baseline-discord',
        text: 'Invite Gaia',
      },
      {
        link: 'https://discord.com/api/oauth2/authorize?client_id=830523046494339072&scope=bot%20applications.commands',
        icon: 'ic:baseline-discord',
        text: 'Invite Rhea',
      },
      {
        link: 'https://github.com/Azorant/Rhea',
        icon: 'mdi:github',
        text: 'Repo',
      },
    ],
    wave: wave_two.src,
  },
  {
    name: 'Market Monitor',
    description: 'A Discord bot that will alert you when your listings get undercut on the market in FFXIV.',
    tag: 'Project',
    featureText: 'WIP',
    features: ['Will be public soon™️'],
    links: [
      {
        link: 'https://github.com/Azorant/MarketMonitor',
        icon: 'mdi:github',
        text: 'Repo',
      },
    ],
    wave: wave_one.src,
  },
  {
    name: 'Drawing API',
    description: 'Rest API that lets you create images out of shapes, text, and images via JSON.',
    tag: 'Project',
    featureText: 'Features',
    features: ['Supports Lua to allow for dynamic images'],
    links: [
      {
        link: 'https://github.com/Azorant/DrawingAPI',
        icon: 'mdi:github',
        text: 'Repo',
      },
    ],
    wave: wave_three.src,
  },
];

export default function Home() {
  const presence = usePresence();
  const spotify = presence?.activities.find((a) => a.type === 2);
  const seconds = spotify ? Math.round((spotify.timestamps.end! - spotify.timestamps.start) / 1000) : 0;
  const colors = {
    online: 'bg-green-600',
    idle: 'bg-yellow-300',
    dnd: 'bg-red-600',
    offline: 'bg-neutral-400'
  }
  

  return (
    <div className="h-screen w-screen text-white flex overflow-x-hidden">
      <div className="w-auto max-w-[95dvw] xl:max-w-[80dvw] flex flex-row gap-4 p-6 pb-24 xl:pb-4 flex-wrap min-h-screen h-fit place-content-center mx-auto">
        {/* Main Card */}
        <div className="flex flex-wrap border rounded-md shadow-md bg-neutral-800 border-neutral-700 p-4  w-full max-w-lg h-fit sm:min-h-80 sm:h-80 bg-cover" style={{ backgroundImage: `url(${main_wave.src})` }}>
          {/* Avatar */}
          <div className="hidden sm:block w-24 h-24 relative rounded-full border border-neutral-700 mt-2">
            <Image src={avatar} fill alt="avatar" className="rounded-full overflow-hidden"></Image>
            <div className={`absolute bottom-0 right-0 w-6 h-6 rounded-full border-neutral-800 border-4 ${colors[presence?.status as keyof typeof colors ?? 'offline']}`} />
          </div>
          {/* Name */}
          <div className="pl-0 sm:pl-4 w-full sm:w-fit h-fit flex flex-wrap sm:block">
            <div className="block sm:hidden w-24 h-24 relative rounded-full border border-neutral-700 mt-2">
              <Image src={avatar} fill alt="avatar" className="rounded-full overflow-hidden"></Image>
            <div className={`absolute bottom-0 right-0 w-6 h-6 rounded-full border-neutral-800 border-4 ${colors[presence?.status as keyof typeof colors ?? 'offline']}`} />

            </div>
            <div className="my-auto ml-4 sm:ml-0">
              <h5 className="text-xl font-medium">Derek Alsop</h5>
              <p className="text-xs text-neutral-400">@Azorant</p>
              <span className="text-sm text-neutral-400">Full Stack Developer</span>
            </div>

            <div className="flex mt-2 mx-auto gap-2">
              {links.map((el) => (
                <a href={el.link} key={el.link} target="_blank" className="p-2 rounded-lg bg-neutral-700  hover:bg-neutral-600 border border-neutral-600 flex">
                  <Icon icon={el.icon} className="text-xl my-auto" />
                </a>
              ))}
            </div>
          </div>
          {/* Music */}
          <div className="bg-neutral-700/30 mx-auto min-w-48 w-auto max-w-full border border-neutral-600 rounded-md shadow-md p-2 mt-4 backdrop-blur-md">
            <h6 className="text-sm text-neutral-200 pl-1 mb-2">Currently playing</h6>
            {!spotify ? (
              <p className="pl-1">Nothing</p>
            ) : (
              <div className="flex w-fit h-fit">
                {/* Cover */}
                <div
                  className="w-24 h-24 relative rounded-lg shadow-lg overflow-hidden border border-neutral-600 hover:cursor-pointer"
                  onClick={() => {
                    window.open('https://api.statusbadges.me/openspotify/160168328520794112', '_blank', 'noreferrer')?.focus();
                  }}>
                  <Image src={`https://i.scdn.co/image/${spotify.assets!.large_image.replace('spotify:', '')}`} fill alt="avatar" />
                </div>
                {/* Details */}
                <div className="pl-4 flex flex-col">
                  <p className="truncate max-w-[55%] sm:max-w-full">{spotify.details}</p>
                  <p className="truncate max-w-[55%] sm:max-w-full text-xs text-neutral-300">{spotify.assets!.large_text}</p>
                  <p className="truncate max-w-[55%] sm:max-w-full pt-2 text-sm ">{spotify.state}</p>
                  <p className="mt-auto">
                    {Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, '0')}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {projects.map((project) => (
          <div className="flex flex-col border rounded-md shadow-md bg-neutral-800 border-neutral-700 p-4 w-full max-w-lg min-h-80 h-80 bg-cover" style={{ backgroundImage: `url(${project.wave})` }} key={project.name}>
            <p className="text-sm text-neutral-400">{project.tag}</p>
            <h1 className="text-3xl mt-2">{project.name}</h1>
            <p className="mt-4 text-neutral-300">{project.description}</p>

            <p className="mt-4">{project.featureText}</p>
            <div className="flex flex-wrap gap-2">
              {project.features.map((feature, index) => (
                <p key={index} className="text-sm text-neutral-400">
                  {feature}
                </p>
              ))}
            </div>

            <div className="flex flex-row-reverse mt-auto gap-2">
              {project.links.map((link, index) => (
                <a href={link.link} key={index} target="_blank" className="p-2 rounded-lg bg-neutral-600/50 backdrop-blur  hover:bg-neutral-800 border border-neutral-500 flex">
                  <Icon icon={link.icon} className="text-xl my-auto mr-2" />
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
