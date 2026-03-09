'use client';
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var navigation_1 = require("next/navigation");
var constant_1 = require("@/utils/constant");
var SidBar = function () {
    var pathname = navigation_1.usePathname();
    return (React.createElement("div", { className: " bg-[#1a1a1a] min-h-screen border-r border-white/10 flex flex-col" },
        React.createElement("div", { className: " flex items-center  justify-center p-2 text-xl font-bold tracking-tight text-white border-b border-gray-100" },
            React.createElement(link_1["default"], { href: "/" }, "Banti Patel")),
        React.createElement("nav", { className: "flex-1 px-10 py-6" },
            React.createElement("ul", { className: "space-y-4" }, constant_1.SIDE_LINKS.map(function (item) {
                var isActive = pathname === item.path;
                return (React.createElement("li", { key: item.name, className: 'border-b border-gray-100' },
                    React.createElement(link_1["default"], { href: item.path, className: "flex items-center px-4 py-3 rounded-lg transition-all duration-200 group " + (isActive
                            ? 'text-pink-500'
                            : 'text-gray-400 hover:bg-white/5 hover:text-white') },
                        React.createElement("span", { className: "text-xl " + (isActive ? 'text-white' : 'group-hover:text-white') },
                            React.createElement(item.icon, null)),
                        React.createElement("span", { className: "ml-3 font-medium" }, item.name))));
            })))));
};
exports["default"] = SidBar;
