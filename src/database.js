import mongoose from "mongoose";

const url = 'mongodb+srv://grupo3:grupo3@cluster0.hazgr.mongodb.net/test'

mongoose.connect(url, {seNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB conectada')
});