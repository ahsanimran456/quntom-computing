import React from 'react'
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import Table from '../Pages/Home';
const DashboardLayout = () => {
    return (
        <div className="main-content">
            <Routes>
                <Route path="/*" element={<AdminDashboard />} />
                <Route path="/table" element={<Table />} />
            </Routes>
        </div>
    )
}

export default DashboardLayout