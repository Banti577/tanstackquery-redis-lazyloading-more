'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SIDE_LINKS } from '@/utils/constant';

const SidBar = () => {
  const pathname = usePathname();

  return (
    <div className=" bg-[#1a1a1a] min-h-screen border-r border-white/10 flex flex-col">

      <div className=" flex items-center  justify-center p-2 text-xl font-bold tracking-tight text-white border-b border-gray-100">
        <Link href={`/`}>
          Banti Patel
        </Link>
      </div>

      <nav className="flex-1 px-10 py-6">
        <ul className="space-y-4">
          {SIDE_LINKS.map((item) => {
            const isActive = pathname === item.path;

            return (
              <li key={item.name} className='border-b border-gray-100'>
                <Link
                  href={item.path}
                  className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 group ${isActive
                    ? 'text-pink-500'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                >
                  <span className={`text-xl ${isActive ? 'text-white' : 'group-hover:text-white'}`}>
                    <item.icon />
                  </span>
                  <span className="ml-3 font-medium">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default SidBar;
