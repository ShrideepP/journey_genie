import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import UserModel from "../model/user.model.js";

const router = express.Router();

// router.post("/signup", async (req, res) => {
//   try {
//     const {
//       name,
//       role,
//       email,
//       password
//     } = req.body;

//     if(!name || !email || !role || !password) {
//       return res.status(400).json({ message: 'Please fill all the details.' });
//     };

//     let doesUserExist = await UserModel.findOne({ email });

//     if(doesUserExist) {
//       return res.status(409).json({ message: 'Email already exists.' });
//     };

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = new UserModel({
//       name,
//       email,
//       role,
//       password: hashedPassword,
//     });

//     await user.save();
//     res.status(201).json({ message: 'User registered successfully.' });
//   } catch (error) {
//     res.status(500).json({ message: 'Internal server error.' });
//     console.log('Registration error', error);
//   };
// });

router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
        
    const user = await UserModel.findOne({ email });
        
    if(!user) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    };

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid) {
      return res.status(401).json({ message: 'Incorrect passowrd.' });
    };

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.status(202).json({ _id: user._id, name: user.name, email: user.email, role: user.role, token });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error.' });
    console.log('Error while logging in', error);
  };
});

export { 
  router as authRoutes
};
