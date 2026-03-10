'use client';
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var ThemeContext_1 = require("@/contexts/ThemeContext");
var Screenshot_2026_03_09_190440_png_1 = require("@/public/Screenshot 2026-03-09 190440.png");
var link_1 = require("next/link");
var Project = function () {
    var theme = ThemeContext_1.useTheme().theme;
    return (React.createElement("div", { className: 'flex flex-col lg:flex-row items-center justify-between gap-10 p-4 max-w-7xl mx-auto' },
        React.createElement("div", { className: 'w-full lg:w-[55%] group relative overflow-hidden rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]' },
            React.createElement(image_1["default"], { className: 'object-cover w-full h-auto', src: Screenshot_2026_03_09_190440_png_1["default"], alt: 'Project Preview', priority: true }),
            React.createElement("div", { className: "absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" })),
        React.createElement("div", { className: "w-full lg:w-[40%] p-8 rounded-[2.5rem] shadow-xl backdrop-blur-sm border border-white/10 transition-all duration-300 " + theme.curr_TEXT + " " + theme.curr_BG },
            React.createElement("span", { className: "text-sm font-bold uppercase tracking-widest text-[#fa5b0f]/80" }, "Featured Case Study"),
            React.createElement("h1", { className: 'text-4xl font-extrabold mt-2 mb-6 bg-gradient-to-r from-[#fa5b0f] to-[#ff8c52] bg-clip-text text-transparent' }, "Video Streaming Website"),
            React.createElement("div", { className: "space-y-4 opacity-90 leading-relaxed text-lg" },
                React.createElement("p", null, "Experience a seamless, high-fidelity streaming interface built for the modern web. Focused on performance and user engagement."),
                React.createElement("p", { className: "text-base opacity-75" }, "Designed with a mobile-first approach, ensuring that your content looks stunning on any device, from cinema displays to smartphones.")),
            React.createElement(link_1["default"], { href: 'https://swipnest.vercel.app/' },
                React.createElement("button", { className: "mt-8 px-8 py-3 bg-[#fa5b0f] text-white font-semibold rounded-full hover:bg-[#e04a00] transition-colors shadow-lg shadow-[#fa5b0f]/30 cursor-pointer" }, "View Project")))));
};
exports["default"] = Project;
