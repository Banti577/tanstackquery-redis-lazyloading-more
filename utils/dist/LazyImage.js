"use client";
"use strict";
exports.__esModule = true;
var Loader_1 = require("@/components/Loader");
var react_1 = require("react");
function LazyImage(_a) {
    var src = _a.src, alt = _a.alt, _b = _a.width, width = _b === void 0 ? 200 : _b, _c = _a.height, height = _c === void 0 ? 200 : _c, className = _a.className;
    var ref = react_1.useRef(null);
    var _d = react_1.useState(false), visible = _d[0], setVisible = _d[1];
    react_1.useEffect(function () {
        var el = ref.current;
        if (!el)
            return;
        var observer = new IntersectionObserver(function (_a) {
            var entry = _a[0];
            if (entry.isIntersecting) {
                setVisible(true);
                observer.unobserve(el);
            }
        }, { threshold: 0 });
        observer.observe(el);
        return function () { return observer.disconnect(); };
    }, []);
    return (React.createElement(react_1.Suspense, { fallback: React.createElement(Loader_1["default"], null) },
        React.createElement("div", { ref: ref, className: className, style: {
                width: width,
                height: height
            } }, visible && React.createElement("img", { className: "object-cover h-full w-full", src: src, alt: alt, width: width, height: height }))));
}
exports["default"] = LazyImage;
