import Image from 'next/image'
import profilePic from '@/public/bantiphoto.png'

const Home = () => {
  return (
    <div className="min-h-screen flex justify-around items-center">
      <div className=" w-[50%]">
        <h1 className="text-4xl text-[rgb(212_212_212)]"> Hello, My name is <span className='text-[#fa5b0f]'>Banti Patel</span></h1>
        <h1 className="text-4xl bg-[linear-gradient(var(--tw-gradient-from),#5e0eab_var(--tw-gradient-via-position),var(--tw-gradient-to))">Full Stack Devloper</h1>
        <h2 className="text-2xl text-[rgb(163_163_163)]">MERN Stack Developer | React Developer | Building scalable web applications</h2>

        <button className=' bg-red-500 p-2'>Hire Me</button>
      </div>
      <div className="w-[30%]" >
        <Image src={profilePic} alt="Profile Picture" placeholder="blur" loading='lazy' />
      </div>

    </div>
  )
}

export default Home