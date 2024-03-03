const bcrypt = require("bcrypt");

const User = require("../models/user-model");

const home = async (req, res) => {
  try {
    res.send("This is home Page by controler");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.json({ msg: "Email is already exists" });
    }

    //    const saltRound=10;

    //    const hashPassword =  await bcrypt.hash(password,saltRound);

    const usercreted = await User.create({ username, email, phone, password });

   
    return res.json({
      msg: "Registration successfull",
      token: await usercreted.generateToken(),
    });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.json("User not exists");
    }

    const user = await bcrypt.compare(password, userExist.password);

    if (user) {
      res.json({
        msg: "login successfull",
        token: await userExist.generateToken(),
        
      });
    } else {
      return res.json({ msg: "Password is not correct" });
    }
  } catch (error) {
    console.error(error);
  }
};

const user = async (req, res) => {
  try {
    const userData = req.user;
    return res.status(200).json({ userData });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { home, register, login, user };
