'use client';
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var bantibg_png_1 = require("@/public/bantibg.png");
var ThemeContext_1 = require("@/contexts/ThemeContext");
var link_1 = require("next/link");
var Home = function () {
    var theme = ThemeContext_1.useTheme().theme;
    return (React.createElement("div", { className: "rounded min-h-screen md:flex justify-around items-center transition-all duration-300 " + theme.curr_TEXT + " " + theme.curr_BG },
        React.createElement("div", { className: " w-[50%]" },
            React.createElement("h1", { className: "text-4xl text-[rgb(212_212_212)]" },
                " Hello, My name is ",
                React.createElement("span", { className: 'text-[#fa5b0f]' }, "Banti Patel")),
            React.createElement("h1", { className: "text-4xl bg-[linear-gradient(var(--tw-gradient-from),#5e0eab_var(--tw-gradient-via-position),var(--tw-gradient-to))" }, "Full Stack Devloper"),
            React.createElement("h2", { className: "text-2xl text-[rgb(163_163_163)]" }, "MERN Stack Developer | React Developer | Building scalable web applications"),
            React.createElement(link_1["default"], { href: '/contact' },
                React.createElement("button", { className: " transition-all duration-300 rounded " + theme.curr_TEXT + " bg-red-300   p-2 mt-2 cursor-pointer" }, "Hire Me"))),
        React.createElement("div", { className: "w-[30%]" },
            React.createElement(image_1["default"], { className: 'rounded-2xl', src: bantibg_png_1["default"], alt: "Profile Picture", loading: 'lazy' }))));
};
exports["default"] = Home;
