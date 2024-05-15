import React from 'react'
import TodayExpense from '../Components/TodayExpense'

const AdminDashboard = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <TodayExpense />
                </div>
                <div className="col-md-5">
                    <TodayExpense />
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard