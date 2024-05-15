import React from 'react'
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
const DashboardLayout = () => {
    return (
        <div className="main-content">
            <Routes>
                <Route path="/*" element={<AdminDashboard />} />
                {/* <Route path="/leads/:active" element={<AllLead />} />
            <Route path="/lead/edit/:id" element={<EditLead />} />
            <Route path="/createlead" element={<CreateLead />} />
            <Route path="/register" element={<Register />} /> */}
            </Routes>
        </div>
    )
}

export default DashboardLayout