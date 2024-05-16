import React from 'react'
import { IoBagOutline } from "react-icons/io5";
import { BsGraphUp } from "react-icons/bs";
import { RiMessage2Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { PiSignOutThin } from "react-icons/pi";
import { MdDashboard } from "react-icons/md";
import { FiBarChart2 } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoLogoSlack } from "react-icons/io";
import { Link } from 'react-router-dom';
import { Button } from 'antd';
// import { Button } from '@mui/material';
const LeftSideBar = () => {
    const data = [
        {
            name: "Dashboard",
            icon: <MdDashboard />,
            route: "/",
            active: true
        },
        {
            name: "Leaderboard",
            icon: <FiBarChart2 />,
            route: "/table",
            active: false
        },
        {
            name: "order",
            icon: <AiOutlineShoppingCart />,
            route: "/table",
            active: false
        },
        {
            name: "Products",
            icon: <IoBagOutline />,
            route: "/table",
            active: false
        },
        {
            name: "Sales Report",
            icon: <BsGraphUp />,
            route: "/table",
            active: false
        },
        {
            name: "Messages",
            icon: <RiMessage2Line />,
            route: "/table",
            active: false
        },
        {
            name: "Messages",
            icon: <RiMessage2Line />,
            route: "/table",
            active: false
        },
        {
            name: "Settings",
            icon: <IoSettingsOutline />,
            route: "/table",
            active: false
        },
        {
            name: "Sign Out",
            icon: <PiSignOutThin />,
            route: "/table",
            active: false
        },
    ]
    return (
        <div className='left-sidebar-container'>
            <div className='left-sidebar'>
                <div className='logo-container'>
                    <div className='logo-bg'>
                        <IoLogoSlack color='#fff' />
                    </div>
                    <h4 className='m-0 p-0'>
                        Amounex
                    </h4>
                </div>
                <div className='menu-container'>
                    {data.map((item, index) => {
                        return (
                            <Link to={item.route} key={index} >
                                <div className='menu-item' key={index} style={{ background: item.active && "#5D5FEF" ,color: item.active && "#fff" }}>
                                    {item.icon}
                                    <span>{item.name}</span>
                                </div>
                            </Link>
                        )
                    })}
                </div>
                <div className="menu-footer">
                    <div className='menu-footer-cover'>
                        <h3>
                            Amounex
                        </h3>
                        <span >
                            Get access to all
                        </span>
                        <span className='mb-4'>
                            features on playstore
                        </span>
                        <Button style={{ color: '#5D5FEF', fontWeight: 600 }}>Download</Button>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default LeftSideBar