const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./authRoutes');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use('/auth', authRouter);

const start = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(`mongodb+srv://qwerty:qwerty123@cluster0.wooca10.mongodb.net/?retryWrites=true&w=majority`);
    app.listen(PORT, () => console.log(`server started at ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();