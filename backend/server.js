import express from 'express';  
import { connectDB } from './config/dbconfig.js';
import motorRoutes from './routes/motor.routs.js';


const app = express();
app.use(express.json());

app.use('/api/v1/motors', motorRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    connectDB();
  console.log('Server is running on port http://localhost:5000');
}); 