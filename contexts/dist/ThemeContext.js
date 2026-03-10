'use client';
"use strict";
exports.__esModule = true;
exports.useTheme = void 0;
var react_1 = require("react");
var constant_color_1 = require("./constant.color");
var themeContext = react_1.createContext();
exports.useTheme = function () { return react_1.useContext(themeContext); };
var ThemeContext = function (_a) {
    var children = _a.children;
    var ctheme = 'dark';
    var _b = react_1.useState(ctheme), theme = _b[0], setTheme = _b[1];
    var activeTheme = react_1.useMemo(function () {
        return constant_color_1.THEME_COLORS.find(function (t) { return t.themeName === theme; }) || constant_color_1.THEME_COLORS;
    }, [theme]);
    var value = {
        theme: activeTheme,
        setTheme: setTheme,
        themeName: theme
    };
    return (React.createElement(themeContext.Provider, { value: value }, children));
};
exports["default"] = ThemeContext;
