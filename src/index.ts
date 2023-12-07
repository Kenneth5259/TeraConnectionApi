import express from 'express';
import dotenv from 'dotenv';

import raid from './controllers/raid.controller'

// initialize dotenv config
dotenv.config();

// initialize app and port
const app = express();
const port = process.env.PORT || 3000;

// initialize json parsing
app.use(express.json());

// register controllers
app.use('/raid', raid);

// run application
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});