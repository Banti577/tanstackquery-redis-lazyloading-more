'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var LazyImage = react_1["default"].lazy(function () { return Promise.resolve().then(function () { return require('@/utils/LazyImage'); }); });
var Page = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: 'flex items-center justify-aroundlazy-content-container' },
            react_1["default"].createElement(framer_motion_1.motion.div, { className: 'm-5 border p-1', initial: { opacity: 0, x: -300 }, animate: { opacity: 1, x: 0 }, transition: { duration: 3, ease: "easeOut" } },
                react_1["default"].createElement(react_1.Suspense, { fallback: react_1["default"].createElement("div", { className: "w-50 h-50 bg-gray-100 animate-pulse" }) },
                    react_1["default"].createElement(LazyImage, { src: 'https://thumbs.dreamstime.com/b/ai-brain-409496331.jpg', width: 400, height: 300, alt: "Profile Picture", className: "rounded-lg" }))),
            react_1["default"].createElement("div", { className: 'max-w-md' },
                react_1["default"].createElement(framer_motion_1.motion.div, { className: 'm-5 border p-1', initial: { opacity: 0, x: 300 }, animate: { opacity: 1, x: 0 }, transition: { duration: 3, ease: "easeOut" } },
                    react_1["default"].createElement("div", { className: 'border-amber-400 border p-2' },
                        react_1["default"].createElement("h2", { className: 'text-red-200' }, " Banti Patel - Full Stack Developer"),
                        react_1["default"].createElement("p", null, "Im Banti Patel, a Full Stack Developer and MERN Stack Developer passionate about building dynamic, responsive, and user-friendly web applications."),
                        react_1["default"].createElement("p", null, "With expertise in React, Node.js, MongoDB, Express.js, JavaScript, Java, and Python, I specialize in delivering seamless user experiences and scalable solutions."),
                        react_1["default"].createElement("p", null, "Currently working as a Software/Web Developer at BestPeers Infosystem, I focus on creating modern web applications that are both performant and maintainable. Let&aposs collaborate to bring your ideas to life!")))))));
};
exports["default"] = Page;
