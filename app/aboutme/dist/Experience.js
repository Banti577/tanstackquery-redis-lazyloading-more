"use strict";
exports.__esModule = true;
var ThemeContext_1 = require("@/contexts/ThemeContext");
var framer_motion_1 = require("framer-motion");
var react_intersection_observer_1 = require("react-intersection-observer");
var Experience = function () {
    var theme = ThemeContext_1.useTheme().theme;
    var _a = react_intersection_observer_1.useInView({
        threshold: 0.6,
        triggerOnce: true
    }), ref = _a.ref, inView = _a.inView;
    return (React.createElement("div", null,
        React.createElement("h2", { className: "text-2xl border-b-2 border-[#fa5b0f] w-fit" }, "Experience"),
        React.createElement("h3", { className: 'border-b-2 border-[#fa5b0f] w-fit px-3 py-1' }),
        React.createElement("div", { className: 'lazy-content-container' },
            React.createElement(framer_motion_1.motion.div, { ref: ref, className: ' p-1', initial: { opacity: 0, x: -300 }, animate: inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 300 }, transition: { duration: 1, ease: "easeOut" } }, inView && (React.createElement("div", { className: "max-w-5xl mx-auto p-6 overflow-hidden" },
                React.createElement("div", { className: "relative wrap  p-10 h-full" },
                    React.createElement("div", { className: "absolute border-red-500 h-full border", style: { left: '50%' } }),
                    React.createElement("div", { className: "mb-8 flex justify-between items-center w-full" },
                        React.createElement("div", { className: "order-1 w-5/12" }),
                        React.createElement("div", { className: "z-20 flex items-center order-1 bg-red-500 shadow-xl w-4 h-4 rounded-full ring-4 ring-white" }),
                        React.createElement("div", { className: "border rounded order-1 w-5/12 px-6 py-4 text-right" },
                            React.createElement("time", { className: "mb-1 text-sm font-semibold text-gray-200" }, "2023 - 2025"),
                            React.createElement("h3", { className: "text-2xl font-bold  " + theme.curr_TEXT }, "Bestpeers Infosystem, Indore"),
                            React.createElement("p", { className: "text-[#fa5b0f]" }, "Trainee Software Engineer"),
                            React.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nisi dolorem mollitia. Vero, tempore, tempora consequatur qui eius ab harum, provident voluptas est debitis quas optio molestias? Saepe, sint laborum."))),
                    React.createElement("div", { className: "mb-8 flex justify-between flex-row-reverse items-center w-full" },
                        React.createElement("div", { className: "order-1 w-5/12" }),
                        React.createElement("div", { className: "z-20 flex items-center order-1 bg-red-500 shadow-xl w-4 h-4 rounded-full ring-4 ring-white" }),
                        React.createElement("div", { className: "border order-1 w-5/12 px-6 py-4 text-left" },
                            React.createElement("time", { className: "mb-1 text-sm font-semibold text-gray-200" }, "2025 - 2025"),
                            React.createElement("h3", { className: "text-2xl font-bold  " + theme.curr_TEXT }, "Ram Antivirus Pvt. Ltd."),
                            React.createElement("p", { className: "text-[#fa5b0f]" }, "internship"),
                            React.createElement("p", null, "Created dynamic & intractive user interfaces,"))))))))));
};
exports["default"] = Experience;
