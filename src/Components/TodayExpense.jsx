import { Button } from 'antd';
import React from 'react'
import { LuBarChart4 } from "react-icons/lu";
import { CiExport } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoPricetag } from "react-icons/io5";
import { TiUserAdd } from "react-icons/ti";


const TodayExpense = () => {

    const data = [
        {
            price: "$1k",
            name: "Total Expense",
            description: "+8% from yesterday",
            icon: <LuBarChart4  color="#fff"/>,
            bg: "#FFE2E5",
            iconbg: "#FA5A7D"
        },
        {
            price: "300",
            name: "Total Items",
            description: "+5% from yesterday",
            icon: <IoDocumentTextOutline  color="#fff"/>,
            bg: "#FFF4DE",
            iconbg: "#FF947A"
        },
        {
            price: "5",
            name: "Items Purchase",
            description: "+1,2% from yesterday",
            icon: <IoPricetag  color="#fff"/>,
            bg: "#DCFCE7",
            iconbg: "#3CD856"
        },
        {
            price: "8",
            name: "New Customers",
            description: "0,5% from yesterday",
            icon: <TiUserAdd  color="#fff"/>,
            bg: "#F3E8FF",
            iconbg: "#BF83FF"

        },
    ]
    return (
        <div className='expense-card'>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='card-head'>
                    <p>
                        Today’s Expense
                    </p>
                    <span>
                        Expense Summery
                    </span>
                </div>
                <div>
                    <Button icon={<CiExport />}>Export</Button>
                </div>
            </div>
            <div className='expense-card-list'>
                {data.map((item, index) => {
                    return (
                        <div key={index} className='expense-card-list-item' style={{ background: item.bg }}>
                            <div className='expense-card-list-item-icon my-2' style={{ background: item.iconbg }}>
                                {item.icon}
                            </div>
                            <div className='expense-card-list-item-price my-2'>
                                {item.price}
                            </div>
                            <div className='expense-card-list-item-text my-2'>
                                <p>
                                    {item.name}
                                </p>
                            </div>
                            <div className='expense-card-list-item-description'>
                                <Link>
                                    {item.description}
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TodayExpense