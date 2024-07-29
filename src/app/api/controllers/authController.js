// import expressAsyncHandler from "express-async-handler";
// import user from "../models/UserModel.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// export const signIn = expressAsyncHandler(async (req, res) => {
//   try {
//     let { email, password } = req.body;
//       const finduser = await user.findOne({email})
//         if(email && (await bcrypt.compare(password,finduser.password))){
//           const token = jwt.sign({ objectId:finduser._id }, process.env.SECRET_key);
//           res.cookie("token", token, { httpOnly: true, secure: true });
//           res.json({
//             status: "200",
//             message: "Signin successful",
//             data: finduser,
//             token,
//           });
//         }else{
//           res.json({
//             status: 400,
//             message: "fail",
//           });
//         }
//   } catch (err) {
//     res.status(500).send("Error:" + err.message);
//   }
// });

// export const signUp = expressAsyncHandler(async (req, res) => {
//   try {
//     let { name, email, password, dateOfBirth } = req.body;
//     if (
//       name.trim() === "" ||
//       email.trim() === "" ||
//       password === "" ||
//       dateOfBirth === ""
//     ) {
//       res.json({ status: "FAILED", message: "Empty input field!" });
//     } else if (!/^[a-zA-Z ]*$/.test(name)) {
//       res.json({ status: "FAILED", message: "Invalid name entered" });
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       res.json({ status: "FAILED", message: "Invalid email entered" });
//     } else if (!new Date(dateOfBirth).getTime()) {
//       res.json({ status: "FAILED", message: "Invalid date of birth entered" });
//     } else if (password.length < 6) {
//       res.json({ status: "FAILED", message: "Password is too short" });
//     } else {
//       user
//         .find({ email })
//         .then((result) => {
//           if (result.length) {
//             res.json({
//               status: "FAILED",
//               message: "user with the provided email already exists",
//             });
//           } else {
//             const saltRounds = 10;
//             bcrypt
//               .hash(password, saltRounds)
//               .then((hashedPassword) => {
//                 const newUser = new user({
//                   name,
//                   email,
//                   password: hashedPassword,
//                   dateOfBirth,
//                 });
//                 newUser
//                   .save()
//                   .then((result) => {
//                     res.json({
//                       status: "SUCCESS",
//                       message: "Signup successful",
//                       data: result,
//                     });
//                   })
//                   .catch((err) => {
//                     res.json({
//                       status: "FAILED",
//                       message:
//                         "An error occurred while saving user account" + err,
//                     });
//                   });
//               })
//               .catch((err) => {
//                 res.json({
//                   status: "FAILED",
//                   message: "An error occurred while hasing password!",
//                 });
//               });
//           }
//         })
//         .catch((err) =>
//           res.json({
//             status: "FAILED",
//             message:
//               "An error occureed while checking for existing user!" + err,
//           })
//         );
//     }
//   } catch (err) {
//     res.status(500).send("Error:" + err.message);
//   }
// });

import expressAsyncHandler from "express-async-handler";
import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signIn = expressAsyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await User.findOne({ email });

    if (findUser && (await bcrypt.compare(password, findUser.password))) {
      const token = jwt.sign({ objectId: findUser._id }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });
      res.cookie("token", token, { httpOnly: true, secure: true });
      res.status(200).json({
        status: "200",
        message: "Signin successful",
        data: findUser,
        token,
      });
    } else {
      res.status(400).json({
        status: 400,
        message: "Email or password is incorrect",
      });
    }
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
});

export const signUp = expressAsyncHandler(async (req, res) => {
  try {
    const { name, email, password, date } = req.body;

    // Log request payload to check the received data
    console.log("Request payload:", req.body);

    if (!name || !email || !password || !date) {
      return res.status(400).json({ status: "FAILED", message: "Empty input field!" });
    }

    if (!/^[a-zA-Z ]*$/.test(name)) {
      return res.status(400).json({ status: "FAILED", message: "Invalid name entered" });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ status: "FAILED", message: "Invalid email entered" });
    }

    if (!new Date(date).getTime()) {
      return res.status(400).json({ status: "FAILED", message: "Invalid date of birth entered" });
    }

    if (password.length < 6) {
      return res.status(400).json({ status: "FAILED", message: "Password is too short" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        status: "FAILED",
        message: "User with the provided email already exists",
      });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      dateOfBirth: date,
    });

    const savedUser = await newUser.save();

    res.status(201).json({
      status: "SUCCESS",
      message: "Signup successful",
      data: savedUser,
    });

  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
});
