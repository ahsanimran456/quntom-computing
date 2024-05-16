import React from 'react'
import TodayExpense from '../Components/TodayExpense'
import VisitorInsights from '../Components/VisitorInsights'
import TotalRevenue from '../Components/TotalRevenue'
import CustomerSatisfaction from '../Components/CustomerSatisfaction'
import TargetvsReality from '../Components/TargetvsReality'
import TopProducts from '../Components/TopProducts'
import MappingbyCountry from '../Components/MappingbyCountry'
import Volume from '../Components/Volume'

const AdminDashboard = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8   mb-4 col-sm-12 top-card-1">
                    <TodayExpense />
                </div>
                <div className="col-lg-4 col-md-6 mb-4 col-sm-12 top-card-2">
                    <VisitorInsights />
                </div>
                <div className="col-lg-4 col-md-6 mb-4 col-sm-12">
                    <TotalRevenue />
                </div>
                <div className="col-lg-4 col-md-6 mb-4 col-sm-12">
                    <CustomerSatisfaction />
                </div>
                <div className="col-lg-4 col-md-6 mb-4 col-sm-12">
                    <TargetvsReality />
                </div>
                <div className="col-lg-4 col-md-6 mb-4 col-sm-12">
                    <TopProducts />
                </div>
                <div className="col-lg-4 col-md-6  mb-4 col-sm-12">
                    <MappingbyCountry />
                </div>
                <div className="col-lg-4 col-md-6  mb-4 col-sm-12">
                    <Volume />
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard