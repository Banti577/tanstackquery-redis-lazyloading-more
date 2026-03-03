import Image from 'next/image'
import profilePic from '@/public/My_self-e5066b97.webp'

const Home = () => {
  return (
    <div className="min-h-screen flex justify-around items-center">
      <div className=" w-[50%]">
        <h1 className="text-5xl text-[rgb(212_212_212)]">Banti Patel</h1>
        <h1 className="text-5xl bg-[linear-gradient(var(--tw-gradient-from),#5e0eab_var(--tw-gradient-via-position),var(--tw-gradient-to))">Full Stack Devloper</h1>
        <h2 className="text-2xl text-[rgb(163_163_163)]">MERN Stack Developer | React Developer | Building scalable web applications</h2>
      </div>
      <div className="w-[30%]" >
        {/* <Image src={profilePic} alt="Profile Picture" placeholder="blur" loading='lazy' /> */}
      </div>
    </div>
  )
}

export default Home