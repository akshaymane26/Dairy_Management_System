// MUI Drawer with links
import React from 'react';
import {Drawer, List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalShipping  from '@mui/icons-material/LocalShipping';
import PeopleIcon from '@mui/icons-material/People';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import TableChartIcon from '@mui/icons-material/TableChart';
import { NavLink } from 'react-router-dom';

const NavItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
  { text: 'Milk Collection', icon: <LocalShipping />, path: '/milk-collection' },
  { text: 'Farmers', icon: <PeopleIcon />, path: '/Farmers' },
  { text: 'Rate Chart', icon: <TableChartIcon />, path: '/rate-chart' },
  { text: 'Billing & Payment', icon: <MonetizationOnIcon />, path: '/billing' },
];

export default function Sidebar(){
    return (
        <Drawer variant='permanent' anchor='left' sx={{ width: 240, '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box' } }}>
            <List>
                {NavItems.map(({label, icon , path }) => (
                    <ListItem 
                    button
                    component={NavLink}
                    to={path}
                    key={label}
                    sx={{'&.active': { backgroundColor: '#e0e0e0' } }}
                    >
                        <ListItemIcon>
                            {icon}
                        </ListItemIcon>
                        <ListItemText primary={label} />
                    </ListItem>
                ))}
            </List>
        </Drawer>)
}