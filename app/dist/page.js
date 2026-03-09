"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var bantiphoto_png_1 = require("@/public/bantiphoto.png");
var Home = function () {
    return (React.createElement("div", { className: "min-h-screen flex justify-around items-center" },
        React.createElement("div", { className: " w-[50%]" },
            React.createElement("h1", { className: "text-4xl text-[rgb(212_212_212)]" },
                " Hello, My name is ",
                React.createElement("span", { className: 'text-[#fa5b0f]' }, "Banti Patel")),
            React.createElement("h1", { className: "text-4xl bg-[linear-gradient(var(--tw-gradient-from),#5e0eab_var(--tw-gradient-via-position),var(--tw-gradient-to))" }, "Full Stack Devloper"),
            React.createElement("h2", { className: "text-2xl text-[rgb(163_163_163)]" }, "MERN Stack Developer | React Developer | Building scalable web applications"),
            React.createElement("button", { className: ' bg-red-500 p-2' }, "Hire Me")),
        React.createElement("div", { className: "w-[30%]" },
            React.createElement(image_1["default"], { src: bantiphoto_png_1["default"], alt: "Profile Picture", placeholder: "blur", loading: 'lazy' }))));
};
exports["default"] = Home;
