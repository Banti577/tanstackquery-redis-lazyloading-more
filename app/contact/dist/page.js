'use client';
"use strict";
exports.__esModule = true;
var ThemeContext_1 = require("@/contexts/ThemeContext");
var react_1 = require("react");
var Contact = function () {
    var theme = ThemeContext_1.useTheme().theme;
    var _a = react_1.useState({
        name: '',
        email: '',
        message: ''
    }), formData = _a[0], setFormData = _a[1];
    var handleChange = function () {
        // setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    var handleSubmit = function () {
        // e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Message sent!');
        setFormData({ name: '', email: '', message: '' });
    };
    return (React.createElement("section", { className: " flex items-center justify-center p-4" },
        React.createElement("div", { className: " " + theme.curr_BG + " w-[40%] p-6 border border-gray-200 rounded-lg shadow-sm" },
            React.createElement("div", { className: "space-y-4" },
                React.createElement("div", null,
                    React.createElement("h2", { className: "text-sm font-semibold text-gray-500 uppercase tracking-wider" }, "Name"),
                    React.createElement("p", { className: "text-lg font-medium text-gray-900" }, "Banti Patel")),
                React.createElement("div", null,
                    React.createElement("h2", { className: "text-sm font-semibold text-gray-500 uppercase tracking-wider" }, "Mobile"),
                    React.createElement("p", { className: "text-gray-700" }, "+91 9770606527")),
                React.createElement("div", null,
                    React.createElement("h2", { className: "text-sm font-semibold text-gray-500 uppercase tracking-wider" }, "Address"),
                    React.createElement("p", { className: "text-gray-700" }, "Indore , MP")),
                React.createElement("div", null,
                    React.createElement("h2", { className: "text-sm font-semibold text-gray-500 uppercase tracking-wider" }, "Email"),
                    React.createElement("a", { href: "mailto:alex@example.com", className: "text-blue-600 hover:underline" }, "patelvn2002@gmail.com")))),
        React.createElement("div", { className: " shadow container mx-auto max-w-md  " + theme.curr_BG + " rounded-lg p-6 md:p-8" },
            React.createElement("div", { className: "text-center mb-6" },
                React.createElement("h1", { className: theme.curr_TEXT + " text-2xl font-semibold" }, "Contact Us"),
                React.createElement("p", { className: " " + theme.curr_TEXT + " mt-2" }, "Fill out the form below to send us a message.")),
            React.createElement("form", { onSubmit: handleSubmit, className: "space-y-4" },
                React.createElement("div", null,
                    React.createElement("label", { htmlFor: "name", className: " " + theme.curr_TEXT + " block text-sm font-medium text-gray-700" }, "Full Name"),
                    React.createElement("input", { type: "text", id: "name", name: "name", value: formData.name, onChange: handleChange, placeholder: "Your Name", required: true, className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none" })),
                React.createElement("div", null,
                    React.createElement("label", { htmlFor: "email", className: " " + theme.curr_TEXT + " block text-sm font-medium " }, "Email Address"),
                    React.createElement("input", { type: "email", id: "email", name: "email", value: formData.email, onChange: handleChange, placeholder: "you@example.com", required: true, className: "mt-1 block w-full px-3 py-2 border  rounded-md shadow-sm focus:outline-none" })),
                React.createElement("div", null,
                    React.createElement("label", { htmlFor: "message", className: theme.curr_TEXT + "  block text-sm font-medium text-gray-700" }, "Message"),
                    React.createElement("textarea", { id: "message", name: "message", value: formData.message, onChange: handleChange, placeholder: "How can we help you?", required: true, className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md  focus:outline-none " })),
                React.createElement("div", null,
                    React.createElement("button", { type: "submit", className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 cursor-pointer" }, "Send Message"))),
            React.createElement("div", { className: "mt-6 text-center text-xs text-gray-500" }))));
};
exports["default"] = Contact;
