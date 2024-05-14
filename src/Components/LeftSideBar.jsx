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
import { Button } from '@mui/material';
const LeftSideBar = () => {
    const data = [
        {
            name: "Dashboard",
            icon: <MdDashboard />

        },
        {
            name: "Leaderboard",
            icon: <FiBarChart2 />
        },
        {
            name: "order",
            icon: <AiOutlineShoppingCart />
        },
        {
            name: "Products",
            icon: <IoBagOutline />
        },
        {
            name: "Sales Report",
            icon: <BsGraphUp />
        },
        {
            name: "Messages",
            icon: <RiMessage2Line />
        },
        {
            name: "Messages",
            icon: <RiMessage2Line />
        },
        {
            name: "Settings",
            icon: <IoSettingsOutline />
        },
        {
            name: "Sign Out",
            icon: <PiSignOutThin />
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
                            <div className='menu-item' key={index}>
                                {item.icon}
                                <span>{item.name}</span>
                            </div>
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
                        <Button variant="contained" color="success" disableElevation style={{ backgroundColor: 'white', color: "#5D5FEF" }}>
                            Download
                        </Button>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default LeftSideBar