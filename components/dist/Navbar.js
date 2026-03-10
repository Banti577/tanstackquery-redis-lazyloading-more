"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var Navbar = function () {
    return (react_1["default"].createElement("div", { className: 'flex justify-around items-center bg-[rgb(27_27_27)] text-[rgb(212_212_212)] p-2' },
        react_1["default"].createElement("div", { className: "logo text-2xl" }, "BP"),
        react_1["default"].createElement("div", { className: "menu" },
            react_1["default"].createElement("ul", { className: 'flex' },
                react_1["default"].createElement(link_1["default"], { href: '/' },
                    react_1["default"].createElement("li", { className: 'mx-3' }, "Home")),
                react_1["default"].createElement(link_1["default"], { href: '/about' },
                    react_1["default"].createElement("li", { className: 'mx-3' }, "About")),
                react_1["default"].createElement("li", { className: 'mx-3' }, "Experience"),
                react_1["default"].createElement(link_1["default"], { href: '/skill' },
                    react_1["default"].createElement("li", { className: 'mx-3' }, "Skills")),
                react_1["default"].createElement("li", { className: 'mx-3' }, "Projects"),
                react_1["default"].createElement("li", { className: 'mx-3' }, "theme change"))),
        react_1["default"].createElement("div", { className: "media flex list-none" },
            react_1["default"].createElement("li", { className: 'mx-3' }, "insta"),
            react_1["default"].createElement("li", { className: 'mx-3' }, "face"),
            react_1["default"].createElement("li", { className: 'mx-3' }, "linked"),
            react_1["default"].createElement("li", { className: 'mx-3' }, "github"))));
};
exports["default"] = Navbar;
