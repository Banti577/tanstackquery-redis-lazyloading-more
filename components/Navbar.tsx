import React from 'react'

import Link from 'next/link'
import { useTheme } from '@/contexts/ThemeContext'

const Navbar = () => {

    return (
        <div className='flex justify-around items-center bg-[rgb(27_27_27)] text-[rgb(212_212_212)] p-2'>

            <div className="logo text-2xl">
                BP
            </div>
            <div className="menu">
                <ul className='flex'>
                    <Link href='/'>
                        <li className='mx-3'>Home</li>
                    </Link>
                    <Link href='/about'>
                        <li className='mx-3'>About</li>
                    </Link>
                    <li className='mx-3'>Experience</li>
                    <Link href='/skill'>
                        <li className='mx-3'>Skills</li>
                    </Link>
                    <li className='mx-3'>Projects</li>
                    <li className='mx-3'>theme change</li>
                </ul>

            </div>
            <div className="media flex list-none">

                <li className='mx-3'>insta</li>
                <li className='mx-3'>face</li>
                <li className='mx-3'>linked</li>
                <li className='mx-3'>github</li>

            </div>
        </div>
    )
}

export default Navbar