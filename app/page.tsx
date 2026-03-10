'use client'

import Image from 'next/image'
import profilePic from '@/public/bantibg.png'
import { useTheme } from '@/contexts/ThemeContext'
import Link from 'next/link'

const Home = () => {
  interface theme {
    themeName: string,
    curr_BG: string,
    curr_TEXT: string,
  }

  interface themeI {
    theme: theme
  }

  const { theme } = useTheme() as themeI;
  return (
    <div className={`rounded min-h-screen md:flex justify-around items-center transition-all duration-300 ${theme.curr_TEXT} ${theme.curr_BG}`}>
      <div className=" w-[50%]">
        <h1 className={`text-4xl text-[rgb(212_212_212)]`}> Hello, My name is <span className='text-[#fa5b0f]'>Banti Patel</span></h1>
        <h1 className="text-4xl bg-[linear-gradient(var(--tw-gradient-from),#5e0eab_var(--tw-gradient-via-position),var(--tw-gradient-to))">Full Stack Devloper</h1>
        <h2 className="text-2xl text-[rgb(163_163_163)]">MERN Stack Developer | React Developer | Building scalable web applications</h2>

        <Link href='/contact'>
          <button className={` transition-all duration-300 rounded ${theme.curr_TEXT} bg-red-300   p-2 mt-2 cursor-pointer`}>Hire Me</button>
        </Link>
      </div>
      <div className="w-[30%]" >
        <Image className='rounded-2xl' src={profilePic} alt="Profile Picture" loading='lazy' />
      </div>

    </div>
  )
}

export default Home