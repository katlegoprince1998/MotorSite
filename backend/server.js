import express from 'express';  
import Motor from './models/motor.model.js';
import { connectDB } from './config/dbconfig.js';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Katlego will be the best developer in the world!');
}
);

app.get('/api/v1/motors/:id', async (req, res) => {
  const {id} = req.params;

  try {
    const motor = await Motor.findById(id);
    if(!motor) {
      return res.status(404).json({ success: false, message: 'Motor not found' });
    }
    res.status(200).json({ success: true, data: motor });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
}
);

app.get('/api/v1/motors', async (req, res) => {
  try {
    const motors = await Motor.find();
    res.status(200).json({ success: true, data: motors });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
}
);

app.delete('/api/v1/motors/:id', async (req, res) => {
   const {id} = req.params;

   try{
     const motor = await Motor.findByIdAndDelete(id);
     if(!motor) {
       return res.status(404).json({ success: false, message: 'Motor not found' });
     }
     res.status(200).json({ success: true, data: motor });
   }
    catch (error) {
      res.status(500).json({ success: false, message: 'Server error' });
    }
  });

app.post('/api/v1/motors', async (req, res) => {
  const data = req.body;

  if(!data.name || !data.description || !data.price || !data.imageUrl) {
    return res.status(400).json({ success: false, message: 'Please fill all fields' });
  }

  try {
    const motor = new Motor(data);
    await motor.save();
    res.status(201).json({ success: true, data: motor });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.put('/api/v1/motors/:id', async (req, res) => {
  const {id} = req.params;
  const data = req.body;

  if(!data.name || !data.description || !data.price || !data.imageUrl) {
    return res.status(400).json({ success: false, message: 'Please fill all fields' });
  }

  try {
    const motor = await Motor.findByIdAndUpdate(id, data, { new: true });
    if(!motor) {
      return res.status(404).json({ success: false, message: 'Motor not found' });
    }
    res.status(200).json({ success: true, data: motor });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
}
);

app.listen(5000, () => {
    connectDB();
  console.log('Server is running on port http://localhost:5000');
}); 