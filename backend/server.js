import express from 'express';  

import { connectDB } from './config/dbconfig.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Katlego will be the best developer in the world!');
}
);

app.listen(5000, () => {
    connectDB();
  console.log('Server is running on port http://localhost:5000');
}); 