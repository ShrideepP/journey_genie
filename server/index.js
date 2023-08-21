import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

import { authRoutes } from "./routes/auth.js";
import { destinationRoutes } from "./routes/destination.js";

const app = express();

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({ message: "Hey, what's up?" });
});

app.use('/api/auth', authRoutes);
app.use('/api/destination', destinationRoutes);

mongoose.connect(process.env.MONGODB_DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    app.listen(3001, () => {
      console.log(`Database connected successfully and server started on PORT: ${3001}`);
    });
  })
  .catch((error) => {
    console.log('Error while connecting to the database', error);
  });
