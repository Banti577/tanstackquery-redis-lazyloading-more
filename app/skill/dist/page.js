'use client';
"use strict";
exports.__esModule = true;
var react_query_1 = require("@tanstack/react-query");
var useFetchApi_1 = require("@/hooks/useFetchApi");
var Loader_1 = require("@/components/Loader");
var Skill = function () {
    var _a = react_query_1.useQuery({
        queryKey: ['product'],
        queryFn: useFetchApi_1.fetchPosts,
        staleTime: 1000 * 60 * 5
    }), data = _a.data, isLoading = _a.isLoading, error = _a.error;
    if (isLoading)
        return React.createElement(Loader_1["default"], null);
    if (error)
        return React.createElement("p", null, error.message);
    console.log('product is ', data);
    return (React.createElement("div", null,
        React.createElement("h2", { className: 'bg-red-500' }, "Skill"),
        React.createElement("div", null,
            React.createElement("ul", null, data === null || data === void 0 ? void 0 : data.products.map(function (post) { return (React.createElement("li", { key: post.id }, post.title)); })))));
};
exports["default"] = Skill;
