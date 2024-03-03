const User = require("../models/user-model");
const contect = require("../models/contect-model");

const adminUser = async (req, res) => {
  try {
    const userExist = await User.find({}, { password: 0 });
    console.log(userExist);

    if (!userExist || userExist.length === 0) {
      return res.status(404).json({ msg: "No user exists" });
    }

    return res.status(200).json(userExist);
  } catch (error) {
    next(error);
  }
};

const adminContect = async (req, res) => {
  try {
    const contectExist = await contect.find();

    console.log(contectExist);

    if (!contectExist || contectExist.length == 0) {
      return res.status(404).json({ mag: "No Contects" });
    }

    return res.status(200).json(contectExist);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });

    return res.status(200).json({ msg: "User deleted Successfully" });
  } catch (error) {
    next(error);
  }
};

const deleteContect = async (req, res, next) => {
  try {
    const id = req.params.id;
    await contect.deleteOne({ _id: id });

    return res.status(200).json({ msg: "Contect deleted Successfully" });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const updatedData = req.body;

    const id = req.params.id;
    console.log("updatedData: ", updatedData);
    await User.updateOne(
      { _id: id },
      {
        $set: updatedData,
      }
    );
    return res.status(200).json({ msg: "User Updated Successfully" });
  } catch (error) {
    next(error);
  }
};

const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }, { password: 0 });

    return res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};

module.exports = { adminUser, adminContect, deleteUser, getUser, updateUser,deleteContect };
