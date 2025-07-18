import React from "react";
import { Routes, Route} from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import Dashboard from "../features/dashboard/pages/dashboard.jsx";
// import MilkCollection from "../pages/MilkCollection";
// import Farmers from "../pages/Farmers";
// import RateChart from "../pages/RateChart";
// import Billing from "../pages/Billing";
// import Login from "../pages/Login";
import MilkCollection from "../features/milkCollection/pages/AddMilkEntry.jsx";
import FarmerList from "../features/farmers/pages/FarmerList.jsx";
import AddEditFarmer from "../features/farmers/pages/AddEditFarmer.jsx";


export default function AppRoutes() {
    return (
        <Routes>
           {/* <Route path="/login" element={<Login />} /> */}
            <Route element={<AdminLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/milk-collection" element={<MilkCollection />} />
            {/* <Route path="/farmers" element={<Farmers />} /> */}
            {/* <Route path="/rate-chart" element={<RateChart />} /> */}
            {/* <Route path="/billing" element={<Billing />} /> */}

            <Route path="/farmers" element={<FarmerList />} />
            <Route path="/farmers/add" element={<AddEditFarmer />} />
            <Route path="/farmers/edit/:id" element={<AddEditFarmer isEdit={true} />} />
            {/* Add more routes as needed */}

            </Route>
        </Routes>
    )
}