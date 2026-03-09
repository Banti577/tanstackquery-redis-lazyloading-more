import Image from 'next/image'
import profilePic from '@/public/My_self-e5066b97.webp'

const Home = () => {
    return (
        <div className="min-h-screen">
            <div>
                <h1>Hello, My name is Banti Patel</h1>
                <h1>Full Stack Devloper</h1>
                <h2>MERN Stack Developer | React Developer | Building scalable web applications</h2>
            </div>
            <div>
                {/* <Image src={profilePic} alt="Profile Picture" placeholder="blur" /> */}
            </div>
        </div>
    )
}

export default Home