import { Route, Routes, useNavigate } from "react-router-dom";
// import DashboardLayout from '../Layouts/DashboardLayout';
import React from "react";
import LeftSideBar from "../Components/LeftSideBar";
import Header from "../Components/Header";
// ----------------------------------------------------------------------

export default function Router() {
    return (
        <React.Fragment>
            <LeftSideBar />
            <Header />


        </React.Fragment>
    )
}
