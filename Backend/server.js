
const express = require('express');
const cors = require('cors');
const moongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const DB_uri = process.env.ATLAS_URI;
moongoose.connect(DB_uri);
const connection = moongoose.connection;
connection.once('open',()=> {console.log("Mongo DB connection established sucessfully")});

const AdminRouter = require('./routes/Admin');
app.use('/Admin', AdminRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});