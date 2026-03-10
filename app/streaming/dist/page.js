'use client';
"use strict";
exports.__esModule = true;
function Home() {
    return (React.createElement("div", { className: "p-4 flex" },
        React.createElement("div", { className: "w-[70%]" },
            React.createElement("h2", { className: "text-2xl mb-2" }, "MP4 Progressive Streaming"),
            React.createElement("video", { controls: true, width: "720", src: "/api/streamvideo" })),
        React.createElement("div", { className: "w-[30%] ml-4 border p-2" }, "Cart / Sidebar")));
}
exports["default"] = Home;
