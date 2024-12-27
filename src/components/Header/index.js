
import React,{useState} from 'react';
import { Link }  from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import Search from "../Search";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoIosCart } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import foto from "../../assets/images/jay.jpg";




import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';


const Header = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpennotificationDrop, setisOpennotificationDrop] = useState(false);
    const openMyAcc = Boolean(anchorEl);
    const openNotifications = Boolean(isOpennotificationDrop);

    const handleOpenMyAccDrop = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMyAccDrop = () => {
        setAnchorEl(null);
    };

    // const handleOpenotificationsDrop() => {
    //     setisOpennotificationDrop(true);
    // }

    // const handleClosenotificationsDrop() => {
    //     setisOpennotificationDrop(false);
    // }

    return (
        <>
            <header className="d-flex align-items-center">
                <div className="container-fluid w-100">
                    <div className="row d-flex align-items-center w-100">
                        {/* Logo Wrapper */}
                        <div className="col-sm-2 part1">
                            <Link to={'/'} className="d-flex align-items-center logo">
                                <img src={logo}/>
                                <span className="ml-2">A Company</span>
                            </Link>
                        </div>


                        <div className="col-sm-3 d-flex align-items-center part2 pl-4">
                            <Button className="rounded-circle mr-3"><MdMenuOpen /></Button>
                            <Search/>
                        </div>

                        <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
                        <Button className="rounded-circle mr-3"><MdLightMode /></Button>
                        <Button className="rounded-circle mr-3"><IoIosCart /></Button>


                        <Button className="rounded-circle mr-3"><FaBell /></Button>
                        {/* <Menu
                            anchorEl={isOpennotificationDrop}
                            className='notifications'
                            id="notifications"
                            open={openNotifications}
                            onClose={handleClosenotificationsDrop}
                            onClick={handleClosenotificationsDrop}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>

                            <MenuItem onClick={handleCloseMyAccDrop }>
                            <ListItemIcon>
                                <PersonAdd fontSize="small" />
                            </ListItemIcon>
                            My Account
                            </MenuItem>
                            <MenuItem onClick={handleCloseMyAccDrop }>
                            <ListItemIcon>
                                <Settings fontSize="small" />
                            </ListItemIcon>
                            Settings
                            </MenuItem>
                            <MenuItem onClick={handleCloseMyAccDrop }>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            Logout
                            </MenuItem>
                        </Menu> */}





                        <div className="myAccWrapper">
                        <Button className="myAcc d-flex align-items-center"
                        onClick={handleOpenMyAccDrop}
                        >
                            <div className="userImg">
                                <span className="rounded-circle">
                                    <img src={foto}/>
                                </span>
                            </div>

                            <div className="userInfo">
                                <h4>Park Jay</h4>
                                <p className="mb-0">@jay_park</p>
                            </div>



                        </Button>

                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={openMyAcc}
                            onClose={handleCloseMyAccDrop}
                            onClick={handleCloseMyAccDrop}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>

                            <MenuItem onClick={handleCloseMyAccDrop }>
                            <ListItemIcon>
                                <PersonAdd fontSize="small" />
                            </ListItemIcon>
                            My Account
                            </MenuItem>
                            <MenuItem onClick={handleCloseMyAccDrop }>
                            <ListItemIcon>
                                <Settings fontSize="small" />
                            </ListItemIcon>
                            Settings
                            </MenuItem>
                            <MenuItem onClick={handleCloseMyAccDrop }>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            Logout
                            </MenuItem>
                        </Menu>

                        </div>

                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header; 