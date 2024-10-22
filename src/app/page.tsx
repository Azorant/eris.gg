'use client';

import Image from 'next/image';
import avatar from '../../public/icon.gif';
import { Icon } from '@iconify/react';
import main_wave from '../../public/main_wave.svg';
import wave_one from '../../public/wave_one.svg';
import wave_two from '../../public/wave_two.svg';
import wave_three from '../../public/wave_three.svg';
import wave_four from '../../public/wave_four.svg';
import { useEffect, useState } from 'react';
import { getSongInfo, SongInfo } from '@/app/info';

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
  const [song, setSong] = useState<SongInfo | null>(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await getSongInfo();
      setSong(data);
    };

    const timer = setInterval(loadData, 5000);
    loadData();

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="h-screen w-screen text-white flex">
      <div className="p-6 w-full max-w-[80dvw] flex flex-col xl:flex-row mx-auto gap-4 ">
        {/* Main Card */}
        <div className="flex flex-wrap border rounded-md shadow-md bg-neutral-800 border-neutral-700 p-4 mx-auto w-full max-w-lg h-fit sm:min-h-80 sm:h-80 bg-cover" style={{ backgroundImage: `url(${main_wave.src})` }}>
          {/* Avatar */}
          <div className="w-24 h-24 relative rounded-full overflow-hidden border border-neutral-700 mt-2">
            <Image src={avatar} fill alt="avatar"></Image>
          </div>
          {/* Name */}
          <div className="pl-4 w-fit h-fit">
            <h5 className="text-xl font-medium">Derek Alsop</h5>
            <p className="text-xs text-neutral-400">@Azorant</p>
            <span className="text-sm text-neutral-400">Full Stack Developer</span>
            <div className="flex mt-2 space-x-3">
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
            {!song || song.isPaused ? (
              <p className="pl-1">Nothing</p>
            ) : (
              <div className="flex w-fit h-fit">
                {/* Cover */}
                <div
                  className="w-24 h-24 relative rounded-lg shadow-lg overflow-hidden border border-neutral-600 hover:cursor-pointer"
                  onClick={() => {
                    window.open(song.url, '_blank', 'noreferrer')?.focus();
                  }}>
                  <Image src={song.imageSrc} fill alt="avatar" />
                </div>
                {/* Details */}
                <div className="pl-4 flex flex-col">
                  <p className="truncate max-w-[80%] sm:max-w-full">{song.title}</p>
                  <p className="text-xs text-neutral-300 truncate max-w-[80%] sm:max-w-full">{song.album}</p>
                  <p className="pt-2 text-sm truncate max-w-[80%] sm:max-w-full">{song.artist}</p>
                  <p className="mt-auto">
                    {Math.floor(song.songDuration / 60)}:{String(song.songDuration % 60).padStart(2, '0')}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex-1 xl:overflow-auto flex flex-wrap gap-4 justify-around h-fit pb-4">
          {projects.map((project) => (
            <div className="flex flex-col border rounded-md shadow-md bg-neutral-800 border-neutral-700 p-4 mx-auto w-full max-w-lg xl:max-w-md min-h-80 h-80 bg-cover" style={{ backgroundImage: `url(${project.wave})` }} key={project.name}>
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
    </div>
  );
}
