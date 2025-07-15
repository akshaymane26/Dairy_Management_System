const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

app.use(express.static('public'));
// app.use(cors());
app.use(express.json());

app.use((req , res , next )=> {
	res.setHeader('Access-Control-Allow-Origin' ,'*');
	res.setHeader('Access-Control-Allow-Methods' ,'GET , POST , PUT , PATCH , DELETE');
	res.setHeader('Access-Control-Allow-Headers' ,'Content-Type, X-Requested-With , Accept , Origin, authorization'  );
	res.setHeader('Access-Control-Expose-Headers' , 'authorization');
	next();
});

const url = process.env.MONGO_URL
console.log("GET FROM ENV",url);

main().then(()=>{
    console.log("monoDB conneted to port 5500 ");
    
}).catch((err)=>{
    console.log('failed to connect to database');
    
});

async function main() {
    mongoose.connect(url);
}




app.get('/',(req, res)=>{
    res.send('hey app is running');
})
app.use('/uploads', express.static('uploads'));


// const authRoute = require('./routes/authRoutes');
const farmerRoute = require('./routes/framerRoute');
// const newVoter = require('./routes/newVotterRoutes');

// app.use('/api',authRoute);
app.use('/api',farmerRoute);
// app.use('/api/surve',newVoter);

app.use(cors());

const port = process.env.PORT;
app.listen(port,()=>{
    console.log('port is listing ');
    
})