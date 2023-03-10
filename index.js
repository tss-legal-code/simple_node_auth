require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./authRoutes');
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use('/auth', authRouter);

const start = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(
      process.env.DATABASE_URL,
      () => console.log('mongodb connected successfully'),
      (err) => console.log(err)
    );
    app.listen(PORT, () => console.log(`server started at ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();