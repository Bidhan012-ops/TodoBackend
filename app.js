const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
require('dotenv').config();
const todoRoutes=require('./routes/todoRoutes');
const app=express();
app.use(cors());
app.use(express.json());

app.use(todoRoutes)




const port=process.env.PORT || 3001;
const mongoURI=process.env.MONGODB_URI;
mongoose.connect(mongoURI).then(()=>{
    console.log("Connected to MongoDB");
    app.listen(port,()=>{
        console.log(`Server is running on port http://localhost:${port}`);
    });
}).catch((err)=>{
    console.error("Error connecting to MongoDB:", err);
});