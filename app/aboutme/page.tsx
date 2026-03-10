'use client'

import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTheme } from '@/contexts/ThemeContext'
import { Expertise } from '@/contexts/constant.color'
import Experience from './Experience'

const LazyImage = React.lazy(() => import('@/utils/LazyImage'))



interface theme {
    themeName: string,
    curr_BG: string,
    curr_TEXT: string,
}

interface themeI {
    theme: theme
}

const Page = () => {
    const { theme } = useTheme() as themeI;
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    })

    return (
        <div className={`rounded transition-all duration-300 ${theme.curr_TEXT} ${theme.curr_BG} p-2  overflow-hidden`}>

            <h2 className={`text-2xl border-b-2 border-[#fa5b0f] w-fit`}>About Me</h2>

            <h3 className='border-b-2 border-[#fa5b0f] w-fit px-3 py-1'></h3>

            <div className='flex justify-around lazy-content-container overflow-hidden'>

                <motion.div
                    className='m-5 p-1 '
                    initial={{ opacity: 0, y: -300 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
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


                <motion.div
                    className='max-w-md m-5 p-1 rounded'
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >

                    <div className={`${theme.curr_BG} max-w-2xl mx-auto p-8  rounded-3xl shadow-2xl border border-slate-800 ${theme.curr_TEXT}`}>

                        <div className="mb-6 border-b border-slate-800 pb-6">
                            <h2 className='text-[#fa5b0f] text-4xl font-extrabold tracking-tight mb-2'>
                                Banti Patel
                            </h2>
                            <p className="text-xl font-medium text-slate-100 italic">
                                Full Stack & MERN Developer
                            </p>
                        </div>


                        <div className="space-y-4 text-lg leading-relaxed">
                            <p>
                                I&apos;m a <span className="text-[#fa5b0f] font-semibold">MERN Stack Developer</span> passionate about building dynamic, responsive, and user-friendly web applications.
                            </p>


                            <div className="pt-2">
                                <p className="text-sm uppercase tracking-widest text-slate-500 font-bold mb-3">Expertise</p>
                                <div className="flex flex-wrap gap-2">
                                    {Expertise.map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-[#fa5b0f]">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <p className={`${theme.curr_TEXT} pt-4 border-t border-slate-800 text-slate-400 text-base`}>
                                Currently pushing the boundaries of modern web applications as a <span className={`text-[#fa5b0f]`}>Software Developer at BestPeers Infosystem</span>.
                            </p>
                        </div>
                    </div>


                </motion.div>

            </div>

            <div className='lazy-content-container'>
                <h2 className={`text-2xl border-b-2 border-[#fa5b0f] w-fit`}>Education</h2>

                <h3 className='border-b-2 border-[#fa5b0f] w-fit px-3 py-1'></h3>


                <motion.div
                    ref={ref}
                    className='m-5 p-1'
                    initial={{ opacity: 0, x: -300 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -300 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >

                    {inView && (

                        <div className="max-w-5xl mx-auto p-6">

                            <div className="relative wrap overflow-hidden p-10 h-full">


                                <div
                                    className="absolute border-red-500 h-full border"
                                    style={{ left: '50%' }}
                                ></div>

                                <div className="mb-8 flex justify-between items-center w-full">

                                    <div className="order-1 w-5/12"></div>

                                    <div className="z-20 flex items-center order-1 bg-red-500 shadow-xl w-4 h-4 rounded-full ring-4 ring-white"></div>

                                    <div className="order-1 w-5/12 px-6 py-4 text-right">

                                        <time className="mb-1 text-sm font-semibold text-gray-200">
                                            2023 - 2025
                                        </time>

                                        <h3 className={`text-2xl font-bold  ${theme.curr_TEXT}`}>
                                            Medi-Caps University Indore
                                        </h3>

                                        <p className="text-[#fa5b0f]">
                                            Master s of Computer Applications (MCA)
                                        </p>

                                    </div>

                                </div>


                                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full">

                                    <div className="order-1 w-5/12"></div>

                                    <div className="z-20 flex items-center order-1 bg-red-500 shadow-xl w-4 h-4 rounded-full ring-4 ring-white"></div>

                                    <div className="order-1 w-5/12 px-6 py-4 text-left">

                                        <time className="mb-1 text-sm font-semibold text-gray-200">
                                            2019 - 2022
                                        </time>

                                        <h3 className={`text-2xl font-bold  ${theme.curr_TEXT}`}>
                                            Punamchand Gupta Vocational College Khandwa
                                        </h3>

                                        <p className="text-[#fa5b0f]">
                                            Bachelor of Computer Applications (BCA)
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    )}

                </motion.div>

            </div>

            <Experience />

        </div>
    )
}

export default Page