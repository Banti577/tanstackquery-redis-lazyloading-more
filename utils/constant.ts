import { IoHome } from "react-icons/io5";
import { MdOutlinePerson2 } from "react-icons/md";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { VscGithubProject } from "react-icons/vsc";
import { IoIosContact } from "react-icons/io";

export const SIDE_LINKS =[
    {
        name: 'Home',
        path:'/',
        icon: IoHome,
    },
      {
        name: 'About',
        path:'/aboutme',
        icon: MdOutlinePerson2,
    },
          {
        name: 'Experience',
        path:'/skill',
        icon: HiOutlineDesktopComputer,
    },
      {
        name: 'Project',
        path:'',
        icon: VscGithubProject ,
    },
      {
        name: 'Contact',
        path:'/contact',
        icon: IoIosContact ,
    },
      {
        name: 'Lazy Loading',
        path:'/about',
        icon: IoIosContact ,
    },
    
    
]