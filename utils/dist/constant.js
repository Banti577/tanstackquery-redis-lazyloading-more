"use strict";
exports.__esModule = true;
exports.SIDE_LINKS = void 0;
var io5_1 = require("react-icons/io5");
var md_1 = require("react-icons/md");
var hi_1 = require("react-icons/hi");
var vsc_1 = require("react-icons/vsc");
var io_1 = require("react-icons/io");
exports.SIDE_LINKS = [
    {
        name: 'Home',
        path: '/',
        icon: io5_1.IoHome
    },
    {
        name: 'About',
        path: '/aboutme',
        icon: md_1.MdOutlinePerson2
    },
    {
        name: 'Experience',
        path: '/skill',
        icon: hi_1.HiOutlineDesktopComputer
    },
    {
        name: 'Project',
        path: '',
        icon: vsc_1.VscGithubProject
    },
    {
        name: 'Contact',
        path: '/contact',
        icon: io_1.IoIosContact
    },
    {
        name: 'Lazy Loading',
        path: '/about',
        icon: io_1.IoIosContact
    },
];
