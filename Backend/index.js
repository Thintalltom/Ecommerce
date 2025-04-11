import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import EcomRoutes from './Routes/EcomRoutes.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/products', EcomRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ MongoDB connected to Ecommerce database');
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('❌ Failed to connect to MongoDB', err);
  });