import {Grid, Paper , Typography } from '@mui/material';
import { useEffect, useState } from 'react';


export default function Dashboard(){
    const [data, setData ] = useState({totalMilk: 100, farmer: 14});

    useEffect(()=>{
        const fetchData = async () => {
            // const res = {name: "akshay"} //here we have to api call
            // setData(res.name);

        };
        fetchData();
    },[])
return(
    <Grid container spacing={2}>
        <Grid item={12} md={6}>
            <Paper elevation={2} sx={{ p:2 }}>
                <Typography variant='h6'>Totoal Milk collected Today</Typography>
                <Typography variant='h4'>{data.totalMilk} L</Typography>
            </Paper>
        </Grid>

        <Grid item sx={12} md={6}>
            <Paper elevation={2} sx={{ p:2}}>
                <Typography variant='h6'>Totoal Register Farmer</Typography>
                <Typography variant='h4'>{data.farmer}</Typography>
            </Paper>

        </Grid>
    </Grid>
)
}