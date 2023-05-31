const express = require('express');
const app = express();
const router = require('./routes/authOperation')
const cors = require('cors');
app.use(cors({origin: "*"}));
app.use(express.json());

app.use('/', router);
app.listen(3000, ()=> {
    console.log('Hosting on 3000');
})