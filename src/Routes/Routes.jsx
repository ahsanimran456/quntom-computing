import { Route, Routes, useNavigate } from "react-router-dom";
// import DashboardLayout from '../Layouts/DashboardLayout';
import React from "react";
import LeftSideBar from "../Components/LeftSideBar";
import Header from "../Components/Header";
import DashboardLayout from "../Layouts/DashboardLayout";
// ----------------------------------------------------------------------

export default function Router() {
    return (
        <React.Fragment>
            <Header />
            <LeftSideBar />
            <DashboardLayout />
        </React.Fragment>
    )
}
