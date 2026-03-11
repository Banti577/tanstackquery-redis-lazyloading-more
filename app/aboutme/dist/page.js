'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var react_intersection_observer_1 = require("react-intersection-observer");
var ThemeContext_1 = require("@/contexts/ThemeContext");
var constant_color_1 = require("@/contexts/constant.color");
var Experience_1 = require("./Experience");
var LazyImage = react_1["default"].lazy(function () { return Promise.resolve().then(function () { return require('@/utils/LazyImage'); }); });
var Page = function () {
    var theme = ThemeContext_1.useTheme().theme;
    var _a = react_intersection_observer_1.useInView({
        threshold: 0.2,
        triggerOnce: true
    }), ref = _a.ref, inView = _a.inView;
    return (react_1["default"].createElement("div", { className: "rounded-lg transition-all duration-500 " + theme.curr_TEXT + " " + theme.curr_BG + " p-4 md:p-8 overflow-hidden" },
        react_1["default"].createElement("section", { className: "mb-12" },
            react_1["default"].createElement("h2", { className: "text-3xl font-bold border-b-2 border-[#fa5b0f] w-fit pb-2 mb-6" }, "About Me"),
            react_1["default"].createElement("div", { className: "flex flex-col md:flex-row items-center justify-around gap-8" },
                react_1["default"].createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: -100 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1, ease: "easeOut" } },
                    react_1["default"].createElement(react_1.Suspense, { fallback: react_1["default"].createElement("div", { className: "w-64 h-64 bg-gray-700 animate-pulse rounded-xl" }) },
                        react_1["default"].createElement(LazyImage, { src: "https://thumbs.dreamstime.com/b/ai-brain-409496331.jpg", width: 320, height: 320, alt: "Profile Picture", className: "rounded-xl shadow-xl border-4 border-[#fa5b0f] hover:scale-105 transition-transform duration-300" }))),
                react_1["default"].createElement(framer_motion_1.motion.div, { className: "flex-1 max-w-xl bg-opacity-70 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-slate-800", initial: { opacity: 0, x: 100 }, animate: { opacity: 1, x: 0 }, transition: { duration: 1, ease: "easeOut" } },
                    react_1["default"].createElement("h3", { className: "text-[#fa5b0f] text-4xl font-extrabold mb-2" }, "Banti Patel"),
                    react_1["default"].createElement("p", { className: "text-xl text-slate-300 italic mb-4" }, "Full Stack & MERN Developer"),
                    react_1["default"].createElement("p", { className: "text-lg mb-4" },
                        "I m a ",
                        react_1["default"].createElement("span", { className: "text-[#fa5b0f] font-semibold" }, "MERN Stack Developer"),
                        " passionate about building responsive, dynamic, and user-friendly web applications."),
                    react_1["default"].createElement("div", { className: "mb-4" },
                        react_1["default"].createElement("p", { className: "text-sm uppercase tracking-widest text-slate-500 font-bold mb-2" }, "Expertise"),
                        react_1["default"].createElement("div", { className: "flex flex-wrap gap-2" }, constant_color_1.Expertise.map(function (tech) { return (react_1["default"].createElement("span", { key: tech, className: "px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-[#fa5b0f] hover:bg-[#fa5b0f] hover:text-slate-900 transition-colors duration-200" }, tech)); }))),
                    react_1["default"].createElement("p", { className: "pt-4 border-t border-slate-800 text-slate-400 text-base" },
                        "Currently pushing the boundaries of modern web applications as a ",
                        react_1["default"].createElement("span", { className: "text-[#fa5b0f] font-semibold" }, "Software Developer at BestPeers Infosystem"),
                        ".")))),
        react_1["default"].createElement("section", { className: "mb-2" },
            react_1["default"].createElement("h2", { className: "text-3xl font-bold border-b-2 border-[#fa5b0f] w-fit pb-2 mb-2" }, "Education"),
            react_1["default"].createElement(framer_motion_1.motion.div, { ref: ref, className: "relative max-w-5xl mx-auto p-6", initial: { opacity: 0, y: 50 }, animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }, transition: { duration: 1, ease: "easeOut" } }, inView && (react_1["default"].createElement("div", { className: "timeline relative" },
                react_1["default"].createElement("div", { className: "absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-[#fa5b0f]" }),
                react_1["default"].createElement("div", { className: "mb-12 flex justify-between items-center w-full" },
                    react_1["default"].createElement("div", { className: "w-5/12 text-right pr-6" },
                        react_1["default"].createElement("h3", { className: "text-2xl font-bold " + theme.curr_TEXT }, "Medi-Caps University Indore"),
                        react_1["default"].createElement("p", { className: "text-[#fa5b0f]" }, "Master of Computer Applications (MCA)"),
                        react_1["default"].createElement("time", { className: "block text-sm text-slate-400 mt-1" }, "2023 - 2025")),
                    react_1["default"].createElement("div", { className: "z-20 w-6 h-6 rounded-full bg-[#fa5b0f] border-4 border-white" }),
                    react_1["default"].createElement("div", { className: "w-5/12" })),
                react_1["default"].createElement("div", { className: "mb-12 flex justify-between items-center w-full flex-row-reverse" },
                    react_1["default"].createElement("div", { className: "w-5/12 text-left pl-6" },
                        react_1["default"].createElement("h3", { className: "text-2xl font-bold " + theme.curr_TEXT }, "Punamchand Gupta Vocational College Khandwa"),
                        react_1["default"].createElement("p", { className: "text-[#fa5b0f]" }, "Bachelor of Computer Applications (BCA)"),
                        react_1["default"].createElement("time", { className: "block text-sm text-slate-400 mt-1" }, "2019 - 2022")),
                    react_1["default"].createElement("div", { className: "z-20 w-6 h-6 rounded-full bg-[#fa5b0f] border-4 border-white" }),
                    react_1["default"].createElement("div", { className: "w-5/12" })))))),
        react_1["default"].createElement(Experience_1["default"], null)));
};
exports["default"] = Page;
