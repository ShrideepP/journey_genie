import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/signin", async (req, res) => {
  try {
    const { 
      email, 
      password 
    } = JSON.parse(req.body);

    if(!email || !password) {
      return res.status(400).json({ message: "Please fill all the details." });
    };

    if(email !== process.env.EMAIL || password !== process.env.PASSWORD) {
      return res.status(401).json({ message: "Invalid credentials." });
    };

    const token = jwt.sign({ email }, process.env.JWT_SECRET);
    return res.status(200).json({ token, email });
  } catch (error) { 
    console.log('Error while signing in', error);
    return res.status(500).json({ message: 'Internal server error.' });
  };
}); 

export { 
  router as authRoutes
};
