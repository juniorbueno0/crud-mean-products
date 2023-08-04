const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// create sertver
const app = express();

// DB conection
connectDB();
app.use(cors());

// middleware allow json file post  
app.use(express.json())


app.use('/api/products', require('./routes/product'))


// main route
// app.get('/', (req, res)=> {
//     res.send('Hello from the server!');
// });

app.listen(3000, () => {
    console.log('server has started!');
})