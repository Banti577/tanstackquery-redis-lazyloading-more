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
    return (react_1["default"].createElement("div", { className: "rounded transition-all duration-300 " + theme.curr_TEXT + " " + theme.curr_BG + " p-2  overflow-hidden" },
        react_1["default"].createElement("h2", { className: "text-2xl border-b-2 border-[#fa5b0f] w-fit" }, "About Me"),
        react_1["default"].createElement("h3", { className: 'border-b-2 border-[#fa5b0f] w-fit px-3 py-1' }),
        react_1["default"].createElement("div", { className: 'flex justify-around lazy-content-container overflow-hidden' },
            react_1["default"].createElement(framer_motion_1.motion.div, { className: 'm-5 p-1 ', initial: { opacity: 0, y: -300 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1, ease: "easeOut" } },
                react_1["default"].createElement(react_1.Suspense, { fallback: react_1["default"].createElement("div", { className: "w-50 h-50 bg-gray-100 animate-pulse" }) },
                    react_1["default"].createElement(LazyImage, { src: 'https://thumbs.dreamstime.com/b/ai-brain-409496331.jpg', width: 400, height: 300, alt: "Profile Picture", className: "rounded-lg" }))),
            react_1["default"].createElement(framer_motion_1.motion.div, { className: 'max-w-md m-5 p-1 rounded', initial: { opacity: 0, x: 300 }, animate: { opacity: 1, x: 0 }, transition: { duration: 1, ease: "easeOut" } },
                react_1["default"].createElement("div", { className: theme.curr_BG + " max-w-2xl mx-auto p-8  rounded-3xl shadow-2xl border border-slate-800 " + theme.curr_TEXT },
                    react_1["default"].createElement("div", { className: "mb-6 border-b border-slate-800 pb-6" },
                        react_1["default"].createElement("h2", { className: 'text-[#fa5b0f] text-4xl font-extrabold tracking-tight mb-2' }, "Banti Patel"),
                        react_1["default"].createElement("p", { className: "text-xl font-medium text-slate-100 italic" }, "Full Stack & MERN Developer")),
                    react_1["default"].createElement("div", { className: "space-y-4 text-lg leading-relaxed" },
                        react_1["default"].createElement("p", null,
                            "I'm a ",
                            react_1["default"].createElement("span", { className: "text-[#fa5b0f] font-semibold" }, "MERN Stack Developer"),
                            " passionate about building dynamic, responsive, and user-friendly web applications."),
                        react_1["default"].createElement("div", { className: "pt-2" },
                            react_1["default"].createElement("p", { className: "text-sm uppercase tracking-widest text-slate-500 font-bold mb-3" }, "Expertise"),
                            react_1["default"].createElement("div", { className: "flex flex-wrap gap-2" }, constant_color_1.Expertise.map(function (tech) { return (react_1["default"].createElement("span", { key: tech, className: "px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-[#fa5b0f]" }, tech)); }))),
                        react_1["default"].createElement("p", { className: theme.curr_TEXT + " pt-4 border-t border-slate-800 text-slate-400 text-base" },
                            "Currently pushing the boundaries of modern web applications as a ",
                            react_1["default"].createElement("span", { className: "text-[#fa5b0f]" }, "Software Developer at BestPeers Infosystem"),
                            "."))))),
        react_1["default"].createElement("div", { className: 'lazy-content-container' },
            react_1["default"].createElement("h2", { className: "text-2xl border-b-2 border-[#fa5b0f] w-fit" }, "Education"),
            react_1["default"].createElement("h3", { className: 'border-b-2 border-[#fa5b0f] w-fit px-3 py-1' }),
            react_1["default"].createElement(framer_motion_1.motion.div, { ref: ref, className: 'm-5 p-1', initial: { opacity: 0, x: -300 }, animate: inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -300 }, transition: { duration: 1, ease: "easeOut" } }, inView && (react_1["default"].createElement("div", { className: "max-w-5xl mx-auto p-6" },
                react_1["default"].createElement("div", { className: "relative wrap overflow-hidden p-10 h-full" },
                    react_1["default"].createElement("div", { className: "absolute border-red-500 h-full border", style: { left: '50%' } }),
                    react_1["default"].createElement("div", { className: "mb-8 flex justify-between items-center w-full" },
                        react_1["default"].createElement("div", { className: "order-1 w-5/12" }),
                        react_1["default"].createElement("div", { className: "z-20 flex items-center order-1 bg-red-500 shadow-xl w-4 h-4 rounded-full ring-4 ring-white" }),
                        react_1["default"].createElement("div", { className: "order-1 w-5/12 px-6 py-4 text-right" },
                            react_1["default"].createElement("time", { className: "mb-1 text-sm font-semibold text-gray-200" }, "2023 - 2025"),
                            react_1["default"].createElement("h3", { className: "text-2xl font-bold  " + theme.curr_TEXT }, "Medi-Caps University Indore"),
                            react_1["default"].createElement("p", { className: "text-[#fa5b0f]" }, "Master s of Computer Applications (MCA)"))),
                    react_1["default"].createElement("div", { className: "mb-8 flex justify-between flex-row-reverse items-center w-full" },
                        react_1["default"].createElement("div", { className: "order-1 w-5/12" }),
                        react_1["default"].createElement("div", { className: "z-20 flex items-center order-1 bg-red-500 shadow-xl w-4 h-4 rounded-full ring-4 ring-white" }),
                        react_1["default"].createElement("div", { className: "order-1 w-5/12 px-6 py-4 text-left" },
                            react_1["default"].createElement("time", { className: "mb-1 text-sm font-semibold text-gray-200" }, "2019 - 2022"),
                            react_1["default"].createElement("h3", { className: "text-2xl font-bold  " + theme.curr_TEXT }, "Punamchand Gupta Vocational College Khandwa"),
                            react_1["default"].createElement("p", { className: "text-[#fa5b0f]" }, "Bachelor of Computer Applications (BCA)")))))))),
        react_1["default"].createElement(Experience_1["default"], null)));
};
exports["default"] = Page;
