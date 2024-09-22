const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/router');

require('dotenv').config()

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('views'));

app.use('/api', apiRoutes);

mongoose.connect(process.env.DB_CONNECTION)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

