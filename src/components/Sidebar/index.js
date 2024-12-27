import Button from '@mui/material/Button';
import { BiSolidDashboard } from "react-icons/bi";
import { FaAngleRight } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { HiOutlineDuplicate } from "react-icons/hi";
import { FaMessage } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdHelpCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const Sidebar = ()=>{

    return(
        <>
            <div className="sidebar">
                <ul>
                    <li>
                        <Link to="/">
                            <Button className='w-100'>
                                <span className='icon'><BiSolidDashboard/></span>Dashboard<span className='arrow'></span>
                            </Button>
                        </Link> 
                    </li>
                    <li>
                        <Button className='w-100'>
                            <span className='icon'><FaUserCircle/></span>User<span className='arrow'><FaAngleRight/></span>
                        </Button>
                        <div className='submenuWrapper'>
                            <ul className='submenu'>
                                <li><Link to="#">Admin</Link></li>
                                <li><Link to="#">Ordinary User</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Button className='w-100'>
                            <span className='icon'><MdCategory/></span>Products<span className='arrow'><FaAngleRight/></span>
                        </Button>
                        <div className='submenuWrapper'>
                            <ul className='submenu'>
                                <li><Link to="#">Product List</Link></li>
                                <li><Link to="#">Product View</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Button className='w-100'>
                            <span className='icon'><HiOutlineDuplicate/></span>Category<span className='arrow'></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                            <span className='icon'><FaMessage /></span>Messages<span className='arrow'><FaAngleRight/></span>
                        </Button>
                        <div className='submenuWrapper'>
                            <ul className='submenu'>
                                <li><Link to="#">Admin</Link></li>
                                <li><Link to="#">User</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Button className='w-100'>
                            <span className='icon'><IoIosNotifications/></span>Notifications<span className='arrow'><FaAngleRight/></span>
                        </Button>
                        <div className='submenuWrapper'>
                            <ul className='submenu'>
                                <li><Link to="#">Important</Link></li>
                                <li><Link to="#">General</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Button className='w-100'>
                            <span className='icon'><IoSettingsSharp/></span>Settings<span className='arrow'></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                            <span className='icon'><IoMdHelpCircle /></span>Help<span className='arrow'></span>
                        </Button>
                    </li>


                </ul>
            </div>
        </>
    )
}

export default Sidebar; 