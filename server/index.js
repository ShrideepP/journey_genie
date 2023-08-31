import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { cloudinaryConfig } from "./config/cloudinaryConfig.js";

import { authRoutes } from "./routes/auth.js";
import { destinationRoutes } from "./routes/destination.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use('*', cloudinaryConfig);

app.use('/api/auth', authRoutes);
app.use('/api/destination', destinationRoutes);

app.get('/', (req, res) => {
  res.status(200).json({ message: "Hey, what's up?" });
});

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
