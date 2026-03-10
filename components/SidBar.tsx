'use client';
import Link from 'next/link';

import { useTheme } from '@/contexts/ThemeContext';
import { SIDE_LINKS } from '@/utils/constant';
import { THEME_COLORS } from '@/contexts/constant.color';


interface ThemeObject {
  curr_BG: string;
  curr_TEXT: string;
}

interface ThemeContextProps {
  theme: ThemeObject;
  setTheme: (theme: string) => void;
}

const SidBar = () => {


  const { theme, setTheme } = useTheme() as ThemeContextProps

  const handleThemeChange = (themeName: string) => {

    setTheme(themeName);

  }

  return (
    <div className={` ${theme.curr_BG} transition-all duration-300 min-h-screen border-r border-white/10 flex flex-col shadow-right-lg`}>

      <div className={`flex items-center  justify-center p-2 text-2xl font-bold tracking-tight border-b  ${theme.curr_TEXT}  border-gray-100`}>
        <Link href={`/`}>
          Banti Patel
        </Link>
      </div>

      <nav className="flex-1 px-10 py-6">
        <ul className="space-y-7">
          {SIDE_LINKS.map((item) => {

            return (
              <li key={item.name} className=''>
                <Link
                  href={item.path}
                  className={`flex items-center px-4 py-2  transition-all duration-200 group border-b border-gray-100`}
                >
                  <span className={`text-xl ${theme.curr_TEXT} `}>
                    <item.icon />
                  </span>
                  <span className={`ml-3 font-medium  ${theme.curr_TEXT}`}>{item.name}</span>
                </Link>
              </li>
            );
          })}

          <li className="flex items-center justify-between px-4 py-3  transition-colors border-b border-gray-100">
            <div className="flex items-center justify-between gap-3">

              {/* <span className={`text-sm font-semibold uppercase tracking-wider ${theme.curr_TEXT}`}>
                Theme
              </span> */}
            </div>

            <div className='space-x-2'>

              {THEME_COLORS.map(item => <span className={`mx-1 border px-2  rounded-4xl cursor-pointer ${item.curr_BG}`} onClick={() => handleThemeChange(item.themeName)} key={item.themeName}></span>)}

            </div>

          </li>

        </ul>

      </nav>
    </div>
  );
};

export default SidBar;
