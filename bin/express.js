const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://janio:janio@cluster0-rgj1f.mongodb.net/dbquiz?retryWrites=true&w=majority',
{useCreateIndex:true,
useNewUrlParser:true, useUnifiedTopology:true})

module.exports = app