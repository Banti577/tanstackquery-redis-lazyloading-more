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
        <div className={`rounded-lg transition-all duration-500 ${theme.curr_TEXT} ${theme.curr_BG} p-4 md:p-8 overflow-hidden`}>

            <section className="mb-12">
                <h2 className="text-3xl font-bold border-b-2 border-[#fa5b0f] w-fit pb-2 mb-6">
                    About Me
                </h2>

                <div className="flex flex-col md:flex-row items-center justify-around gap-8">

                    <motion.div

                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <Suspense fallback={<div className="w-64 h-64 bg-gray-700 animate-pulse rounded-xl" />}>
                            <LazyImage
                                src="https://thumbs.dreamstime.com/b/ai-brain-409496331.jpg"
                                width={320}
                                height={320}
                                alt="Profile Picture"
                                className="rounded-xl shadow-xl border-4 border-[#fa5b0f] hover:scale-105 transition-transform duration-300"
                            />
                        </Suspense>
                    </motion.div>

                    <motion.div
                        className="flex-1 max-w-xl bg-opacity-70 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-slate-800"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h3 className="text-[#fa5b0f] text-4xl font-extrabold mb-2">Banti Patel</h3>
                        <p className="text-xl text-slate-300 italic mb-4">Full Stack & MERN Developer</p>

                        <p className="text-lg mb-4">
                            I m a <span className="text-[#fa5b0f] font-semibold">MERN Stack Developer</span> passionate about building responsive, dynamic, and user-friendly web applications.
                        </p>

                        <div className="mb-4">
                            <p className="text-sm uppercase tracking-widest text-slate-500 font-bold mb-2">Expertise</p>
                            <div className="flex flex-wrap gap-2">
                                {Expertise.map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-[#fa5b0f] hover:bg-[#fa5b0f] hover:text-slate-900 transition-colors duration-200">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <p className="pt-4 border-t border-slate-800 text-slate-400 text-base">
                            Currently pushing the boundaries of modern web applications as a <span className="text-[#fa5b0f] font-semibold">Software Developer at BestPeers Infosystem</span>.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="mb-2">
                <h2 className="text-3xl font-bold border-b-2 border-[#fa5b0f] w-fit pb-2 mb-2">Education</h2>

                <motion.div
                    ref={ref}
                    className="relative max-w-5xl mx-auto p-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    {inView && (
                        <div className="timeline relative">
                            <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-[#fa5b0f]"></div>

                            <div className="mb-12 flex justify-between items-center w-full">
                                <div className="w-5/12 text-right pr-6">
                                    <h3 className={`text-2xl font-bold ${theme.curr_TEXT}`}>Medi-Caps University Indore</h3>
                                    <p className="text-[#fa5b0f]">Master of Computer Applications (MCA)</p>
                                    <time className="block text-sm text-slate-400 mt-1">2023 - 2025</time>
                                </div>
                                <div className="z-20 w-6 h-6 rounded-full bg-[#fa5b0f] border-4 border-white"></div>
                                <div className="w-5/12"></div>
                            </div>

                            <div className="mb-12 flex justify-between items-center w-full flex-row-reverse">
                                <div className="w-5/12 text-left pl-6">
                                    <h3 className={`text-2xl font-bold ${theme.curr_TEXT}`}>Punamchand Gupta Vocational College Khandwa</h3>
                                    <p className="text-[#fa5b0f]">Bachelor of Computer Applications (BCA)</p>
                                    <time className="block text-sm text-slate-400 mt-1">2019 - 2022</time>
                                </div>
                                <div className="z-20 w-6 h-6 rounded-full bg-[#fa5b0f] border-4 border-white"></div>
                                <div className="w-5/12"></div>
                            </div>
                        </div>
                    )}
                </motion.div>
            </section>

            <Experience />
        </div>
    )
}

export default Page