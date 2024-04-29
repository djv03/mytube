const express = require("express");
const colors = require("colors");
const moragan = require("morgan");
const dotenv = require("dotenv");
const path = require('path')
const cors = require('cors');

const mongoose = require("mongoose");

//dotenv conig
dotenv.config();


//rest obejct
const app = express();

//middlewares
app.use(express.json());
app.use(moragan("dev"));
app.use(cors());



const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017');
    console.log(`Mongodb connected ${mongoose.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`Mongodb Server Issue ${error}`.bgRed.white);
  }
};

//mongodb connection
connectDB();


const {loginController,registerController}= require('./controllers/userCtrl')
//routes
app.post("/register", registerController);
app.post("/login", loginController);

  //port
  const port = process.env.PORT || 8080;
  //listen port
  app.listen(port, () => {

    app.get('/',(req,res)=>{
      res.send("all done and running")
    })
    console.log(
      `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
        .bgCyan.white
    );
  });
