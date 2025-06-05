import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';
import bodyParser from 'body-parser';


import authRoutes from './routes/api/auth/index.js';
import userRoutes from './routes/api/user/index.js';
import courseRoutes from './routes/api/course/index.js';
import contactRoutes from './routes/api/contact/index.js';

const frontendURL = process.env.FRONTEND_URL;

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors({
  origin: {frontendURL}, // Adjust this to your frontend origin
  credentials: true
}));
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => {
  console.log('Root route hit');
  res.send('API is running...');
});

// Start Server
const PORT = process.env.PORT;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
