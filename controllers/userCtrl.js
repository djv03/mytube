const userModel = require("../models/userModel");

const registerController = async (req, res) => {
    try {
      const exisitingUser = await userModel.findOne({ email: req.body.email });
      if (exisitingUser) {
        return res
          .status(200)
          .send({ message: "User Already Exist", success: false });
      }
      

      const { name, email,password } = req.body
      console.log(req.body);
      const newUser = new userModel({name,email,password});
      await newUser.save();
      res.status(200).send({ message: "Register Sucessfully", success: true });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: `Register Controller ${error.message}`,
      });
    }
  };


  // login callback
const loginController = async (req, res) => {
    try {
      const user = await userModel.findOne({ email: req.body.email });
      if (!user) {
        return res
          .status(200)
          .send({ message: "user not found", success: false });
      }

      if (req.body.password === user.password) {
        return res.status(200).send({ message: "Login Success", success: true,data:user.name });
    }
    else{
          return res.status(200).send({ message: "Invalid credentials", success: false });
      }
      
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: `Error in Login CTRL ${error.message}` });
    }
  };
  

  module.exports = {
    loginController,
    registerController
  };