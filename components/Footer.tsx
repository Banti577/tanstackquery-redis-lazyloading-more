import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[rgb(23_23_23)] text-[rgb(163_163_163)]'>

            <div className='flex justify-between p-2'>
                <div>
                    2026 all rigth reserved banti patel
                    <h2>MERN Stack Developer | React Developer | Building scalable web applications</h2>
                </div>

                <div className='flex'>
                    <li className='mx-3'>insta</li>
                    <li className='mx-3'>face</li>
                    <li className='mx-3'>linked</li>
                </div>
            </div>

            <div className="menu border-t border-b-gray-300 pb-15">
                <ul className='flex justify-center items-center pt-5'>
                    <li className='mx-3'>Home</li>
                    <li className='mx-3'>About</li>
                    <li className='mx-3'>Experience</li>
                    <li className='mx-3'>Skills</li>
                    <li className='mx-3'>Projects</li>
                    <li className='mx-3'>Contact</li>
                </ul>

            </div>
        </div>
    )
}

export default Footer