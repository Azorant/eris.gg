import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faInstagram, faSteam, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const links = [
  { link: 'https://github.com/Korrdyn', icon: faGithub },
  { link: 'https://discord.gg/66dp9gxMZx', icon: faDiscord },
  {
    link: 'https://twitter.com/Korrdyn',
    icon: faTwitter,
  },
  {
    link: 'https://instagram.com/Korrdyn',
    icon: faInstagram,
  },
  {
    link: 'https://steamcommunity.com/id/Korrdyn/',
    icon: faSteam,
  },
];

const projects = [
  {
    name: 'Rhea',
    description: 'A robust, easy to use, music bot for Discord, which supports YouTube, Spotify, SoundCloud, Apple Music, and Simulator Radio.',
    links: [
      {
        link: 'https://github.com/Korrdyn/Rhea',
        text: 'Repo',
        icon: faGithub,
      },
      {
        link: 'https://discord.com/api/oauth2/authorize?client_id=830523046494339072&scope=bot%20applications.commands',
        text: 'Invite',
        icon: faDiscord,
      },
    ],
    images: [
      { src: '/rhea/one.png', height: 'h-[152px]' },
      { src: '/rhea/two.png', height: 'h-[152px]' },
    ],
  },
  {
    name: 'Icarus Tools',
    description: "A soon™ to be collection of helpful tools for the game Icarus. Currently there's only a crafting calculator, but I plan on adding more tools.",
    links: [
      {
        link: 'https://github.com/Korrdyn/icarus-tools',
        text: 'Repo',
        icon: faGithub,
      },
      {
        link: 'https://eris.gg/icarus',
        text: 'Visit',
        icon: faLink,
      },
    ],
    images: [{ src: '/icarus-tools/one.png', height: 'h-[300px]' }],
  },
];

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row py-6 lg:px-24 gap-8 text-white max-w-[calc(100vw*.8)] mx-auto w-full">
      {/* Card */}
      <div className="block border rounded-md shadow-md bg-gray-800 border-gray-700 p-4 lg:max-w-sm w-full h-72">
        <div className="flex flex-col items-center pb-4 pt-4">
          <div className="w-24 h-24 relative rounded-full overflow-hidden border border-gray-700 mb-2">
            <Image src="/avatar.png" fill alt="avatar" />
          </div>
          <h5 className="mb-1 text-xl font-medium">Derek Alsop</h5>
          <span className="text-sm text-gray-400">Full Stack Developer</span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            {links.map((el) => (
              <a href={el.link} key={el.link} target="_blank" className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 border border-gray-600 flex">
                <FontAwesomeIcon icon={el.icon} className="text-2xl my-auto" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="w-full">
        <h1 className="text-center lg:text-left text-3xl">Projects</h1>
        <div className="border-b border-gray-700 lg:w-1/3 my-3" />
        <div className="flex flex-wrap gap-2">
          {projects.map((project) => (
            <div key={project.name} className="w-auto border border-gray-700 bg-gray-800 h-auto rounded-md shadow-md flex flex-col lg:flex-row p-4 gap-2">
              <div className="flex flex-col lg:w-2/5">
                <h2 className="text-xl">{project.name}</h2>
                <p className="text-gray-400">{project.description}</p>
                <div className="flex gap-2 mt-2">
                  {project.links.map((link, index) => (
                    <a key={index} href={link.link} target="_blank" className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 border border-gray-600 flex items-center gap-2 text-sm">
                      <FontAwesomeIcon icon={link.icon} />
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
              <div className="border-l border-gray-700" />
              <div className="flex flex-wrap w-full gap-2">
                {project.images.map((image, index) => (
                  <div className="relative flex-grow" key={index}>
                    <Image src={image.src} className={`object-contain w-auto ${image.height} mx-auto`} alt="Rhea screenshot" width="0" height="0" sizes="100vw" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
