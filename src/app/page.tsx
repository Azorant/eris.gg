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
import { ActivityCard } from '@/components/ActivityCard';

const links = [
  { link: 'https://github.com/Azorant', icon: 'mdi:github' },
  { link: 'https://discord.gg/66dp9gxMZx', icon: 'ic:baseline-discord' },
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
    description: 'An easy-to-use bot that notifies you of undercutting in the markets of Eorzea\nand tracks your sale and purchase history.',
    tag: 'Project',
    featureText: 'Features',
    features: ['Undercut notifications', 'Character purchase history'],
    links: [
      {
        link: 'https://discord.com/api/oauth2/authorize?client_id=502696300412928021&scope=bot%20applications.commands',
        icon: 'ic:baseline-discord',
        text: 'Invite Market Monitor',
      },
      {
        link: 'https://github.com/Azorant/MarketMonitor',
        icon: 'mdi:github',
        text: 'Repo',
      },
    ],
    wave: wave_three.src,
  },
  {
    name: 'Liana',
    description: 'Yet another all-in-one moderation bot.',
    tag: 'Project',
    featureText: '',
    features: [],
    links: [
      {
        link: 'https://discord.com/api/oauth2/authorize?client_id=774711918823866449&scope=bot%20applications.commands',
        icon: 'ic:baseline-discord',
        text: 'Invite Liana',
      },
      {
        link: 'https://github.com/Azorant/Liana',
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
  const [presence, refetchPresence] = usePresence();
  const spotify = presence?.activities.find((a) => a.type === 2);
  const game = presence?.activities.find((a) => a.type === 0);
  const colors = {
    online: 'bg-green-600',
    idle: 'bg-yellow-300',
    dnd: 'bg-red-600',
    offline: 'bg-neutral-400',
  };

  return (
    <div className="h-screen w-screen text-white flex overflow-x-hidden">
      <div className="w-auto max-w-[95dvw] xl:max-w-[80dvw] flex flex-row gap-4 p-6 pb-24 xl:pb-4 flex-wrap min-h-screen h-fit place-content-center mx-auto">
        {/* Main Card */}
        <div className="flex flex-wrap border rounded-md shadow-md bg-neutral-800 border-neutral-700 p-4  w-full max-w-2xl sm:min-h-80 sm:h-80 lg:h-fit bg-cover" style={{ backgroundImage: `url(${main_wave.src})` }}>
          {/* Avatar */}
          <div className="hidden sm:block w-24 h-24 relative rounded-full border border-neutral-700 mt-2">
            <Image src={avatar} fill alt="avatar" className="rounded-full overflow-hidden"></Image>
            <div className={`absolute bottom-0 right-0 w-6 h-6 rounded-full border-neutral-800 border-4 ${colors[(presence?.status as keyof typeof colors) ?? 'offline']}`} />
          </div>
          {/* Name */}
          <div className="pl-0 sm:pl-4 w-full sm:w-fit h-fit flex flex-wrap sm:block">
            <div className="block sm:hidden w-24 h-24 relative rounded-full border border-neutral-700 mt-2">
              <Image src={avatar} fill alt="avatar" className="rounded-full overflow-hidden"></Image>
              <div className={`absolute bottom-0 right-0 w-6 h-6 rounded-full border-neutral-800 border-4 ${colors[(presence?.status as keyof typeof colors) ?? 'offline']}`} />
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
          <div className='flex gap-2 flex-wrap mx-auto'>

          {!!game ? <ActivityCard activity={game} /> : null}
          {!!spotify ? (
            <ActivityCard
            activity={spotify}
            onClick={() => {
              window.open('https://api.statusbadges.me/openspotify/160168328520794112', '_blank', 'noreferrer')?.focus();
                }}
                refetch={refetchPresence}
            />
          ) : null}
          </div>
        </div>

        {projects.map((project) => (
          <div className="flex flex-col border rounded-md shadow-md bg-neutral-800 border-neutral-700 p-4 w-full max-w-2xl 2xl:max-w-lg min-h-80 h-80 bg-cover" style={{ backgroundImage: `url(${project.wave})` }} key={project.name}>
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
