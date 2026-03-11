'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var browser_1 = require("@emailjs/browser");
var react_1 = require("react");
var ThemeContext_1 = require("@/contexts/ThemeContext");
var Contact = function () {
    var theme = ThemeContext_1.useTheme().theme;
    var _a = react_1.useState({
        name: '',
        email: '',
        message: ''
    }), formData = _a[0], setFormData = _a[1];
    var form = react_1.useRef(null);
    var handleChange = function (e) {
        var _a;
        var _b = e.target, value = _b.value, name = _b.name;
        setFormData(__assign(__assign({}, formData), (_a = {}, _a[name] = value, _a)));
    };
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    e.preventDefault();
                    return [4 /*yield*/, fetch('/api/contact', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(formData)
                        })];
                case 1:
                    response = _d.sent();
                    if (response.status == 201) {
                        alert('Data Added We will connect shortly');
                    }
                    if (form.current) {
                        browser_1["default"].sendForm((_a = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID) !== null && _a !== void 0 ? _a : '', (_b = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID) !== null && _b !== void 0 ? _b : '', form.current, {
                            publicKey: (_c = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) !== null && _c !== void 0 ? _c : ''
                        })
                            .then(function () {
                            alert('Message sent successfully!');
                        }, function (error) {
                            console.error('FAILED...', error.text);
                            alert('Failed to send message, please try again later.');
                        });
                    }
                    setFormData({
                        name: '',
                        email: '',
                        message: ''
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("section", { className: " flex items-center justify-center p-4" },
        React.createElement("div", { className: " " + theme.curr_BG + " w-[40%] p-6 border border-gray-200 rounded-lg shadow-sm" },
            React.createElement("div", { className: "space-y-4" },
                React.createElement("div", null,
                    React.createElement("h2", { className: "text-sm font-semibold text-gray-500 uppercase tracking-wider" }, "Name"),
                    React.createElement("p", { className: "text-lg font-medium " + theme.curr_TEXT }, "Banti Patel")),
                React.createElement("div", null,
                    React.createElement("h2", { className: "text-sm font-semibold text-gray-500 uppercase tracking-wider" }, "Mobile"),
                    React.createElement("p", { className: "text-lg font-medium " + theme.curr_TEXT }, "+91 9770606527")),
                React.createElement("div", null,
                    React.createElement("h2", { className: "text-sm font-semibold text-gray-500 uppercase tracking-wider" }, "Address"),
                    React.createElement("p", { className: "text-lg font-medium " + theme.curr_TEXT }, "Indore , MP")),
                React.createElement("div", null,
                    React.createElement("h2", { className: "text-sm font-semibold text-gray-500 uppercase tracking-wider" }, "Email"),
                    React.createElement("a", { href: "mailto:alex@example.com", className: "text-blue-600 hover:underline" }, "patelvn2002@gmail.com")))),
        React.createElement("div", { className: " shadow container mx-auto max-w-md  " + theme.curr_BG + " rounded-lg p-6 md:p-8" },
            React.createElement("div", { className: "text-center mb-6" },
                React.createElement("h1", { className: theme.curr_TEXT + " text-2xl font-semibold" }, "Contact Us"),
                React.createElement("p", { className: " " + theme.curr_TEXT + " mt-2" }, "Fill out the form below to send us a message.")),
            React.createElement("form", { ref: form, onSubmit: handleSubmit, className: "space-y-4" },
                React.createElement("div", null,
                    React.createElement("label", { htmlFor: "name", className: " " + theme.curr_TEXT + " block text-sm font-medium text-gray-700" }, "Full Name"),
                    React.createElement("input", { type: "text", id: "name", name: "name", value: formData.name, onChange: handleChange, placeholder: "Your Name", required: true, className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none" })),
                React.createElement("div", null,
                    React.createElement("label", { htmlFor: "email", className: " " + theme.curr_TEXT + " block text-sm font-medium " }, "Email Address"),
                    React.createElement("input", { type: "email", id: "email", name: "email", value: formData.email, onChange: handleChange, placeholder: "you@example.com", required: true, className: "mt-1 block w-full px-3 py-2 border  rounded-md shadow-sm focus:outline-none" })),
                React.createElement("div", null,
                    React.createElement("label", { htmlFor: "message", className: theme.curr_TEXT + "  block text-sm font-medium text-gray-700" }, "Message"),
                    React.createElement("textarea", { id: "message", name: "message", value: formData.message, onChange: function (e) { return handleChange(e); }, placeholder: "How can we help you?", required: true, className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md  focus:outline-none " })),
                React.createElement("div", null,
                    React.createElement("button", { type: "submit", className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 cursor-pointer" }, "Send Message"))),
            React.createElement("div", { className: "mt-6 text-center text-xs text-gray-500" }))));
};
exports["default"] = Contact;
