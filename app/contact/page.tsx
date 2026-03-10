'use client'
import { useTheme } from '@/contexts/ThemeContext';
import { useState } from 'react';

const Contact = () => {

    interface ThemeObject {
        curr_BG: string;
        curr_TEXT: string;
    }

    interface ThemeContextProps {
        theme: ThemeObject;
        setTheme: (theme: string) => void;
    }

    const { theme } = useTheme() as ThemeContextProps;
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = () => {
        // setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        // e.preventDefault();

        console.log('Form submitted:', formData);
        alert('Message sent!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className={` flex items-center justify-center p-4`}>


            <div className={` ${theme.curr_BG} w-[40%] p-6 border border-gray-200 rounded-lg shadow-sm`}>
                <div className="space-y-4">

                    <div>
                        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Name</h2>
                        <p className="text-lg font-medium text-gray-900">Banti Patel</p>
                    </div>

                    <div>
                        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Mobile</h2>
                        <p className="text-gray-700">+91 9770606527</p>
                    </div>


                    <div>
                        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Address</h2>
                        <p className="text-gray-700">Indore , MP</p>
                    </div>


                    <div>
                        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Email</h2>
                        <a href="mailto:alex@example.com" className="text-blue-600 hover:underline">patelvn2002@gmail.com</a>
                    </div>
                </div>
            </div>


            <div className={` shadow container mx-auto max-w-md  ${theme.curr_BG} rounded-lg p-6 md:p-8`}>
                <div className="text-center mb-6">
                    <h1 className={`${theme.curr_TEXT} text-2xl font-semibold`}>Contact Us</h1>
                    <p className={` ${theme.curr_TEXT} mt-2`}>Fill out the form below to send us a message.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className={` ${theme.curr_TEXT} block text-sm font-medium text-gray-700`}>
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className={` ${theme.curr_TEXT} block text-sm font-medium `}>
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            required
                            className="mt-1 block w-full px-3 py-2 border  rounded-md shadow-sm focus:outline-none"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className={`${theme.curr_TEXT}  block text-sm font-medium text-gray-700`}>
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="How can we help you?"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md  focus:outline-none "
                        ></textarea>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 cursor-pointer"
                        >
                            Send Message
                        </button>
                    </div>
                </form>

                <div className="mt-6 text-center text-xs text-gray-500">

                </div>
            </div>
        </section>
    );
};

export default Contact;
