'use client';
"use strict";

exports.__esModule = true;

var link_1 = require("next/link");

var ThemeContext_1 = require("@/contexts/ThemeContext");

var constant_1 = require("@/utils/constant");

var constant_color_1 = require("@/contexts/constant.color");

var SidBar = function SidBar() {
  var _a = ThemeContext_1.useTheme(),
      theme = _a.theme,
      setTheme = _a.setTheme;

  var handleThemeChange = function handleThemeChange(themeName) {
    setTheme(themeName);
  };

  return React.createElement("div", {
    className: " " + theme.curr_BG + " transition-all duration-300 min-h-screen border-r border-white/10 flex flex-col shadow-right-lg"
  }, React.createElement("div", {
    className: "flex items-center  justify-center p-2 text-2xl font-bold tracking-tight border-b  " + theme.curr_TEXT + "  border-gray-100"
  }, React.createElement(link_1["default"], {
    href: "/"
  }, "Banti Patel")), React.createElement("nav", {
    className: "flex-1 px-10 py-6"
  }, React.createElement("ul", {
    className: "space-y-7"
  }, constant_1.SIDE_LINKS.map(function (item) {
    return React.createElement("li", {
      key: item.name,
      className: ''
    }, React.createElement(link_1["default"], {
      href: item.path,
      className: "flex items-center px-4 py-2  transition-all duration-200 group border-b border-gray-100"
    }, React.createElement("span", {
      className: "text-xl " + theme.curr_TEXT + " "
    }, React.createElement(item.icon, null)), React.createElement("span", {
      className: "ml-3 font-medium  " + theme.curr_TEXT
    }, item.name)));
  }), React.createElement("li", {
    className: "flex items-center justify-between px-4 py-3  transition-colors border-b border-gray-100"
  }, React.createElement("div", {
    className: "flex items-center justify-between gap-3"
  }), React.createElement("div", {
    className: 'space-x-2'
  }, constant_color_1.THEME_COLORS.map(function (item) {
    return React.createElement("span", {
      className: "mx-1 border px-2  rounded-4xl cursor-pointer " + item.curr_BG,
      onClick: function onClick() {
        return handleThemeChange(item.themeName);
      },
      key: item.themeName
    });
  }))))));
};

exports["default"] = SidBar;