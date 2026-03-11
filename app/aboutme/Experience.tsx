
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
const Experience = () => {

    interface theme {
        themeName: string,
        curr_BG: string,
        curr_TEXT: string,
    }

    interface themeI {
        theme: theme
    }

    const { theme } = useTheme() as themeI;
    const { ref, inView } = useInView({
        threshold: 0.6,
        triggerOnce: true
    })

    return (
        <div>

            <h2 className={`text-2xl border-b-2 border-[#fa5b0f] w-fit`}>Experience</h2>
            <h3 className='border-b-2 border-[#fa5b0f] w-fit px-3 py-1'></h3>
            <div className='lazy-content-container'>

                <motion.div
                    ref={ref}
                    className=' p-1'
                    initial={{ opacity: 0, x: -300 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 300 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >

                    {inView && (

                        <div className="max-w-5xl mx-auto p-6 overflow-hidden">

                            <div className="relative wrap  p-10 h-full">

                                <div
                                    className="absolute border-red-500 h-full border"
                                    style={{ left: '50%' }}
                                ></div>

                                <div className="mb-8 flex justify-between items-center w-full">

                                    <div className="order-1 w-5/12"></div>

                                    <div className="z-20 flex items-center order-1 bg-red-500 shadow-xl w-4 h-4 rounded-full ring-4 ring-white"></div>
                                    <div className="border rounded order-1 w-5/12 px-6 py-4 text-right">

                                        <time className="mb-1 text-sm font-semibold text-gray-200">
                                            2023 - 2025
                                        </time>

                                        <h3 className={`text-2xl font-bold  ${theme.curr_TEXT}`}>
                                            Bestpeers Infosystem, Indore
                                        </h3>

                                        <p className="text-[#fa5b0f]">
                                            Trainee Software Engineer
                                        </p>

                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nisi dolorem mollitia. Vero, tempore, tempora consequatur qui eius ab harum, provident voluptas est debitis quas optio molestias? Saepe, sint laborum.
                                        </p>

                                    </div>

                                </div>


                                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full">

                                    <div className="order-1 w-5/12"></div>

                                    <div className="z-20 flex items-center order-1 bg-red-500 shadow-xl w-4 h-4 rounded-full ring-4 ring-white"></div>

                                    <div className="border order-1 w-5/12 px-6 py-4 text-left">

                                        <time className="mb-1 text-sm font-semibold text-gray-200">
                                            2025 - 2025
                                        </time>

                                        <h3 className={`text-2xl font-bold  ${theme.curr_TEXT}`}>
                                            Ram Antivirus Pvt. Ltd.
                                        </h3>

                                        <p className="text-[#fa5b0f]">
                                            internship
                                        </p>

                                        <p>
                                            Created dynamic & intractive user interfaces,
                                        </p>


                                    </div>

                                </div>

                            </div>

                        </div>

                    )}

                </motion.div>

            </div>

        </div>
    )
}

export default Experience