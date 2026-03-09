'use client'
import React, { Suspense } from 'react'
import { motion } from 'framer-motion'


const LazyImage = React.lazy(() => import('@/utils/LazyImage'));

const Page = () => {
    return (
        <div>

            <div className='flex items-center justify-aroundlazy-content-container'>
                <motion.div
                    className='m-5 border p-1'
                    initial={{ opacity: 0, x: -300 }} // Start 50px to the right
                    animate={{ opacity: 1, x: 0 }}  // Slide to exact position
                    transition={{ duration: 3, ease: "easeOut" }}
                >
                    <Suspense fallback={<div className="w-50 h-50 bg-gray-100 animate-pulse" />}>
                        <LazyImage
                            src={'https://thumbs.dreamstime.com/b/ai-brain-409496331.jpg'}
                            width={400}
                            height={300}
                            alt="Profile Picture"
                            className="rounded-lg"
                        />
                    </Suspense>
                </motion.div>



                <div className='max-w-md'>
                    <motion.div
                        className='m-5 border p-1'
                        initial={{ opacity: 0, x: 300 }} // Start 50px to the right
                        animate={{ opacity: 1, x: 0 }}  // Slide to exact position
                        transition={{ duration: 3, ease: "easeOut" }}
                    >
                        <div className='border-amber-400 border p-2'>
                            <h2 className='text-red-200'> Banti Patel - Full Stack Developer</h2>
                            <p>Im Banti Patel, a Full Stack Developer and MERN Stack Developer passionate about building dynamic, responsive, and user-friendly web applications.</p>

                            <p>With expertise in React, Node.js, MongoDB, Express.js, JavaScript, Java, and Python, I specialize in delivering seamless user experiences and scalable solutions.</p>

                            <p>Currently working as a Software/Web Developer at BestPeers Infosystem, I focus on creating modern web applications that are both performant and maintainable. Let&aposs collaborate to bring your ideas to life!</p>
                        </div>
                    </motion.div>
                </div>
            </div>

        </div>




    )
}

export default Page
