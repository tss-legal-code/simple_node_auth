const express = require('express');
const PORT = process.env.PORT || 5000;

const app = express();

const start = () => {
  try {
    app.listen(PORT, () => console.log(`server started at ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();