require('dotenv').config();
import express from 'express';

const app = express();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Gateway Auth is listening on port ${PORT}`);
});
