'use client'
import Image from 'next/image'
import { useTheme } from '@/contexts/ThemeContext'
import videoStream from '@/public/Screenshot 2026-03-09 190440.png'
import Link from 'next/link';

interface ThemeObject { curr_BG: string; curr_TEXT: string; }
interface ThemeContextProps { theme: ThemeObject; }


const Project = () => {
  const { theme } = useTheme() as ThemeContextProps;

  return (
    <div className='flex flex-col lg:flex-row items-center justify-between gap-10 p-4 max-w-7xl mx-auto'>

      <div className='w-full lg:w-[55%] group relative overflow-hidden rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]'>
        <Image
          className='object-cover w-full h-auto'
          src={videoStream}
          alt='Project Preview'
          priority
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>


      <div className={`w-full lg:w-[40%] p-8 rounded-[2.5rem] shadow-xl backdrop-blur-sm border border-white/10 transition-all duration-300 ${theme.curr_TEXT} ${theme.curr_BG}`}>
        <span className="text-sm font-bold uppercase tracking-widest text-[#fa5b0f]/80">Featured Case Study</span>

        <h1 className='text-4xl font-extrabold mt-2 mb-6 bg-gradient-to-r from-[#fa5b0f] to-[#ff8c52] bg-clip-text text-transparent'>
          Video Streaming Website
        </h1>

        <div className="space-y-4 opacity-90 leading-relaxed text-lg">
          <p>
            Experience a seamless, high-fidelity streaming interface built for the modern web.
            Focused on performance and user engagement.
          </p>
          <p className="text-base opacity-75">
            Designed with a mobile-first approach, ensuring that your content looks stunning
            on any device, from cinema displays to smartphones.
          </p>
        </div>

        <Link href={'https://swipnest.vercel.app/'}>
          <button className="mt-8 px-8 py-3 bg-[#fa5b0f] text-white font-semibold rounded-full hover:bg-[#e04a00] transition-colors shadow-lg shadow-[#fa5b0f]/30 cursor-pointer">
            View Project
          </button>
        </Link>
      </div>

    </div>
  )
}

export default Project
