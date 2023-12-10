import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faInstagram, faSteam, faDiscord } from '@fortawesome/free-brands-svg-icons';

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

export default function Home() {
  return (
    <main className="flex text-white w-screen">
      {/* Card */}
      <div className="block border rounded-md shadow-md bg-gray-800 border-gray-700 p-4 my-auto mx-5 lg:mx-auto lg:max-w-sm w-full h-72">
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
    </main>
  );
}
