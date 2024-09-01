import express from 'express';
import bodyParser from 'body-parser';
import cros from 'cors';
import mongoose from './database/connected.js';
import authControllers from './controllers/authControllers.js';

const port = 3030;
const app = express();

// midware api
app.use(bodyParser.json());
app.use(cros());

//connected database mongodb altas
mongoose();

//routes

app.use(authControllers);

// litem server api
app.listen(port,()=>{
    console.log(`server listen por: http://localhost:${port}`);
})