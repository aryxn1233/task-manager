const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');


dotenv.config();

connectDB();

const app = express();

app.use(cors({
  origin: ["http://localhost:3000", "https://task-manager-nu-lake-82.vercel.app"],
  credentials: true,
}));



app.use(express.json());


app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/tasks'));
app.use('/api/breeds', require('./routes/breeds'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
