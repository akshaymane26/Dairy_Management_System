import React from "react";
import { AppBar, Toolbar, Typography, IconButton} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Header(){
    return (
        <AppBar position="static" sx={{ backgroundColor: '#1976d2', zIndex: 1201 }}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Dairy Admin Panel
                </Typography>
                <IconButton color="inherit" edge="end">
                    <LogoutIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}