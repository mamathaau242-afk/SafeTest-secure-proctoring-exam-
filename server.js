const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const Attempt = require('./models/Attempt'); 

const app = express();


app.use(cors({ origin: '*' })); 
app.use(express.json());


const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/proctorDB';

mongoose.connect(mongoURI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch(err => console.log("DB Connection Error:", err));


app.post('/api/submit', async (req, res) => {
  try {
    console.log("Received data for:", req.body.studentName);
    const newAttempt = new Attempt(req.body);
    await newAttempt.save();
    res.status(200).json({ message: "Success" });
  } catch (err) {
    console.error("Save Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});


const PORT = 8000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://127.0.0.1:${PORT}`);
});
