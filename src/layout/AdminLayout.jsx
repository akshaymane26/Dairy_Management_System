// here we combine the sidebar and header components to create a layout for the admin panel
import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
    return (
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
          <Sidebar />
          <Box sx={{ flexGrow: 1 }}>
            <Header />
            <Box component="main" sx={{ padding: 3 }}>
              <Outlet />
            </Box>
          </Box>
        </Box>
      );
}
